import { createGlobalStyle } from "styled-components"
import vars from "./vars"

const GlobalStyles = createGlobalStyle`
  ${vars}

  [data-theme="dark"] {
    --bgColor: var(--blue-800);
    --textColor: var(--white);
    /* --lineColor: var(--light-grey); */
  }

  [data-theme="oled"] {
    --bgColor: var(--black);
    --textColor: var(--white);
    --lineColor: var(--light-grey);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  html {
    box-sizing: border-box;
    font-family: var(--bodyFont);
    font-display: swap;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--bgColor);
    color: var(--textColor);
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #modal-root {
    position: relative;
    z-index: var(--highestLevel);
  }

  main,
  #main {
    overflow: hidden;
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    font-family: var(--headingFont);
    margin: var(--margin);
    line-height: 1.15;
    color: var(--textColor);
    a {
      color: var(--textColor);
      text-decoration: none;
    }
  }

  h1 {
    color: var(--primaryColor);
    font-size: var(--h-1);
  }

  h2 {
    font-size: var(--h-2);
  }

  h3 {
    font-size: var(--h-t3);
  }

  h4 {
    font-size: var(--h-4);
  }

  h5 {
    font-size: var(--h-5);
  }

  h6 {
    font-size: var(--h-6);
  }

  p {
    font-family: var(--bodyFont);
    line-height: 36px;
    margin: 1rem 0;
    color: var(--textColor);
  }

  p.small {
    font-size: var(--smallFontSize);
  }

  a {
    color: var(--primaryColor);
  }

  textarea {
    width: 100%;
    height: 200px;
  }
  label > span {
    display: block;
  }
`

export default GlobalStyles
