import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import {
  getArtDirectedImages,
  getArtDirectedAspectRatios,
  reduceImageQueryResult,
} from "src/helpers";
import Layout from "../layouts/main";
import { media } from "src/helpers";

const InfoWrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  padding: 0 1rem;
  margin: auto;
`;

const Info = styled.span`
  font-family: "Roboto", sans-serif;
  ${(props) => props.bold && "font-weight: bold"};

  & + span {
    margin-left: 0.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: ${(props) => (props.isSmall ? "0.875rem" : "1.25rem")};
  max-width: 1138px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;

  ${media.mobile`
    margin: 10rem auto;
    font-size: ${(props) => (props.isSmall ? "1.5rem" : "2.25rem")};
  `}
`;

const Heading = styled.h1`
  max-width: 1138px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;
  font-size: 2rem;
  ${media.mobile`
    font-size: 4rem;
    margin: 5rem auto;
  `}
`;

const StyledImage = styled(GatsbyImage)`
  position: relative;
  display: block;
  width: 100%;

  padding: 0;

  ${(props) =>
    props.isFullscreen
      ? `
        height: 0;
        padding-bottom: ${props.ratios.desktop}%;
        `
      : ``};

  margin: 0 auto;

  ${(props) =>
    props.ratios.mobile &&
    `
    @media (max-width: 600px) {
      height: 0;
      padding-bottom: ${props.ratios.mobile}%;
    }
  `}

  ${(props) =>
    props.ratios.tablet &&
    `
    @media (min-width: 601px) and (max-width: 1200px) {
      height: 0;
      padding-bottom: ${props.ratios.tablet}%;
    }
    `}
`;

const renderImage = ({ value, type }) => {
  console.log("value:", value);
  const ratios = getArtDirectedAspectRatios(value);
  const artDirectedImages = getArtDirectedImages(value);
  const artDirectedImage = withArtDirection(
    getImage(value.desktop),
    artDirectedImages
  );

  return (
    <StyledImage
      isFullscreen={type === "full-image"}
      alt="sds"
      image={artDirectedImage}
      ratios={ratios}
      objectFit="contain"
    />
  );
};

const renderText = ({ value, type }) => {
  return <Paragraph isSmall={type === "small-text"}>{value}</Paragraph>;
};

const ProjectTemplate = ({
  data,
  pageContext: { producer, product, categories, occurrence },
}) => {
  const {
    markdownRemark: { frontmatter, html, htmlAst },
    desktopImages: { edges: desktopEdges },
    tabletImages: { edges: tabletEdges },
    mobileImages: { edges: mobileEdges },
  } = data;

  const mobileImages = reduceImageQueryResult(mobileEdges);
  const tabletImages = reduceImageQueryResult(tabletEdges);

  const images = desktopEdges
    .map(({ node }) => ({
      order: parseInt(node.name) || 0,
      desktop: node,
      mobile: mobileImages[node.name],
      tablet: tabletImages[node.name],
    }))
    .sort((a, b) => a.order - b.order);

  const paragraphs = htmlAst.children
    .filter((el) => !!el.children)
    .map(({ children }) => children[0].value);

  const orderedTextAndImages = occurrence.map((blockType) => {
    switch (blockType) {
      case "text":
        return {
          type: "text",
          value: paragraphs.shift(),
        };
      case "small-text":
        return {
          type: "small-text",
          value: paragraphs.shift(),
        };
      case "image":
        return {
          type: "image",
          value: images.shift(),
        };
      case "full-image":
        return {
          type: "full-image",
          value: images.shift(),
        };
    }
  });

  console.log("orderedTextAndImages:", orderedTextAndImages);

  return (
    <Layout>
      <InfoWrapper>
        <Info bold>{frontmatter.producer}</Info>
        <Info>{frontmatter.product}</Info>
      </InfoWrapper>
      <Heading>{frontmatter.heading}</Heading>
      {[...orderedTextAndImages, ...images].map((content) => {
        switch (content.type) {
          case "text":
          case "small-text":
            return renderText(content);
          case "image":
          case "full-image":
            return renderImage(content);
          default:
            return renderImage({ value: content });
        }
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slugg: String!, $relativeDirectory: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slugg } }) {
      html
      htmlAst
      frontmatter {
        slug
        producer
        product
        heading
        occurrence
      }
    }
    desktopImages: allFile(
      filter: {
        relativePath: { regex: $relativeDirectory }
        name: { regex: "/^((?!mobile|tablet|thumbnail).)*$/" }
      }
    ) {
      edges {
        node {
          id
          relativeDirectory
          childImageSharp {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 100
            )
          }
          name
        }
      }
    }
    tabletImages: allFile(
      filter: {
        relativePath: { regex: $relativeDirectory }
        name: { regex: "/tablet/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1200
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
    }
    mobileImages: allFile(
      filter: {
        relativePath: { regex: $relativeDirectory }
        name: { regex: "/mobile/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              width: 600
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
    }
  }
`;

export default ProjectTemplate;
