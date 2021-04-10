import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Playfair Display', serif;
       
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
