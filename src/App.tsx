import { Container } from '@mui/material'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Contact } from './pages/Contact/Contact'
import { Homepage } from './pages/Homepage/homepage'
import { Work } from './pages/Work/work'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <Container maxWidth="xl" disableGutters sx={{}}>
      <NavBar />
      <Homepage />
      <Work />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
