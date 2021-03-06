import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  @media screen and (max-width: 767px) {
    input, select, textarea {
      font-size: 16px;
    }
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  html, body, #root {
    overflow-x: hidden;
    /* @media (orientation: portrait) {
      height: 100%;
    } */
  }
  body {
    -webkit-font-smoothing: antialiased;
    position: relative;
  }
  body, input, button, div {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
