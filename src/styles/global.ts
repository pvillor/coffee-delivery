import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px var(--yellow-dark);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--base-text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    border: transparent;
    border-radius: 6px;
    cursor: pointer;
    line-height: 160%;
  }

  h1, h2, h3 {
    line-height: 130%;
  }
`