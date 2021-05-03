import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import AnimatedLink from "src/components/AnimatedLinkPageTransitionWrapper";
import ProjectThumbnail from "../components/ProjectThumbnail";
import ProjectThumbnails from "../components/ProjectThumbnails";
import { media } from "src/helpers";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const ThumbnailsWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const formatProjectsQueryResponse = (data) => {
  const chosenLanguage = data.locales.edges[0].node.language;
  const languageForSearch =
    chosenLanguage === "pl" ? "default" : chosenLanguage;
  const formattedProjects = data.projects.group.map(({ edges }) => {
    const body = edges.find((edge) => edge.node.name === "default");
    const slug = edges.find((edge) => edge.node.name === languageForSearch)
      ?.node?.childMarkdownRemark?.frontmatter.slug;

    return {
      ...body.node.childMarkdownRemark.frontmatter,
      slug,
    };
  });
  return formattedProjects;
};

const Portfolio = () => {
  return (
    <div style={{ background: "white" }}>
      <Title>Portfolio</Title>
      <ProjectThumbnails />
    </div>
  );
};

export default Portfolio;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
