import React from "react";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import brandwell_logo from "src/assets/svg/bradwell_logo.svg";
import { media } from "src/helpers/breakpoints";

import Navigation from "./Navigation";
import AnimatedLink from "../AnimatedLinkPageTransitionWrapper";
import WelcomeScreen from "../WelcomeScreen";

const Logo = styled.img`
  z-index: 5;
  margin: auto;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 3rem 1rem;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
  overflow-x: hidden;
`;

const Header = () => {
  return (
    <MainWrapper>
      {/*<WelcomeScreen />*/}
      <AnimatedLink style={{ display: "flex" }} to={`/`}>
        <Logo alt="logo" src={brandwell_logo} />
      </AnimatedLink>
      <Navigation />
    </MainWrapper>
  );
};

export default Header;
