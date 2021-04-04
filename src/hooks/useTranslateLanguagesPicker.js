import React, { useState, useEffect } from "react";
import { I18nextContext } from "gatsby-plugin-react-i18next";
import { useQueryMdPages } from "./useQueryMdPages";
import {
  convertToSlugAlternates,
  translateOriginalPath,
  translateOriginalPathToLanguage,
} from "../helpers/translation";
import { navigationElements } from "../components/Header/Navigation/navgationElements";

export function useTranslateLanguagesPicker() {
  const { path } = React.useContext(I18nextContext);
  const fixedPath = path[0] === "/" ? path.slice(1) : path;

  const response = useQueryMdPages();
  const slugAlternates = convertToSlugAlternates(response);

  const { englishTranslation, polishTranslation } = translateOriginalPath(
    fixedPath,
    slugAlternates
  );

  return {
    englishTranslation,
    polishTranslation,
  };
}
