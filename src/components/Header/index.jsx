import React from "react";
import styled from "styled-components";
import brandwell_logo from "src/assets/svg/bradwell_logo.svg";
import { media } from "src/helpers/breakpoints";

import Navigation from "./Navigation";
import AnimatedLink from "../AnimatedLinkPageTransitionWrapper";

const Logo = styled.img`
  z-index: 5;
  margin: auto;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 3rem 1rem;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
`;

const Header = () => {
  return (
    <MainWrapper>
      <AnimatedLink style={{ display: "flex" }} to={`/portfolio/`}>
        <Logo alt="logo" src={brandwell_logo} />
      </AnimatedLink>
      <Navigation />
    </MainWrapper>
  );
};

export default Header;
