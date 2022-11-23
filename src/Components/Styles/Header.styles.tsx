import styled from "styled-components";
import photo from "../../images/uberman_headshot.jpg";

export const StyledHeader = styled.main`
  z-index: 1;
  display: flex;

  aside {
    width: 100%;
    background: #fffffff5;
    padding: 2em 1em 2em 2em;
  }

  ul {
    margin: 5px 20px;
    display: flex;
    column-gap: 35px;
    flex-wrap: wrap;
  }

  a,
  a:visited {
    color: #344e43;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #5f8a77;
  }

  .photo {
    height: 100%;
    width: 120px;
    background: url(${photo});
    background-size: cover;
    box-shadow: 0 0 25px 10px #00000080;
  }

  @media screen and (max-width: 500px) {
    .photo {
      display: none;
    }
  }
`;
