import React from 'react'
import { Contact, Hero, Products, Videos } from './components'

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Videos/>
      <Contact/>
    </>
  )
}

export default HomePage