import { StyledNavBar } from "./Styles/NavBar.styles";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  let activeClassName = "selectedNav";

  return (
    <StyledNavBar>
      <NavLink
        to="/co2car"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        CO₂CAR
      </NavLink>
      <NavLink
        to="/kosci"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Kości
      </NavLink>
      <NavLink
        to="/rpg-journal"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        RPG Journal
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        This portfolio
      </NavLink>
    </StyledNavBar>
  );
};
