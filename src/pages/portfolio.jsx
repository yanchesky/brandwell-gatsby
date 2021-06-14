import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ProjectThumbnails from "../components/ProjectThumbnails";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

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
