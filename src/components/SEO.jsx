import React from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SITE_URL = "https://brandwell.pl";

const SEO = ({ title, description, image }) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <Helmet titleTemplate="%s | Brandwell">
        <html dir="ltr" lang={i18n.language} />
        <meta charSet="utf-8" />
        <title lang={i18n.language}>{title}</title>
        <link rel="canonical" href={`${SITE_URL}${pathname}`} />
        <meta name="description" content={description} />
      </Helmet>
      {image ? (
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${SITE_URL}${pathname}`} />
          <meta property="og:title" content={title} />
          <meta
            property="og:image"
            content={`${SITE_URL}${image.childImageSharp.original.src}`}
          />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="Brandwell" />
          <meta property="og:locale" content={i18n.language} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
        </Helmet>
      ) : null}
    </>
  );
};

export default SEO;
