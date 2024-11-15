import React from 'react'
import { useSwiper } from 'swiper/react';
function SwiperPrevBtn() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}> prev  </button>
  )
}

export default SwiperPrevBtn