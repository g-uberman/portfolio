import styled from "styled-components";

export const StyledContainer = styled.main`
    height: 100%;
    padding: 2em 4em;
    background: #fffffff5;
    z-index: 1;

    img {
        width: 100%;
        margin-bottom: 1em;
        transition: all 0.2s;
        filter:  grayscale(50%);
    }

    img:hover {
        box-shadow: 0px 3px 10px #00000050;
        filter: none;
    }

    ul {
        margin-left: 2em;
    }
`