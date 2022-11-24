import styled from "styled-components";
import photo from "../../images/uberman_headshot.jpg";

export const StyledHeader = styled.main`
  z-index: 1;
  display: flex;

  aside {
    width: 100%;
    background: #fffffff5;
    padding: 2em;
  }

  ul {
    margin: 5px 20px;
    display: flex;
    column-gap: 35px;
    flex-wrap: wrap;
  }

  .photo {
    height: 100%;
    width: 120px;
    background: url(${photo});
    background-size: cover;
    filter: grayscale(100%);
  }

  @media screen and (max-width: 500px) {
    .photo {
      display: none;
    }
  }
`;
