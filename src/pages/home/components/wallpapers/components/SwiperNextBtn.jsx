import React from 'react'
import { useSwiper } from 'swiper/react';
function SwiperNextBtn() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}> next </button>
  )
}

export default SwiperNextBtn