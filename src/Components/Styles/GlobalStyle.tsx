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
    background-attachment: fixed;
}

html {
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
}

/* FONTS */
h1 {
    text-transform: uppercase;
    font-size: 1.65em;
    color: #2b674b;
}

p {
    margin: 1em 0;
}

.green {
    color: #2b674b;
}

.miniheader {
    font-weight: 500;
}

/* LINKS */
a,
  a:visited {
    color: #2b674b;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #5f8a77;
  }
`;
