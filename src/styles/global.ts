import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #282a36;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  button{
    cursor: pointer;
  }
`;