import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media
  (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.paper};
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    -ms-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Lato", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
