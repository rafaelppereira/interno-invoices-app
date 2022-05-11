import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --alpha-primary: #00A5C7;
    --alpha-secondary: #007085;

    --gray-100: #F2F5FF;  
    --gray-200: #F6F6F6;
    --gray-300: #BCC4D5;

    --white-100: #ffffff;

    --notification-error: #FC6258;
    --notification-warning: #FEBE07;
    --notification-success: #16CC39;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  ul {list-style-type: none}
  a {text-decoration: none}
  button {cursor: pointer; background: transparent; border: 0}
`;