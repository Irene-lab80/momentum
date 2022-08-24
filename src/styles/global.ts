import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root{
    margin:0 auto;
  }
  
  .App {
  display: flex;
  justify-content: center;
  align-items: center;

  body {
    // min-width: 480px;
    // height: 100vh;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    // background-image: url("./bg.jpg");
    // background-position: top center;
    // background-repeat: no-repeat;
    // background-blend-mode: multiply;
    // transition: background-image 1s ease-in-out;
  }

  button {
    background: transparent;
    border: none;
    border-radius: 50%;
  }

  .main {
    height: 60vh;
    width: 60vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 100;
  }

  .time {
    // min-height: 124px;
    margin-bottom: 10px;
    // font-family: 'Arial-MT';
    font-size: 100px;
    // letter-spacing: -4px;  
    color: #ffffff;
  }

  .date {
    min-height: 28px;
    font-size: 24px;
    margin-bottom: 20px;
    color: #ffffff;
  }

  .greeting-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: center;
    min-height: 48px;
    width: 100vw;
    font-size: 40px;
    color: #ffffff;
  }

  .greeting {
    flex: 1;  
    padding: 10px;
    text-align: right;
  }

  .name {
    flex: 1;
    max-width: 50%;
    padding: 10px;
    font-size: 40px;
    text-align: left;
    color: #fff;
    background-color: transparent;
    border: 0;
    outline: 0;
  }

  .name::placeholder {
    color: #fff;
    opacity: .6;
  }

  .bg {
    height: 160px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background: #364d79;
  };

  @media (max-width: 768px) {
    .time {
      min-height: 80px;
      font-size: 72px;    
    }

    .greeting-container {
      min-height: 40px;
      font-size: 32px;
    }

    .greeting {
      padding: 5px;
    }

    .name {
      font-size: 32px;
      padding: 5px;
    }
  }
}`;
