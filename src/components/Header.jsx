import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='w-full bg-white'>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className='text-2xl'>
                LOGO
              </p>
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