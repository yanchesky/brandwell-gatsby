import React from "react";
import styled from "styled-components";
import facebook from "src/assets/svg/facebook_icon.svg";
import instagram from "src/assets/svg/insta_icon.svg";
import linkedin from "src/assets/svg/linkedin_icon.svg";

const SocialIcon = styled.img`
  margin: 0 1.75rem;
`;

const Footer = styled.footer`
  position: relative;
  font-size: 18px;
  text-align: center;

  > span {
    display: block;
    margin: 1rem;
  }

  > a {
    font-size: 2.25rem;

    &:hover {
      text-decoration: underline;
    }
  }

  > p {
    margin: 2rem 0;
  }
  p ~ p {
    margin-top: 3rem;
  }
`;

const SocialWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const Index = () => {
  return (
    <Footer>
      <span>Napisz do nas</span>
      <a href="mailto:info@brandwell.pl">info@brandwell.pl</a>
      <span>lub zadzwoń</span>
      <a href="tel:+48606735725">+48606735725</a>
      <p>We will be pleased to welcome you on our socials</p>
      <SocialWrapper>
        <SocialIcon src={instagram} />
        <SocialIcon src={facebook} />
        <SocialIcon src={linkedin} />
      </SocialWrapper>
      <p>
        © 2021 Brandwell Branding & Packaging Design. All copywrights reserved
      </p>
    </Footer>
  );
};

export default Index;
