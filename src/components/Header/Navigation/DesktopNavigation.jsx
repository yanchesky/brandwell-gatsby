import React from "react";
import {
  useTranslateLanguagesPicker,
  useTranslateNavigation,
} from "../../../hooks";
import { navigationElements } from "./navgationElements";
import { media } from "src/helpers";
import { Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

const LinksWrapper = styled.nav`
  display: none;
  ${media.desktop`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  `}
`;

const SiteNavigation = styled.div``;

const Language = styled.div``;

const StyledLink = styled(Link)`
  padding: 0 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const DesktopNavigation = () => {
  const translatedNavLinks = useTranslateNavigation(navigationElements);
  const { englishTranslation, polishTranslation } = useTranslateLanguagesPicker(
    navigationElements
  );
  return (
    <LinksWrapper>
      <SiteNavigation>
        {translatedNavLinks.map(({ language, to, label }, index) => (
          <StyledLink key={index} language={language} to={to}>
            {label}
          </StyledLink>
        ))}
      </SiteNavigation>
      <Language>
        <Link to={englishTranslation} language="en">
          Angielski
        </Link>
        <Link to={polishTranslation} language="pl">
          Polski
        </Link>
      </Language>
    </LinksWrapper>
  );
};

export default DesktopNavigation;
