import { graphql, useStaticQuery } from "gatsby";

export const useQueryProjects = () =>
  useStaticQuery(graphql`
    query Projects {
      projects: allFile(
        filter: {
          relativePath: { regex: "/projects/" }
          extension: { eq: "md" }
        }
      ) {
        group(field: relativeDirectory) {
          edges {
            node {
              relativeDirectory
              childMarkdownRemark {
                frontmatter {
                  slug
                  categories
                  producer
                  product
                  title
                  order
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData(
                        width: 415
                        height: 415
                        jpgOptions: { quality: 100 }
                        quality: 100
                      )
                    }
                  }
                }
              }
              name
            }
          }
        }
      }
    }
  `);
