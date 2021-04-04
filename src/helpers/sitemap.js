exports.serializer = ({ site, allSitePage }) => {
  const groupedStatefullPages = allSitePage.edges
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

  const statefullPagesSitemap = Object.entries(groupedStatefullPages)
    .filter(([key, val]) => key !== "/dev-404-page/" && key !== "/")
    .map(([originalPath, languageVariants]) => {
      return {
        url: site.siteMetadata.siteUrl + originalPath,
        changefreq: "monthly",
        priority: 0.5,
        links: [
          {
            lang: "x-default",
            url: `${site.siteMetadata.siteUrl}${originalPath}`,
          },
          ...Object.entries(languageVariants).map(([lang, translatedLink]) => {
            return {
              lang,
              url: `${site.siteMetadata.siteUrl}${translatedLink}`,
            };
          }),
        ],
      };
    });

  const groupedMdPages = allSitePage.edges
    .filter(({ node }) => !node.isCreatedByStatefulCreatePages)
    .reduce((prev, { node }) => {
      return {
        ...prev,
        [node.context.relativeDirectory]: {
          ...(prev?.[node.context.relativeDirectory] || {}),
          [node.context.i18n.language]: node.path,
        },
      };
    }, {});

  const mdPagesSitemap = Object.entries(groupedMdPages).map(([_, val]) => {
    return {
      url: site.siteMetadata.siteUrl + val["pl"],
      changefreq: "monthly",
      priority: 0.8,
      links: [
        {
          lang: "x-default",
          url: `${site.siteMetadata.siteUrl}${val["pl"]}`,
        },
        ...Object.entries(val).map(([lang, translatedLink]) => {
          return {
            lang,
            url: `${site.siteMetadata.siteUrl}${translatedLink}`,
          };
        }),
      ],
    };
  });

  return [...statefullPagesSitemap, ...mdPagesSitemap];
};

exports.sitemapQuery = `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
 
          allSitePage {
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
        }`;
