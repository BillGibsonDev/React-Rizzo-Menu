import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    width: 90%;
    margin: auto;
    background: #000000;
    scroll-behavior: smooth;
    font-family: Poppins, sans-serif;
    @media (max-width: 1250px){
       font-size: 70%;
    }
    @media (max-width: 750px){
       font-size: 50%;
    }
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;