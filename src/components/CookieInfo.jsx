import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > span {
    margin-left: auto;
    margin-right: 1rem;
  }

  > div {
    display: inline-block;
    background: black;
    color: white;
    padding: 2px 32px;
    border-radius: 12px;
    margin-right: auto;
  }
`;

const CookieInfo = () => {
  const { t } = useTranslation();
  const [showInfo, setShowInfo] = React.useState(false);
  React.useEffect(() => {
    if (window) {
      const cookies = window.localStorage.getItem("cookiesAccepted");
      if (!cookies) {
        setShowInfo(true);
      }
    }
  }, []);
  if (!showInfo) return null;
  return (
    <Wrapper
      onClick={() => {
        window?.localStorage.setItem("cookiesAccepted", "1");
        setShowInfo(false);
      }}
    >
      <span>{t("cookies")}</span>
      <div>OK</div>
    </Wrapper>
  );
};

export default CookieInfo;
