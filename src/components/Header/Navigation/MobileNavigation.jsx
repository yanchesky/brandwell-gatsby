import React from "react";
import {
  useTranslateLanguagesPicker,
  useTranslateNavigation,
} from "../../../hooks";
import { navigationElements } from "./navgationElements";
import { I18nextContext, Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { media } from "src/helpers";
import {
  HamburgerCheckbox,
  HamburgerLinksWrapper,
  HamburgerWrapper,
  HamburgerIconWrapper,
  LinksList,
  LanguagesWrapper,
} from "./HamburgerMenuComponents";
import { useTranslation } from "gatsby-plugin-react-i18next";

const LinksWrapper = styled.nav`
  z-index: 2;
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: 0rem;
  ${media.desktop`
   //display: none;
   margin-right: 2rem;
  `}
`;

const SiteNavigation = styled.div``;

const Language = styled.div``;

const LanguageLink = styled(Link)`
  text-align: center;
  display: block;
  font-size: 1.5rem;
  margin-top: 2rem;

  ${media.tablet`
    font-size: 2.5rem;
    margin-top: 3rem;
  `}

  ${media.desktop`
    font-size: 4rem;
   
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 900;

  ${media.tablet`
    line-height: 4rem;
    font-size: 6rem;
  `}

  ${media.desktop`
    line-height: 6rem;
    font-size: 8rem;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const hideHamburgerMenu = () => {
  const checkbox = document.querySelector(".checkbox-toggle");
  checkbox.checked = false;
};

const MobileNavigation = () => {
  const hamburgerMenuCheckbox = React.useRef();
  const { language, languages, path } = React.useContext(I18nextContext);

  React.useEffect(() => {
    hamburgerMenuCheckbox.current = document.querySelector(".checkbox-toggle");
  }, []);

  const closeHamburgerMenu = () =>
    (hamburgerMenuCheckbox.current.checked = false);

  const translatedNavLinks = useTranslateNavigation(navigationElements);
  const { englishTranslation, polishTranslation } = useTranslateLanguagesPicker(
    navigationElements
  );

  return (
    <LinksWrapper>
      <HamburgerWrapper>
        <HamburgerCheckbox type="checkbox" className="checkbox-toggle" />
        <HamburgerIconWrapper>
          <div />
        </HamburgerIconWrapper>
        <HamburgerLinksWrapper>
          <div onClick={hideHamburgerMenu}>
            <div>
              <LinksList>
                {translatedNavLinks.map(({ language, to, label }, index) => (
                  <li key={index}>
                    <StyledLink
                      onClick={closeHamburgerMenu}
                      language={language}
                      to={to}
                    >
                      {label}
                    </StyledLink>
                  </li>
                ))}
                <li>
                  <LanguageLink
                    language={language === "pl" ? "en" : "pl"}
                    to={
                      language === "pl" ? englishTranslation : polishTranslation
                    }
                  >
                    {language === "pl" ? "english" : "polski"}
                  </LanguageLink>
                </li>
              </LinksList>
            </div>
          </div>
        </HamburgerLinksWrapper>
      </HamburgerWrapper>
    </LinksWrapper>
  );
};

export default MobileNavigation;
