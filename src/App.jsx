import { Suspense, lazy } from 'react'
import { useState } from 'react'
import { Footer, Header } from './components'
import { Link, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'
import Contact from './pages/contents'

const HomePage = lazy(() => import('./pages/home'))
const ContentsPage = lazy(() => import('./pages/contents'))

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Routes>

        <Route path='/' element={<Suspense fallback={''}><HomePage /> </Suspense>} />
        <Route path='/contact' element={<Suspense fallback={''}><Contact /> </Suspense>} />

      </Routes>
      <Footer />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
    </>
  )
}

export default App
