import styled from "styled-components";

export const StyledContainer = styled.main`
  height: 100%;
  padding: 2em 4em;
  background: #fffffff5;
  z-index: 1;

  img {
    width: 100%;
    margin-bottom: 1em;
    transition: all 0.3s;
  }

  img:hover {
    box-shadow: 0px 3px 10px #00000050;
  }

  ul {
    margin-left: 2em;
  }

  @media screen and (max-width: 500px) {
    padding: 2em;
  }
`;
