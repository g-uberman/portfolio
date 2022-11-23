import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url("https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Boar_Hunt_mosaic_-_Google_Art_Project.jpg");
    background-size: cover;
    background-position: center;
}
`