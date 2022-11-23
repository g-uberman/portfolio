import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  padding: 10px 20px 0 20px;
  display: flex;
  justify-content: space-around;

  a,
  a:visited {
    flex-grow: 1;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 0;
    border-radius: 8px 8px 0 0 ;
  }

  a.selectedNav {
    color: #000;
    background: #fff;
  }
`;