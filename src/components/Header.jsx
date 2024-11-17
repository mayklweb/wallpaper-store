import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ setModalOpen }) {
  return (
    <header>
      <div className='w-full bg-white'>
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between py-2">
            <Link to={'/'}>
              <div className='w-[96px] h-[40px] md:w-[140px] md:h-[52px] flex items-center justify-center'>
                <img className='w-full h-full object-cover' src="public/AQEM-final1.png" alt="" />
              </div>
            </Link>
            <div className="flex gap-4">
              <Link className='hidden md:block' to={'/contents'}>Contents</Link>
              <Link className='hidden md:block' to={'/products'}>Products</Link>
              <button onClick={() => setModalOpen(true)} className='block md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 