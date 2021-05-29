import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";
import facebook from "src/assets/svg/facebook_icon.svg";
import instagram from "src/assets/svg/insta_icon.svg";
import linkedin from "src/assets/svg/linkedin_icon.svg";

const SocialIcon = styled.img`
  margin: 0 1.25rem;
  ${media.mobile`
        margin: 0 1.75rem;
    `}
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
    font-size: 1.75rem;

    ${media.mobile`
        font-size: 2.25rem;
    `}

    &:hover {
      text-decoration: underline;
    }
  }

  > p {
    margin: 2rem 1rem;
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
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/brandwell.pl/"
        >
          <SocialIcon src={instagram} />
        </a>
        <a aria-label="Facebook" href="https://www.facebook.com/brandwell">
          <SocialIcon src={facebook} />
        </a>
        <a
          aria-label="LinkedId"
          href="https://www.linkedin.com/company/brandwell-pl"
        >
          <SocialIcon src={linkedin} />
        </a>
      </SocialWrapper>
      <p>
        © 2021 Brandwell Branding & Packaging Design. All copywrights reserved
      </p>
    </Footer>
  );
};

export default Index;
