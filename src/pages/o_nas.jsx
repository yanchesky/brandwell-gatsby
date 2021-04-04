import React from "react";
import Layout from "../layouts/main";
import { graphql } from "gatsby";

const ONas = () => {
  return <Layout>o nas</Layout>;
};

export default ONas;

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
