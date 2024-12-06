import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterId, setFilterId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");

  const openViewImg = (img) => {
    setIsOpen(true);
    setImage(img);
  };

  const closeViewImg = () => {
    setIsOpen(false);
    setImage("");
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://admin.aqem.uz/api/products/");
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
      const response = await fetch("https://admin.aqem.uz/api/categories/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("There was an error:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    getCategory();
  }, []);

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
          className="lg:container lg:mx-auto lg:px-4"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="/banner-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="/banner-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="/banner-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="/banner-4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <div className="container mx-auto px-3">
          <div className="flex items-start">
            <div className="overflow-x-scroll  lg:overflow-x-hidden flex items-start mt-5 pb-2 gap-2 ">
              <button
                onClick={() => setFilterId(null)}
                className="text-sm md:text-base lg:text-base text-white bg-[#0B175B] px-5 py-1 rounded-md border-[1px] border-solid border-[#0B175B]"
              >
                Hammasi
              </button>
              {categories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilterId(item)}
                  className="text-sm text-nowrap md:text-base lg:text-base text-white bg-[#0B175B] px-5 py-1 rounded-md border-[1px] border-solid border-[#0B175B]"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-normal">
              {filterId?.name || "Barcha maxsulotlar"} :{" "}
              {filtredProducts.length}
            </h3>
          </div>

          {isOpen && (
            <div
              onClick={() => closeViewImg()}
              className="w-screen h-screen fixed top-0 left-0 z-20 flex items-center justify-center bg-[#00000090]"
            >
              <button
                className="absolute top-4 right-4 bg-white rounded"
                onClick={() => closeViewImg()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div className="w-[80%]  bg-white">
                <img src={image} alt="" />
              </div>
            </div>
          )}

          <div className="mt-3 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtredProducts.map((item, i) => (
              <div key={i} className={`w-full bg-[#fff] p-1 md:p-3`}>
                <div className={`w-full `}>
                  <button onClick={() => openViewImg(item.image)}>
                    <img className="w-full h-full" src={item.image} alt="" />
                  </button>
                </div>
                <div className={`mt-1 pb-[6%] flex justify-between`}>
                  <p></p>
                  <p className="text-base font-semibold">ID: {item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
