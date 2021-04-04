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
import ProjectCopySection from "../components/ProjectCopySection";

const StyledGatsbyImage = styled(GatsbyImage)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 0;
  margin: 0;

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

const ProjectTemplate = ({
  data,
  pageContext: { producer, product, categories },
}) => {
  const {
    markdownRemark: { frontmatter, html },
    desktopImages: { edges: desktopEdges },
    tabletImages: { edges: tabletEdges },
    mobileImages: { edges: mobileEdges },
  } = data;

  const mobileImages = reduceImageQueryResult(mobileEdges);
  const tabletImages = reduceImageQueryResult(tabletEdges);

  const [headingImage, ...images] = desktopEdges
    .map(({ node }) => ({
      order: parseInt(node.name) || 0,
      desktop: node,
      mobile: mobileImages[node.name],
      tablet: tabletImages[node.name],
    }))
    .sort((a, b) => a.order - b.order);

  const artDirectedHeadingImage = withArtDirection(
    getImage(headingImage.desktop),
    getArtDirectedImages(headingImage)
  );

  return (
    <Layout>
      <GatsbyImage
        alt="heading"
        image={artDirectedHeadingImage}
        ratios={getArtDirectedAspectRatios(headingImage)}
        style={{
          width: "100%",
          height: "calc(100vh - 127px)",
        }}
      />
      <ProjectCopySection
        heading={frontmatter.heading}
        mainText={html}
        projectDetails={{ producer, product, categories }}
      />
      {images.map((el) => {
        const ratios = getArtDirectedAspectRatios(el);
        const artDirectedImages = getArtDirectedImages(el);
        const artDirectedImage = withArtDirection(
          getImage(el.desktop),
          artDirectedImages
        );

        return (
          <StyledGatsbyImage
            alt="sds"
            image={artDirectedImage}
            ratios={ratios}
          />
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slugg: String!, $relativeDirectory: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slugg } }) {
      html
      frontmatter {
        slug
        producer
        product
        heading
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
