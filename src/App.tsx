import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Components/Styles/theme";
import { StyledWrapper } from "./Components/Styles/App.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
      
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
