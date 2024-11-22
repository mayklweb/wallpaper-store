import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-fade';
import 'swiper/css';


// import required modules

function Hero() {
  return (
    <section>
      <Swiper className="lg:container lg:mx-auto lg:px-4">
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/455x135.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/455x135.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/455x135.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero