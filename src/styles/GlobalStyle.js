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
`;

export default GlobalStyles;
