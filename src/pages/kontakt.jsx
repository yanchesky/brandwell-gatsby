import React from "react";
import Layout from "../layouts/main";
import { graphql } from "gatsby";

const Kontakt = () => {
  return <span>kontakt</span>;
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
