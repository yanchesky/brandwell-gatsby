import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";
import Layout from "../layouts/main";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import AnimatedLink from "src/components/AnimatedLinkPageTransitionWrapper";
import ProjectThumbnail from "../components/ProjectThumbnail";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
`;

const getCurrentLanguage = (data) => {
  return data.locales.edges[0].node.language;
};

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

const Portfolio = ({ data }) => {
  const projects = formatProjectsQueryResponse(data);
  const language = getCurrentLanguage(data);

  console.log("projects:", projects);

  return (
    <>
      <Title>Portfolio</Title>
      <div
        style={{
          maxWidth: "1366px",
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {[...projects, projects[0]].map(
          ({ thumbnail, slug, producer, categories }) => {
            return (
              <AnimatedLink to={`/portfolio/${slug}`} language={language}>
                <ProjectThumbnail
                  alt={"sdsd"}
                  image={thumbnail}
                  producer={producer}
                  categories={categories}
                />
              </AnimatedLink>
            );
          }
        )}
      </div>
    </>
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
    projects: allFile(
      filter: { relativePath: { regex: "/projects/" }, extension: { eq: "md" } }
    ) {
      group(field: relativeDirectory) {
        edges {
          node {
            relativeDirectory
            childMarkdownRemark {
              frontmatter {
                slug
                categories
                producer
                product
                title
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(width: 415, height: 415)
                  }
                }
              }
            }
            name
          }
        }
      }
    }
  }
`;
