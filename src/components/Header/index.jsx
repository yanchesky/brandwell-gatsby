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

const Container = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  margin: auto;
  z-index: 2;
`;

const MainWrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 3rem 1rem 1rem;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
  overflow-x: hidden;
`;

const Header = () => {
  return (
    <Container>
      <MainWrapper>
        {/*<WelcomeScreen />*/}
        <AnimatedLink style={{ display: "flex" }} to={`/`}>
          <Logo alt="logo" src={brandwell_logo} />
        </AnimatedLink>
        <Navigation />
      </MainWrapper>
    </Container>
  );
};

export default Header;
