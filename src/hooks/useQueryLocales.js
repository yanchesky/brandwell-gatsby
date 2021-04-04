import { graphql, useStaticQuery } from "gatsby";

export const useQueryLocales = () =>
  useStaticQuery(graphql`
    query Locales {
      allLocale(filter: { ns: { eq: "routes" } }) {
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
  `);
