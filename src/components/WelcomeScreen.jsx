import React from "react";
import styled from "styled-components";
import splash from "src/assets/images/Intro-Splash.png";
import { useLocation } from "@reach/router";

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${splash}) no-repeat fixed center;
  background-size: default;
  background-color: black;
  transition: all 1s ease;
`;

const Button = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  background: blue;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% - 200px);
`;

const WelcomeScreen = () => {
  const { key } = useLocation();

  React.useEffect(() => {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    const body = document.querySelector("body");
    body.style.paddingRight = `${scrollBarWidth}px`;
    body.style.overflow = "hidden";
    //body.style.overflowY = "scroll";
  }, []);

  const onClick = () => {
    sessionStorage.setItem("visited", "true");
    const wrapper = document.getElementById("welcome-screen-wrapper");
    wrapper.style.transform = "translateY(-100%)";
    setTimeout(() => {
      const body = document.querySelector("body");
      body.style.overflow = "scroll";
      body.style.paddingRight = `${0}px`;
    }, 1000);
  };

  if (key !== "initial") return null;

  return (
    <Wrapper id="welcome-screen-wrapper">
      {/*<img src={splash} />*/}
      <Button onClick={onClick} />
    </Wrapper>
  );
};

export default WelcomeScreen;
