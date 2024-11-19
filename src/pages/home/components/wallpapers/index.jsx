import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Products() {

  const products = [{
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  {
    id: 1,
    price: 78990,
    title: "lorem nigga patalok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX017SjIO53zYXa57UysnwSv3TPtqiH3NH8zgRgnOWK_oqNx6pDE96OaaT4iINR4XEfA&usqp=CAU"
  },
  ]

  const [open, setOpen] = useState(false)

  return (
    // Products start
    // <section>
    //   <div className='container mx-auto px-3'>
    //     <div className='w-full mt-2 md:mt-4 lg:mt-6 xl:mt-8 '>
    //       <div className='flex items-center justify-between'>
    //         <h3 className='text-xl md:text-2xl font-normal'>Projects</h3>
    //         <Link className='text-sm md:text-base' to={'/projects'} >See all</Link>
    //       </div>
    //       <Swiper
    //         autoplay={{
    //           delay: 1500,
    //           disableOnInteraction: false,
    //         }}
    //         speed={1000}
    //         spaceBetween={10}
    //         slidesPerView={view < 768 ? 2 : view > 990 ? 4 : 3}
    //         loop={true}
    //         modules={[Autoplay]}
    //         className="mt-1 md:mt-3 p-2 bg-[#fff]">
    //         {
    //           products.map((item, i) => (
    //             <SwiperSlide key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
    //               <div className={`w-full `}>
    //                 <img className='w-full h-full' src={item.image} alt="" />
    //               </div>
    //               <div className={`mt-1 pb-[10%] flex justify-between `}>
    //                 <h3>{item.title}</h3>
    //                 <p> {item.price.toLocaleString()} sum</p>
    //               </div>
    //             </SwiperSlide>
    //           ))
    //         }

    //       </Swiper>
    //       <div className='w-full h-10 mt-6 bg-black'>
    //         <button>See All</button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section>
      <div className='container mx-auto px-3'>
        <div className='flex items-start'>

          <div className='hidden md:flex mt-5 flex-wrap gap-2  '>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Все</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>3D</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Abstract</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Dark</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Мрамор</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Фрукты</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Неба</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Ночной небо</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Рамка</button>
            <button className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Украшение</button>
          </div>

          <div className='w-full mt-4 flex gap-2 items-center md:hidden'>
            <form className='rounded-sm overflow-hidden flex flex-auto'>
              <input placeholder='' className='flex flex-auto py-1 px-2 text-base' type="text" />
              <button className='p-1 px-2 bg-[#EAA439]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </form>
            <button onClick={() => setOpen(true)} className='px-2 py-1.5 rounded bg-[#EAA439]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className='w-full mt-2 md:mt-4 xl:mt-6 '>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl md:text-2xl font-normal'>Все: 210</h3>
          </div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {
              products.map((item, i) => (
                <div key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                  <div className={`w-full `}>
                    <img className='w-full h-full' src={item.image} alt="" />
                  </div>
                  <div className={`mt-1 pb-[10%] flex justify-between `}>
                    <h3>{item.title}</h3>
                    <p> {item.price.toLocaleString()} sum</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 w-full h-full z-10 bg-[#00000080] ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 ease-in-out`}>
        <div className={`absolute bottom-0 left-0 w-full h-[60%] bg-white rounded-t-xl p-2 ${open ? 'translate-y-0' : 'translate-y-full'} transition-all duration-200 ease-in-out`}>
          <div className='w-full flex justify-end'>
            <button onClick={() => setOpen(false)} className='bg-gray-100 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className='mt-1 w-full h-full'>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Все</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>3D</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Abstract</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Dark</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Мрамор</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Фрукты</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Неба</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Ночной небо</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Рамка</button>
            <button className='m-1 text-sm md:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'>Украшение</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Products