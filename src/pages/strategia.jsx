import React from "react";
import Layout from "../layouts/main";
import { graphql } from "gatsby";

const Strategia = () => {
  return <Layout>strategia</Layout>;
};

export default Strategia;

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
    translations: allLocale(filter: { ns: { eq: "routes" } }) {
      edges {
        node {
          id
          ns
          language
          data
        }
      }
    }
  }
`;
