import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TransitionLink from "gatsby-plugin-transition-link";
import gsap from "gsap";

const exit = {
  length: 0.3,
  trigger: ({ node }) => {
    gsap.to(node, { opacity: 0, duration: 0.3 });
  },
};

const entry = {
  delay: 0.3,
  length: 0.3,
  trigger: ({ node }) => {
    gsap.fromTo(node, { opacity: 0 }, { opacity: 1, duration: 1 });
  },
};

const AnimatedLinkPageTransitionWrapper = ({ children, to, style }) => {
  const { i18n } = useTranslation();
  const linkWithLanguage = `/${i18n.language}${to}`;

  return (
    <TransitionLink
      style={style}
      to={linkWithLanguage}
      exit={exit}
      entry={entry}
    >
      {children}
    </TransitionLink>
  );
};

export default AnimatedLinkPageTransitionWrapper;
