import React from "react";
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next";
import { translateOriginalPathToLanguage } from "../helpers/translation";

export function useTranslateNavigation(navigationElements) {
  const { language } = React.useContext(I18nextContext);
  const { t } = useTranslation();

  return navigationElements.map((element) => ({
    language,
    to: translateOriginalPathToLanguage(element, language),
    label: t(element),
  }));
}
