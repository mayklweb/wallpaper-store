import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-fade';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

// import required modules

function Hero() {
  return (
    <section>
      <Swiper
      speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="lg:container lg:mx-auto lg:px-4">
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