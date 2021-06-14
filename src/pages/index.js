import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ProjectThumbnails from "../components/ProjectThumbnails";
import SEO from "../components/SEO";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Index = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <SEO
        title={"Brand Design | Packaging"}
        description={
          "Brandwell is an independent branding agency. We build brands. We design packaging and identification."
        }
      />
      <Title>Portfolio</Title>
      <ProjectThumbnails />
    </div>
  );
};

export default Index;

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
