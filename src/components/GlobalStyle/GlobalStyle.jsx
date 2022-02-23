import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    position: relative;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  tr,
  td,
  th {
    margin: 0;
    padding: 0;
  }
`;
