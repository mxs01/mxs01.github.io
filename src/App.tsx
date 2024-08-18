import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/Homepage/homepage";
import { Work } from "./pages/Work/work";
import { Container } from "@mui/material";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Container maxWidth="xl" disableGutters sx={{

    }}>
      <Homepage />
      <Work />
      <Contact/>
      <Footer />
    </Container>
  );
}

export default App;
