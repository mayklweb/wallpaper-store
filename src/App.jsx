import { Suspense, lazy } from 'react'
import { useState } from 'react'
import { Footer, Header } from './components'
import { Link, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'

const HomePage = lazy(() => import('./pages/home'))
const ContentsPage = lazy(() => import('./pages/contents'))
const ProductsPage = lazy(() => import('./pages/products'))

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Routes>

        <Route path='/' element={<Suspense fallback={''}><HomePage /> </Suspense>} />
        <Route path='/contents' element={<Suspense fallback={''}><ContentsPage /> </Suspense>} />
        <Route path='/projects' element={<Suspense fallback={''}><ProductsPage /> </Suspense>} />

      </Routes>
      <Footer/>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      
    </>
  )
}

export default App
