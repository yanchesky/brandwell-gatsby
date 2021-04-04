import React from "react";
import styled from "styled-components";

import ProjectDetailsElement from "./ProjectDetailsElement";
import { media } from "src/helpers/breakpoints";

const MainWrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(10rem, 14rem) 1fr;
  
  grid-template-areas:
    "details details"
    "heading heading"
    "main main";
  
 
  ${media.tablet`
    padding: 3rem;
     grid-template-areas:
        "heading heading"
        "details main ";
  `}
  
  ${media.desktop`
    padding: 6rem;
  `}

  .project-heading {
    grid-area: heading;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    
    line-height: 28px;
    
    ${media.tablet`
        font-size: 2.125rem;
        font-weight: 300;
        line-height: 42px;
        margin-bottom: 10rem;
    `}
  }

  .project-details-section {
    grid-area: details;
  }

  .main-copy-section {
    grid-area: main;
    font-size: 1.125rem;
    font-weight: 300;
    
    
    p + p {
        margin-top: 1.5rem;
    }
    
    ${media.tablet`
        font-size: 1.5rem;
        font-weight: 400;
    `}
    
    ${media.twoColumns`
        column-count: 2;
    `}
`;

const ProjectCopySection = ({ mainText: __html, heading, projectDetails }) => {
  return (
    <MainWrapper>
      <p className="project-heading">{heading}</p>
      <ProjectDetailsElement projectDetails={projectDetails} />
      <div className="main-copy-section" dangerouslySetInnerHTML={{ __html }} />
    </MainWrapper>
  );
};

export default ProjectCopySection;
