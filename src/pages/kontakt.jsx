import React from "react";
import styled from "styled-components";
import Footer from "src/components/Footer";
import { graphql } from "gatsby";

const Wrapper = styled.div`
  height: calc(100vh - 10rem);
`;

const Kontakt = () => {
  return (
    <Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default Kontakt;

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
