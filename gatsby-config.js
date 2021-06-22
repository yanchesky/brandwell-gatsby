const path = require("path");
const {
  serializer,
  sitemapQuery,
} = require(`${__dirname}/src/helpers/sitemap`);

const settings = {
  title: "brandwell-gatsby",
  siteUrl: "https://www.brandwell.pl/",
  defaultLanguage: "pl",
  languages: ["pl", "en"],
  projectsSlug: "portfolio",
};

module.exports = {
  siteMetadata: {
    ...settings,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`${__dirname}/src/layouts/main.jsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/intl`,
        name: `locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        ns: ["other", "translation"],
        defaultNS: "translation",
        localeJsonSourceName: "locales",
        languages: settings.languages,
        defaultLanguage: settings.defaultLanguage,
        siteUrl: settings.siteUrl,
        generateDefaultLanguagePage: true,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: `/:lang/${settings.projectsSlug}/:name`,
            getLanguageFromPath: true,
            excludeLanguages: settings.languages,
          },
          {
            matchPath: `/static/`,
            getLanguageFromPath: false,
            excludeLanguages: settings.languages,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: { src: path.resolve(__dirname, "src") },
        extensions: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: sitemapQuery,
        serialize: serializer,
      },
    },
  ],
};
