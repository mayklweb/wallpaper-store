import { Suspense, lazy } from 'react'
import { useState } from 'react'
import { Footer, Header, Loading } from './components'
import { Link, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'
import { ToastContainer } from 'react-toastify'

const HomePage = lazy(() => import('./pages/home'))
const ContactPage = lazy(() => import('./pages/contents'))

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Routes>

        <Route path='/' element={<Suspense fallback={<Loading />}><HomePage /> </Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loading />}><ContactPage /> </Suspense>} />

      </Routes>
      <Footer />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />


    </>
  )
}

export default App
