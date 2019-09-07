import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6em;
    background: #F5F3F3;
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
    font-size: 18px;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #00818A;
    border-radius: 8px;
  }

  .main-title {
    color: #293462;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
  }

  .button {
    cursor: pointer;
    background: #293462;
    padding: 10px 60px;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    border-radius: 10px;
  }

  .text-right {
    text-align: right;
  }

  .card {
      cursor: pointer;
      width: 100%;
      margin: 0 20px 0 0;
      font-family: 'Oswald';
      text-align: center;
      text-transform: uppercase;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transition: 300ms ease all;

        &:last-child {
          margin: 0;
        }

        &:hover {
          color: #fff;
          background: #293462;
        }
    }
`