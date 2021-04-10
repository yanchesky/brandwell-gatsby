const routeTranslations = require(`${__dirname}/src/intl/routeTranslations.json`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const ProjectTemplate = require.resolve(
    `./src/templates/ProjectTemplate.jsx`
  );
  const result = await graphql(`
    {
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
                  categories
                  product
                  producer
                  occurrence
                }
                html
              }
              relativeDirectory
              name
            }
          }
        }
      }
      site {
        siteMetadata {
          languages
          defaultLanguage
          projectsSlug
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const {
    projectsSlug,
    defaultLanguage,
    languages,
  } = result.data.site.siteMetadata;

  result.data.projects.group.forEach(({ edges }) => {
    const pageLanguageVariants = edges.reduce(
      (prev, curr) => {
        return {
          ...prev,
          [curr.node.name]: {
            ...curr.node.childMarkdownRemark.frontmatter,
            html: curr.node.childMarkdownRemark.html,
          },
          relativeDirectory: curr.node.relativeDirectory,
        };
      },
      { [defaultLanguage]: {} }
    );

    const {
      occurrence,
      categories,
      product: defProduct,
      producer: defProducer,
      slug: defSlug,
      html: defHtml,
      images: defImages,
    } = pageLanguageVariants["default"];

    languages.forEach((language) => {
      const {
        product: intldProduct,
        producer: intldProducer,
        heading: intldHeading,
        slug: intldSlug,
        html: intldHtml,
        images: intldImages,
      } = pageLanguageVariants[language];

      const path = intldSlug || defSlug;

      const relativeDirectory = `/${pageLanguageVariants.relativeDirectory}/images/`;

      createPage({
        path: `${language}/${projectsSlug}/${path}`,
        component: ProjectTemplate,
        context: {
          slugg: path,
          relativeDirectory,
          locales: languages,
          locale: language,
          categories,
          occurrence,
          product: intldProduct || defProduct,
          producer: intldProducer || defProducer,
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions, store }) => {
  const { deletePage, createPage } = actions;
  const [_, language, route] = page.path?.split("/");

  if (language != false && route != false) {
    if (route in routeTranslations) {
      if (language in routeTranslations[route]) {
        const translatedRoute = routeTranslations[route][language];
        const oldPage = { ...page };
        page.path = `/${language}/${translatedRoute}`;
        deletePage(oldPage);
        createPage(page);
      }
    }
  }
};
