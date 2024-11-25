import { useState } from 'react'
import { Footer, Header } from './components'
import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/home'
import Contact from './pages/contents'
import Products from './pages/products'


function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products/>} />

      </Routes>
      <Footer />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />


    </>
  )
}

export default App
