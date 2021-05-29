import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ProjectThumbnails from "../components/ProjectThumbnails";
import WelcomeScreen from "../components/WelcomeScreen";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  background: white;
  transition: 1s all ease;
  //transform: translateY(100vh);
`;

const Index = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Wrapper id="main-page-wrapper">
        <Title>Portfolio</Title>
        <ProjectThumbnails />
      </Wrapper>
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
