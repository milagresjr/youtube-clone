import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, :root {
    height: 100%;
    font-family: Roboto, Arial, sans-serif;
    background: var(--color-white);
     
  }
  *, input, button {
    outline: 0;
    border: none;
    background: none;
    
    &::-webkit-scrollbar {
      width: 13px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-white);
    }
  }
  :root {
    --color-white: #fff;
    --color-black: #030303;
    --text-primary: #0f0f0f;
    --text-secondary: #606060;
    --color-gray: #e5e5e5;
    --color-input-placeholder: #606060;
    --color-button-hover: #d9d9d9;
    --color-input: #f0f0f0;
    --color-input-border: #ccc;
    --color-image-thumb: #e4e4e4;
  }  
`;