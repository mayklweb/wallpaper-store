import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


function Hero() {
  return (
    <section>
      <Swiper
        speed={1000}
        spaceBetween={20}

        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="lg:container lg:mx-auto lg:px-4">
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/banner-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/banner-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/banner-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-contain' src="/banner-4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero