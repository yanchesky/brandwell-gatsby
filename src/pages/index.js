import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  background: white;
  height: 20vh;
`;

const Index = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Wrapper id="main-page-wrapper" />
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
