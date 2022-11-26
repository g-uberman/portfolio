import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StyledWrapper } from "./Components/Styles/App.styles";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Kosci } from "./Components/Projects/Kosci";
import { NavBar } from "./Components/NavBar";
import { RPGJournal } from "./Components/Projects/rpg-journal";
import { CO2Car } from "./Components/Projects/CO2Car";
import { Portfolio } from "./Components/Projects/portfolio";

function App() {
  const navigate = useNavigate();
  useEffect((): void => {
      navigate("portfolio/co2car");
  }, []);

  return (
    <StyledWrapper>
      <Header />
      <NavBar />
        <Routes>
          <Route path="/" element={<CO2Car />}></Route>
          <Route path="portfolio/" element={<CO2Car />}></Route>
          <Route path="portfolio/co2car" element={<CO2Car />}></Route>
          <Route path="portfolio/kosci" element={<Kosci />}></Route>
          <Route path="portfolio/rpg-journal" element={<RPGJournal />}></Route>
        </Routes>
      <Footer />
    </StyledWrapper>
  );
}

export default App;
