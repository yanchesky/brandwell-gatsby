import React from "react";
import styled from "styled-components";
import brandwell_logo from "src/assets/svg/bradwell_logo.svg";

import Navigation from "./Navigation";
import AnimatedLink from "../AnimatedLinkPageTransitionWrapper";

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
  transition: top 0.3s;
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
  const prevScrollPos = React.useRef(0);
  React.useEffect(() => {
    const checkbox = document.querySelector(".checkbox-toggle");
    if (window) {
      document.addEventListener("scroll", function () {
        const currScrollPos = window.pageYOffset;
        const isScrollingDown = currScrollPos > prevScrollPos.current;
        prevScrollPos.current = currScrollPos;
        const header = document.getElementById("header-container");
        if (!checkbox.checked) {
          if (isScrollingDown) {
            header.style.transform = `translateY(-150px)`;
            //header.style.top = "-150px";
          } else if (currScrollPos === 0) {
            header.style.transform = "translateY(0)";
            //header.style.top = "0";
          } else {
            header.style.transform = "translateY(-30px)";
            // header.style.top = "-30px";
          }
        }
      });
    }
  }, []);
  return (
    <Container id="header-container">
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
