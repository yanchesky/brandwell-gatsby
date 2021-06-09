import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import {
  getArtDirectedImages,
  getArtDirectedAspectRatios,
  reduceImageQueryResult,
} from "src/helpers";

import { media } from "src/helpers";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ProjectThumbnails from "../components/ProjectThumbnails";
import PizzaDoughRecipe from "../components/PizzaDoughRecipe";

const Paragraph = styled.p`
  font-size: ${(props) => (props.isSmall ? "0.875rem" : "1.25rem")};

  max-width: 1138px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;

  ${(props) =>
    props.isBold &&
    `
        font-size: 2rem;
        font-weight: 700;
      `}

  ${media.mobile`
    margin: 10rem auto;
    font-size: ${(props) => (props.isSmall ? "1.5rem" : "2.25rem")};
    ${(props) =>
      props.isBold &&
      `
        font-size: 4rem;
        font-weight: 700;
      `}
  `}
`;

const Wrapper = styled.div``;

const OrderedList = styled.ol`
  font-size: ${(props) => (props.isSmall ? "0.875rem" : "1.25rem")};
  max-width: 1138px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;

  > li {
    margin: 3rem 0;
  }

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

const ScopeOfWork = styled.div`
  text-align: center;
  margin: 10rem auto;
  font-size: 1.125rem;

  span {
    display: inline-block;
    margin-left: 0.5rem;

    &:first-letter {
      text-transform: uppercase;
    }

    & ~ span {
      padding-left: 0.5rem;
      border-left: 1px solid black;
    }
  }
`;

const StyledImage = styled(GatsbyImage)`
  position: relative;
  width: 100%;

  padding: 0;

  ${(props) =>
    props.isFullscreen
      ? `
        height: 0;
        padding-bottom: ${props.ratios.desktop}%;
        `
      : `max-width: ${props.theme.sizes.maxWidth}`};

  margin: 0.5rem auto;

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
  const ratios = getArtDirectedAspectRatios(value);
  const artDirectedImages = getArtDirectedImages(value);
  const artDirectedImage = withArtDirection(
    getImage(value.desktop),
    artDirectedImages
  );

  return (
    <StyledImage
      style={{ display: "block" }}
      isFullscreen={type === "full-image"}
      alt="sds"
      image={artDirectedImage}
      ratios={ratios}
      objectFit="contain"
    />
  );
};

const renderText = ({ value, type }) => {
  if (typeof value === "string") {
    return (
      <Paragraph isBold={type === "bold-text"} isSmall={type === "small-text"}>
        {value}
      </Paragraph>
    );
  }
  if (Array.isArray(value)) {
    return (
      <OrderedList>
        {value.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </OrderedList>
    );
  }
};

const ProjectTemplate = ({
  data,
  pageContext: { slugg, producer, product, categories, occurrence, order },
}) => {
  const { t } = useTranslation();
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
    .map(({ children, tagName }) => {
      if (tagName === "p") {
        return children[0].value;
      }
      if (tagName === "ol") {
        return children
          .filter((el) => !!el.children)
          .map((el) => el.children[0].value);
      }
    });

  const orderedTextAndImages = occurrence.map((blockType) => {
    switch (blockType) {
      case "text":
        return {
          type: "text",
          value: paragraphs.shift(),
        };
      case "bold-text":
        return {
          type: "bold-text",
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

      default:
        return {
          type: "text",
          value: paragraphs.shift(),
        };
    }
  });

  const isItGrodziec = slugg === "mlyn_grodziec" || slugg === "młyn_grodziec";

  return (
    <Wrapper>
      <Heading>{frontmatter.heading}</Heading>
      {[...orderedTextAndImages, ...images].map((content) => {
        switch (content.type) {
          case "text":
          case "small-text":
          case "bold-text":
            return renderText(content);
          case "image":
          case "full-image":
            return renderImage(content);
          default:
            return renderImage({ value: content });
        }
      })}
      {isItGrodziec && <PizzaDoughRecipe />}
      <ScopeOfWork>
        Zakres prac:
        {categories.map((category) => (
          <span>{t(category)}</span>
        ))}
      </ScopeOfWork>
      <ProjectThumbnails filterFrom={order} />
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query($relativeDirectory: String!, $language: String!, $id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      htmlAst
      frontmatter {
        slug
        producer
        product
        heading
        occurrence
        categories
        order
      }
    }

    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    desktopImages: allFile(
      filter: {
        relativePath: { regex: $relativeDirectory }
        name: { regex: "/^((?!mobile|tablet|Thumb).)*$/" }
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
