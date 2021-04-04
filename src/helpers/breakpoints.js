import { css } from "styled-components";

const breakpoints = {
  desktop: 1200,
  twoColumns: 1000,
  tablet: 600,
  iphone: 375,
  mobile: 475,
  smallest: 470,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
