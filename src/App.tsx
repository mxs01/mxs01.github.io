import { Container } from '@mui/material'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Contact } from './pages/Contact/Contact'
import { Homepage } from './pages/Homepage/homepage'
import { Work } from './pages/Work/work'
import { NavBar } from './components/NavBar/NavBar'
import { useState } from 'react'
import { ModalComponent } from './components/Modal/Modal'
import { Impressum } from './pages/Impressum/Impressum'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Container maxWidth={false} disableGutters sx={{}}>
      <NavBar />
      <Homepage />
      <Work />
      <Contact />
      <Footer toggleModal={setShowModal} />
      <ModalComponent open={showModal} onClose={() => setShowModal(false)}>
        <Impressum closeModal={() => setShowModal(false)} />
      </ModalComponent>
    </Container>
  )
}

export default App
