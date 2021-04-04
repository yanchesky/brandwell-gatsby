const routeTranslations = require("src/intl/routeTranslations.json");

export const translateOriginalPath = (originalPath, slugAlternates) => {
  const [language, mainPath, slug] = originalPath.split("/");
  const fixedLanguage = language === "pl" ? "default" : language;

  const englishTranslatedMainPath =
    routeTranslations[mainPath]?.["en"] || mainPath;
  const polishTranslatedMainPath =
    routeTranslations[mainPath]?.["pl"] || mainPath;

  const slugAlternatesObject = slug
    ? slugAlternates.find((el) => el[fixedLanguage] === slug)
    : {};

  const {
    default: polishTranslatedSlug,
    en: englishTranslatedSlug,
  } = slugAlternatesObject;

  const englishTranslation =
    "/" +
    englishTranslatedMainPath +
    (englishTranslatedSlug ? `/${englishTranslatedSlug}` : "");
  const polishTranslation =
    "/" +
    polishTranslatedMainPath +
    (polishTranslatedSlug ? `/${polishTranslatedSlug}` : "");

  return {
    englishTranslation,
    polishTranslation,
  };
};

export const translateOriginalPathToLanguage = (originalPath, language) => {
  const translatedPage = routeTranslations[originalPath]?.[language];
  return `/${translatedPage || originalPath}`;
};

export const convertToSlugAlternates = (pagesQuery) => {
  return pagesQuery.projects.group.map(({ edges }) =>
    edges.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.node.name]: curr.node.childMarkdownRemark.frontmatter.slug,
      };
    }, {})
  );
};
