import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Wrapper = styled.div`
  max-width: 1138px;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto 0;
  ${media.mobile`
    font-size: 4rem;
    margin: 5rem auto 0;
  `}
`;

const Paragraph = styled.p`
  font-size: ${(props) => (props.isSmall ? "0.875rem" : "1.25rem")};
  max-width: 1138px;
  text-align: center;
  margin: 3rem auto;
  padding: 0 2rem;

  ${media.mobile`
    margin: 5rem auto 1rem;
    font-size: ${(props) => (props.isSmall ? "1.5rem" : "2.25rem")};
   
  `}
`;

const Ingredients = styled.ul`
  font-size: 1rem;
  text-align: center;
  ${media.mobile`
    font-size: 1.25rem;
   `}
`;

const Steps = styled.ol`
  position: relative;

  ${media.tablet`
    column-count: 2;
  `}

  > li {
    display: inline-block;
    font-size: 1rem;
    margin: 2rem;

    vertical-align: top;

    ${media.mobile`
      font-size: 1.25rem;
   `}
  }
`;

const PizzaDoughRecipe = () => {
  const { t } = useTranslation();
  console.log("rendered");
  return (
    <Wrapper>
      <Heading>{t("pizza.mainHeading")}</Heading>
      <Paragraph>{t("pizza.paragraph1")}</Paragraph>
      <Paragraph>{t("pizza.paragraph2")}</Paragraph>
      <Ingredients>
        <li>{t("pizza.ingredient1")}</li>
        <li>{t("pizza.ingredient2")}</li>
        <li>{t("pizza.ingredient3")}</li>
        <li>{t("pizza.ingredient4")}</li>
        <li>{t("pizza.ingredient5")}</li>
        <li>{t("pizza.ingredient6")}</li>
      </Ingredients>
      <Paragraph>{t("pizza.paragraph3")}</Paragraph>
      <Steps>
        <li>{t("pizza.block1")}</li>
        <li>{t("pizza.block2")}</li>
        <li>{t("pizza.block3")}</li>
        <li>{t("pizza.block4")}</li>
      </Steps>
    </Wrapper>
  );
};

export default PizzaDoughRecipe;

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
    translations: allLocale(filter: { ns: { eq: "pizza_dough" } }) {
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
