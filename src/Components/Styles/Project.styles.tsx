import styled from "styled-components";

export const StyledContainer = styled.main`
    height: 100%;
    padding: 1em 4em;
    background: #fffffff5;
    z-index: 1;

    img {
        width: 100%;
        margin-bottom: 1em;
        transition: all 0.3s;
    }

    img:hover {
        box-shadow: 0px 5px 10px #00000050;
    }

    ul {
        margin-left: 2em;
    }
`