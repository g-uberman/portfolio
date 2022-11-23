import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  padding: 10px 20px 0 20px;
  display: flex;
  justify-content: space-around;
  background: #00000050;
  box-shadow: 0 0 25px 10px #00000050;
  /* background: #131917; */
  /* z-index: -1; */
  /* position: -webkit-sticky;
  position: sticky;
  top: 0; */
  /* border-bottom: 1em solid #fffffff5; */

  a,
  a:visited {
    flex-grow: 1;
    text-align: center;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    z-index: 2;
    scale: 0.9;
    transition: scale 0.1s;
  }

  a:hover {
    scale: 1;
  }

  a.selectedNav {
    scale: 1;
    color: #000;
    background: #fffffff5;
  }
`;
