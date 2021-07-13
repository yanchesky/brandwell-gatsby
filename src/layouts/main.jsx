import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { useLocation } from "@reach/router";
import { GlobalStyle } from "src/styles/global";
import "src/styles/global.css";
import "src/styles/typography.css";
import CookieInfo from "../components/CookieInfo";

function MainLayout({ children }) {
  const { pathname } = useLocation();
  const isContact = pathname === "/en/contact" || pathname === "/pl/kontakt";
  return (
    <>
      <GlobalStyle />
      <Header />
      <main style={{ paddingTop: "10rem" }} className="">
        {children}
      </main>
      <CookieInfo />
      {!isContact && <Footer />}
    </>
  );
}

export default MainLayout;
