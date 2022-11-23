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

p {
    margin: 1em 0;
}

/* LINKS */
a,
  a:visited {
    color: #344e43;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #5f8a77;
  }
`