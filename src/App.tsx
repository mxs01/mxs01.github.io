import { Container } from "@mui/material";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./pages/Contact/Contact";
import { Homepage } from "./pages/Homepage/homepage";
import { Work } from "./pages/Work/work";

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
