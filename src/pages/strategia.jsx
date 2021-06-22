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
      font-size: 1.125rem;
    `}
    ${media.desktop`
      font-size: 1.5rem;
    `}
  }

  > h1,
  h2 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 4rem;
    ${media.tablet`
      font-size: 3rem;
    `}
    ${media.desktop`
      font-size: 4rem;
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

  h3,
  & > p:first-of-type {
    font-size: 1.25rem;
    ${media.tablet`
      font-size: 1.5rem;
    `}
    ${media.desktop`
      font-size: 2.25rem;
    `}
  }

  > p ~ p {
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
      margin-top: 6rem;
      justify-content: space-between;
    `}

    > div {
      width: clamp(35ch, 45%, 75ch);

      > h3 {
        margin-top: 2rem;
      }

      > p {
        margin-top: 2rem;
      }
    }
  }
`;

const Strategia = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <SEO title={t("strategy")} description={t("strategy.mainHeading")} />
      <h1>{t("strategy.mainHeading")}</h1>
      <p>{t("strategy.paragraph1")}</p>
      <p>{t("strategy.paragraph2")}</p>
      <div>
        <div>
          <h3>{t("strategy.block1.heading")}</h3>
          <p>{t("strategy.block1.body1")}</p>
          <p>{t("strategy.block1.body2")}</p>
        </div>

        <div>
          <h3>{t("strategy.block2.heading")}</h3>
          <p>{t("strategy.block2.body")}</p>
        </div>
      </div>
      <h2>{t("strategy.heading2")}</h2>
      <p>{t("strategy.paragraph3")}</p>
    </Wrapper>
  );
};

export default Strategia;

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
