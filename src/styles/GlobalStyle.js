import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        width: 100%;
        font-family: 'Inter', sans-serif;
    }
    *::-webkit-scrollbar {
        appearance: none;
    }

    button {
        cursor: pointer;
        outline: none;
        border: none;
    }
    input {
        outline: none;
        border: none;
    }
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyles;
