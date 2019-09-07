import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6em;
    background: #fff;
    -webkit-font-smoonthing: antialiased !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald', sans-serif;
  }

  .gradient-background {
    background: linear-gradient(356.09deg, rgba(0, 129, 138, 0.7) 2.81%, rgba(41, 52, 98, 0.7) 48.97%, rgba(255, 139, 3, 0.7) 100.21%);
  }

  .input {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    padding: 10px 30px;
    border: 1px solid #00818A;
  }
`