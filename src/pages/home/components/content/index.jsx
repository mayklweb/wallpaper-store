import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Content({ videos }) {
  const width = window.innerWidth;

  useEffect(() => {
    window.addEventListener("resize", () => {
      document.location.reload();
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mt-5">
          <h1 className="text-2xl font-semibold">Bizning ishlar</h1>
          <Swiper
            slidesPerView={width < 768 ? 2 : 4}
            spaceBetween={20}
            className="mt-4"
          >
            {videos.map((video, i) => (
              <SwiperSlide className="p-2 w-auto bg-white rounded">
                <video width="100%" controls loop muted>
                  <source
                    src={video.video}
                    type="video/mp4"
                  />
                </video>
              </SwiperSlide>
            ))}
            <SwiperSlide className="p-2 w-auto bg-white rounded">
              <video width="100%" controls autoPlay loop muted>
                <source src="/video_2024-12-03_14-44-50.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide className="p-2 w-auto bg-white rounded">
              <video width="100%" controls autoPlay loop muted>
                <source src="/video_2024-12-03_14-45-05.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Content;
