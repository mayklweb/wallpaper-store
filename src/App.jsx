import { useState } from 'react'
import HomePage from './pages/home'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <HomePage/>
    </>
  )
}

export default App
