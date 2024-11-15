import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

function Hero() {
  return (
    <section>

      <Swiper
        centeredSlides={true}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-auto object-cover"
      >
        <SwiperSlide className='object-cover'>
          <img className='w-full object-cover' src="public/D009.jpg" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide className='w-full object-contain'>
          <img className='w-full object-contain' src="public/G100.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='w-full object-contain'>
          <img className='w-full object-contain' src="public/G027.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>

    </section>
  )
}

export default Hero