import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { media } from "src/helpers/breakpoints";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SEO from "../components/SEO";

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.textMaxWidth};
  margin: 5rem auto 10rem;
  padding: 0 1rem;
  text-align: center;
  p {
    font-size: 1rem;
    width: clamp(35ch, 100%, 75ch);
    max-width: 100%;
    margin: auto;

    ${media.tablet`
      font-size: 1.75rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > h1,
  h2 {
    font-weight: 400;
    font-size: 2rem;

    ${media.tablet`
      font-size: 3rem;
      padding: 0 2rem;
      margin-bottom: 4rem;
    `}
    ${media.desktop`
      font-size: 4rem;
      padding: 0;
    `}
  }

  h2 {
    margin-top: 4rem;
    ${media.tablet`
      margin-top: 6rem;
    `}
    ${media.desktop`
      margin-top: 10rem;
    `}
  }

  h3 {
    font-size: 1.25rem;
    ${media.tablet`
      font-size: 1.5rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > p {
    margin-top: 2rem;
  }

  > div {
    margin-top: 2rem;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

    ${media.tablet`
      text-align: left;
    `}

    ${media.desktop`
      margin-top: 2rem;
      justify-content: space-between;
    `}

    > div {
      width: clamp(35ch, 45%, 75ch);
      text-align: center;

      > h3 {
        margin-top: 2rem;
      }

      > p {
        margin-top: 1rem;
      }
    }
  }
`;

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <SEO title={t("o_nas")} description={t("mainHeading")} />
      <h1>{t("mainHeading")}</h1>
      <h2 style={{ marginBottom: "2rem" }}>{t("heading1")}</h2>
      <div>
        <div>
          <h3>{t("what_we_do.block1.1")}</h3>
          <p>{t("what_we_do.block1.2")}</p>
          <p>{t("what_we_do.block1.3")}</p>
          <p>{t("what_we_do.block1.4")}</p>
        </div>
        <div>
          <h3>{t("what_we_do.block2.1")}</h3>
          <p>{t("what_we_do.block2.2")}</p>
          <p>{t("what_we_do.block2.3")}</p>
        </div>
        <div>
          <h3>{t("what_we_do.block3.1")}</h3>
          <p>{t("what_we_do.block3.2")}</p>
          <p>{t("what_we_do.block3.3")}</p>
          <p>{t("what_we_do.block3.4")}</p>
        </div>
        <div>
          <h3>{t("what_we_do.block4.1")}</h3>
          <p>{t("what_we_do.block4.2")}</p>
          <p>{t("what_we_do.block4.3")}</p>
        </div>
      </div>
      <h2>{t("heading2")}</h2>
      <p>{t("how_we_do.paragraph1")}</p>
      <p>{t("how_we_do.paragraph2")}</p>
      <h2>{t("heading3")}</h2>
      <p>{t("process.paragraph1")}</p>
      <p>{t("process.paragraph2")}</p>
      <p>{t("process.paragraph3")}</p>
      <h2>{t("heading4")}</h2>
      <p>
        <strong>{t("what_we_dont.bold")}</strong> {t("what_we_dont.paragraph1")}
      </p>
    </Wrapper>
  );
};

export default AboutUs;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    translations: allLocale(filter: { ns: { eq: "routes" } }) {
      edges {
        node {
          id
          ns
          language
          data
        }
      }
    }
  }
`;
