import { graphql, useStaticQuery } from "gatsby";

export const useQueryMdPages = () =>
  useStaticQuery(graphql`
    query MdPages {
      projects: allFile(
        filter: {
          relativeDirectory: { regex: "/projects/" }
          extension: { eq: "md" }
        }
      ) {
        group(field: relativeDirectory) {
          edges {
            node {
              childMarkdownRemark {
                id
                frontmatter {
                  slug
                }
                html
              }
              relativeDirectory
              name
            }
          }
        }
      }
    }
  `);
