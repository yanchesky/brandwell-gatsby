import React from "react";
import styled from "styled-components";
import brandwell_logo from "src/assets/svg/bradwell_logo.svg";
import { media } from "src/helpers/breakpoints";

import Navigation from "./Navigation";

const Logo = styled.img`
  z-index: 5;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 3rem 1rem;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
  ${media.desktop`
    align-items: baseline;
  `}
`;

const Index = () => {
  return (
    <MainWrapper>
      <Logo alt="logo" src={brandwell_logo} />
      <Navigation />
    </MainWrapper>
  );
};

export default Index;