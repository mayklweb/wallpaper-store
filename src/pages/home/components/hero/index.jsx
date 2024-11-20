import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';


// import required modules

function Hero() {
  return (
    <section>
      <div className="lg:container lg:mx-auto lg:px-4">
        <img className='w-full h-full object-contain' src="/455x135.png" alt="" />
      </div>
    </section>
  )
}

export default Hero