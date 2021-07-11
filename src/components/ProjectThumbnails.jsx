import React from "react";
import { useQueryProjects } from "src/hooks";
import AnimatedLink from "src/components/AnimatedLinkPageTransitionWrapper";
import ProjectThumbnail from "../components/ProjectThumbnail";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { media } from "../helpers";

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

const formatProjectsQueryResponse = (data, chosenLanguage) => {
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

const ProjectThumbnails = ({ filterFrom = 0 }) => {
  const data = useQueryProjects();
  const { language } = React.useContext(I18nextContext);
  const projects = formatProjectsQueryResponse(data, language);
  const sortedProjects = projects
    .sort((a, b) => a.order - b.order)
    .filter((project) => project.order > filterFrom)
    .concat(projects.filter((project) => project.order < filterFrom));

  return (
    <ThumbnailsWrapper>
      {sortedProjects.map(
        ({ thumbnail, slug, producer, categories }, index) => {
          return (
            <AnimatedLink key={index} to={`/portfolio/${slug}`}>
              <ProjectThumbnail
                alt={producer}
                image={thumbnail}
                producer={producer}
                categories={categories}
              />
            </AnimatedLink>
          );
        }
      )}
    </ThumbnailsWrapper>
  );
};

export default ProjectThumbnails;
