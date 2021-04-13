import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "src/themes/theme";
import MainLayout from "./src/layouts/main";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
};

// export const wrapPageElement = ({ element, props }) => (
//   <MainLayout {...props}>{element}</MainLayout>
// );
