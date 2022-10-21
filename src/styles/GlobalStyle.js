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
        line-height: 1.5;
    }
    *::-webkit-scrollbar {
        width: 6px;
    }
    *::-webkit-scrollbar-thumb {
        border-radius: 4px;
        box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
    }
    *::-webkit-scrollbar-track {
        box-shadow: inset #fff;
        border-radius: 4px;
    }
    

    button {
        cursor: pointer;
        outline: none;
        border: none;
    }
    input, img {
        outline: none;
        border: none;
    }
    ol, ul {
        list-style: none;
    }
    a[href] {
        text-decoration: none;
        color: inherit;
    }

    .tippy-box {
        font-size: 11px;
        line-height: 1.3;
    }
`;

export default GlobalStyles;
