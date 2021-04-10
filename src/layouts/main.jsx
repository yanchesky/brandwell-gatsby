import React from "react";
import Index from "src/components/Header";
import { GlobalStyle } from "src/styles/global";
import "src/styles/global.css";

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
