import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root{
    margin:0 auto;
  }
  
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .bg {
    height: 160px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background: #364d79;
  };
`;
