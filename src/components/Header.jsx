import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='w-full bg-white'>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between py-2">
            <div style={{width: "140px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center"}} className='w-22 h-18 flex items-center justify-center'>
              <img className='w-full h-full object-cover' src="public/AQEM-final1.png" alt="" />
            </div>
            <div className="flex gap-4">
              <Link>Contents</Link>
              <Link>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 