import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";
import Layout from "../layouts/main";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";

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

    console.log("body:", body);

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

  return (
    <Layout>
      <p>
        Jesteśmy niezależną agencją brandingową. Budujemy marki, wymyślamy im
        nowe nazwy, tworzymy strategie. Projektujemy opakowania i identyfikacje.
        Odświeżamy też wizerunki istniejących marek lub opakowań.{" "}
      </p>
      {projects.map(({ thumbnail, slug }) => {
        return (
          <Link to={`/portfolio/${slug}`} language={language}>
            <GatsbyImage
              alt={"sdsd"}
              image={thumbnail.childImageSharp.gatsbyImageData}
            />
            <span>{slug}</span>
          </Link>
        );
      })}
      <PortfolioContainer />
    </Layout>
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
                    gatsbyImageData(width: 200, height: 200)
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
