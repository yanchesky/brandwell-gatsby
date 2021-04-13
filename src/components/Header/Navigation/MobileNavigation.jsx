import React from "react";
import {
  useTranslateLanguagesPicker,
  useTranslateNavigation,
} from "../../../hooks";
import { navigationElements } from "./navgationElements";
import { Link } from "gatsby-plugin-react-i18next";
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

const LinksWrapper = styled.nav`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
  ${media.desktop`
   //display: none;
  `}
`;

const SiteNavigation = styled.div``;

const Language = styled.div``;

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  font-size: 8rem;
  line-height: 7rem;
  font-weight: 900;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileNavigation = () => {
  const hamburgerMenuCheckbox = React.useRef();
  const [isOpened, setIsOpened] = React.useState(true);

  React.useEffect(() => {
    hamburgerMenuCheckbox.current = document.querySelector(".checkbox-toggle");
    setIsOpened(false);
  }, []);

  const translatedNavLinks = useTranslateNavigation(navigationElements);
  const { englishTranslation, polishTranslation } = useTranslateLanguagesPicker(
    navigationElements
  );

  return (
    <LinksWrapper>
      <HamburgerWrapper>
        <HamburgerCheckbox
          checked={isOpened}
          onClick={() => setIsOpened(!isOpened)}
          type="checkbox"
          className="checkbox-toggle"
        />
        <HamburgerIconWrapper>
          <div />
        </HamburgerIconWrapper>
        <HamburgerLinksWrapper>
          <div>
            <div>
              <LinksList>
                {translatedNavLinks.map(({ language, to, label }, index) => (
                  <li key={index}>
                    <StyledLink
                      onClick={console.log}
                      language={language}
                      to={to}
                    >
                      {label}
                    </StyledLink>
                  </li>
                ))}
              </LinksList>
            </div>
          </div>
        </HamburgerLinksWrapper>
      </HamburgerWrapper>
    </LinksWrapper>
  );
};

export default MobileNavigation;
