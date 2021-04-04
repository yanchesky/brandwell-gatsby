import React from "react";
import Index from "src/components/Header";

import { createGlobalStyle } from "styled-components";
import { graphql } from "gatsby";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: Roboto, "Open Sans", sans-serif;
        color: inherit;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
    ul, li, body, p, h1 {
        list-style: none;
       
    }
    html{
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
`;

function MainLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Index />
      <main className="">{children}</main>
    </>
  );
}

export default MainLayout;
