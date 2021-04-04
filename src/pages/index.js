import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "src/layouts/main";
import { useTranslation, Trans, useI18next } from "gatsby-plugin-react-i18next";

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors["gray-400"]};
`;

// markup
const IndexPage = (props) => {
  const groupedPages = props.data.pagesData.edges
    .filter(({ node }) => node.isCreatedByStatefulCreatePages)
    .reduce((prev, { node }) => {
      return {
        ...prev,
        [node.context.i18n.originalPath]: {
          ...(prev?.[node.context.i18n.originalPath] || {}),
          [node.context.i18n.language]: node.path,
        },
      };
    }, {});

  // const groupedMdPages = props.data.pagesData.edges
  //   .filter(({ node }) => !node.isCreatedByStatefulCreatePages)
  //   .reduce((prev, { node }) => {
  //     return {
  //       ...prev,
  //       [node.context.relativeDirectory]: {
  //         ...(prev?.[node.context.relativeDirectory] || {}),
  //         [node.context.i18n.language]: node.path,
  //       },
  //     };
  //   }, {});
  //
  // console.log("groupedMdPages:", groupedMdPages);

  // const mdPagesSitemap = Object.entries(groupedMdPages).map(([_, val]) => {
  //   return {
  //     url: "site.siteMetadata.siteUrl" + val["pl"],
  //     changefreq: "monthly",
  //     priority: 0.5,
  //     links: [
  //       {
  //         lang: "x-default",
  //         url: `${"site.siteMetadata.siteUrl"}${val["pl"]}`,
  //       },
  //       ...Object.entries(val).map(([lang, translatedLink]) => {
  //         return {
  //           lang,
  //           url: `${"site.siteMetadata.siteUrl"}${translatedLink}`,
  //         };
  //       }),
  //     ],
  //   };
  // });
  //
  // console.log("groupedMdPages:", groupedMdPages);
  // console.log("groupedPages:", groupedPages);
  // console.log("mdPagesSitemap:", mdPagesSitemap);

  return (
    <Layout>
      <Wrapper>main</Wrapper>
    </Layout>
  );
};

export default IndexPage;

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
    pagesData: allSitePage {
      edges {
        node {
          path
          isCreatedByStatefulCreatePages
          context {
            slugg
            locale
            i18n {
              language
              originalPath
              routed
            }
            relativeDirectory
          }
        }
      }
    }
  }
`;
