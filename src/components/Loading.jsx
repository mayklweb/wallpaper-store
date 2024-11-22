import React from 'react'

function Loading() {
  return (
    <div className='absolute top-0 left-0 w-full h-full z-10'>
     <div class="loader w-12 h-12 border-4 border-white border-b-transparent rounded-full animate-rotation"></div>
    </div>
  )
}

export default Loading