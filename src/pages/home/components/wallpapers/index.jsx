import { Link } from "react-router-dom";
import { Loading } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";

function Products() {
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
                  className="text-[#fff] px-4 py-1 rounded-md bg-[#0B175B] flex items-center justify-center"
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
                      <img className="w-full h-full" src={item.image} alt="" />
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
