import React from "react";
import Header from "src/components/Header";
import { GlobalStyle } from "src/styles/global";
import "src/styles/global.css";

function MainLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="">{children}</main>
    </>
  );
}

export default MainLayout;
