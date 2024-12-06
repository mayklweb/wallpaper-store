import { Link } from "react-router-dom";
import { Loading } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the default styles

function Products() {
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

  const products = JSON.parse(localStorage.getItem("products"));

  const width = window.innerWidth;
  useEffect(() => {
    window.addEventListener("resize", () => {
      document.location.reload();
    });
  }, []);
  return (
    <section>
      <div className="container mx-auto px-3">
        <div>
          {products ? (
            <div className="w-full mt-2 md:mt-4 xl:mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Stretch shiftlari
                </h3>

                <Link
                  to={"/products"}
                  className="text-[#fff] text-xs md:text-sm px-2 py-1 rounded-md bg-[#0B175B] flex items-center justify-center"
                >
                  Barchasin ko'rish
                </Link>
              </div>
              <Swiper
                spaceBetween={12}
                slidesPerView={width < 768 ? 2 : 4}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mt-2"
              >
                {products.slice(0, 10).map((item, i) => (
                  <SwiperSlide key={i} className={`bg-[#fff] p-1 md:p-2`}>
                    <div className={`w-full`}>
                      <button onClick={() => openViewImg(item.image)}>
                        <img
                          className="w-full h-full"
                          src={item.image}
                          alt=""
                        />
                      </button>
                    </div>
                    <div className={`mt-1 pb-[6%] flex justify-between`}>
                      <p></p>
                      <p className="text-xs md:text-base font-semibold">
                        ID: {item.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div>
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
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
