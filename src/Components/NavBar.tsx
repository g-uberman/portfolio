import { StyledNavBar } from "./Styles/NavBar.styles";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  let activeClassName = "selectedNav";

  return (
    <StyledNavBar>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        CO₂CAR
      </NavLink>
      <NavLink
        to="/kosci"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Dice
      </NavLink>
      <NavLink
        to="/rpg-journal"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        RPG Journal
      </NavLink>
    </StyledNavBar>
  );
};
