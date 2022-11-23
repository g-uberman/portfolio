import React from "react";
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
  return (
    <StyledWrapper>
      <Header />
      <NavBar />
        <Routes>
          <Route path="/" element={<Kosci />}></Route>
          <Route path="/co2car" element={<CO2Car />}></Route>
          <Route path="/kosci" element={<Kosci />}></Route>
          <Route path="/rpg-journal" element={<RPGJournal />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      <Footer />
    </StyledWrapper>
  );
}

export default App;
