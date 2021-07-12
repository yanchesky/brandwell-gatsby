const path = require("path");
const {
  serializer,
  sitemapQuery,
} = require(`${__dirname}/src/helpers/sitemap`);

const settings = {
  title: "brandwell-gatsby",
  siteUrl: "https://brandwell.pl",
  //siteUrl: "http://localhost:9000",
  defaultLanguage: "pl",
  languages: ["pl", "en"],
  projectsSlug: "portfolio",
};

module.exports = {
  siteMetadata: {
    ...settings,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-28877178-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
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
