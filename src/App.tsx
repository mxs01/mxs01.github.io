import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/Homepage/homepage";
import { Work } from "./pages/Work/work";
import { Container } from "@mui/material";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <Container maxWidth="xl" sx={{

    }}>
      <Homepage />
      <Work />
      <Contact/>
    </Container>
  );
}

export default App;
