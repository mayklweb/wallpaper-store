import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Products() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [filterId, setFilterId] = useState(null);



  const fetchProducts = async () => {
    try {
      const response = await fetch("https://admin.aqem.uz/api/products/")
      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  async function getCategory() {
    try {
      const response = await fetch('https://admin.aqem.uz/api/categories/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  useEffect(() => {
    fetchProducts()
    getCategory()
  }, [])

  const filtredProducts = filterId
    ? products.filter((item) => item.category === filterId.id)
    : products;

  return (
    <>
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

      <section>
        <div className='container mx-auto px-3'>
          <div className='flex items-start'>
            <div className='overflow-x-scroll  lg:overflow-x-hidden flex items-start mt-5 pb-2 gap-2 '>
              <button
                onClick={() => setFilterId(null)}
                className='text-sm md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
              >
                Hammasi
              </button>
              {categories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilterId(item)}
                  className='text-sm text-nowrap md:text-base lg:text-base text-white bg-[#EAA439] px-5 py-1 rounded-md border-[1px] border-solid border-[#EAA439]'
                >
                  {item.name}
                </button>
              ))}
            </div>

          </div>

          <div className='mt-2 flex items-center justify-between'>
            <h3 className='text-xl md:text-2xl font-normal'>
              {filterId?.name || 'Barcha maxsulotlar'} : {filtredProducts.length}
            </h3>
          </div>

          <div className='mt-3 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
              filtredProducts.map((item, i) => (
                <div key={i} className={`w-full bg-[#fff] p-1 md:p-3`}>
                  <div className={`w-full `}>
                    <img className='w-full h-full' src={item.image} alt="" />
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Products