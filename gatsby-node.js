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
                  order
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

  const { projectsSlug, languages } = result.data.site.siteMetadata;

  result.data.projects.group.forEach(({ edges }) => {
    const pageLanguageVariants = edges.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.node.name]: {
          ...curr.node.childMarkdownRemark.frontmatter,
          html: curr.node.childMarkdownRemark.html,
          id: curr.node.childMarkdownRemark.id,
        },
        relativeDirectory: curr.node.relativeDirectory,
      };
    }, {});

    const { occurrence, categories, order } = pageLanguageVariants["default"]; // universal properties for all languages

    languages.forEach((language) => {
      const { slug, id } =
        pageLanguageVariants[language] || pageLanguageVariants["default"];

      const relativeDirectory = `/${pageLanguageVariants.relativeDirectory}/images/`;

      createPage({
        path: `${language}/${projectsSlug}/${slug}`,
        component: ProjectTemplate,
        context: {
          slugg: slug,
          id,
          relativeDirectory,
          locales: languages,
          locale: language,
          categories,
          occurrence,
          order,
          language,
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
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
