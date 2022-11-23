import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StyledWrapper } from "./Components/Styles/App.styles";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Kosci } from "./Components/Projects/Kosci";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <NavBar />
        <Routes>
          <Route path="/" element={<Kosci />}></Route>
          <Route path="/kosci" element={<Kosci />}></Route>
        </Routes>
      <Footer />
    </StyledWrapper>
  );
}

export default App;
