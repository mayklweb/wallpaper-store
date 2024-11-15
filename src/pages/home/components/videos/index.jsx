import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


function Videos() {

  const view = window.innerWidth

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


  return (
    // Products start
    <section>
      <div className='container mx-auto px-3'>
        <div className='w-full mt-2 md:mt-4 lg:mt-6 xl:mt-8 '>
          <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>Contents</h3>
            <button>See all</button>
          </div>
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={10}
            slidesPerView={view < 768 ? 2 : view > 990 ? 4 : 3}
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="p-2 bg-[#fff]">
            {
              products.map((item, i) => (
                <SwiperSlide key={i} className={`w-full bg-[#fff] p-2 md:p-3`}>
                  <div className={`w-full `}>
                    <img className='w-full h-full' src={item.image} alt="" />
                  </div>
                  <div className={`mt-1 pb-[10%] flex justify-between `}>
                    <h3>{item.title}</h3>
                    <p> {item.price.toLocaleString()} sum</p>
                  </div>
                </SwiperSlide>
              ))
            }

            {/* <SwiperPrevBtn/>
            <SwiperNextBtn/> */}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Videos