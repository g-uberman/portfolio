import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url("https://upload.wikimedia.org/wikipedia/commons/a/a5/Gloomy_Forest.jpg");
    background-size: cover;
    background-position: center;
}

/* FONTS */
h1 {
    text-transform: uppercase;
    font-size: 1.65em;
    color: #344E43;
}
`