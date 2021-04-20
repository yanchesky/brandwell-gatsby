const path = require("path");
const {
  serializer,
  sitemapQuery,
} = require(`${__dirname}/src/helpers/sitemap`);

const settings = {
  title: "brandwell-gatsby",
  siteUrl: "https://example.com/",
  defaultLanguage: "pl",
  languages: ["pl"],
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
        defaultNS: "translation",
        localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
        languages: settings.languages,
        defaultLanguage: settings.defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: settings.siteUrl,
        generateDefaultLanguagePage: true,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
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
