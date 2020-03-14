import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Muli:400,600&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Muli', sans-serif;
    color: #222;
  }
`;

export default Global;
