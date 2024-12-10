import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Content({ videos }) {
  const width = window.innerWidth;

  const videoRefs = useRef([]);

  
  const playVideo = (index) => {
    console.log(videoRefs.current[index]);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const pauseVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };
  

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
              <SwiperSlide key={i} className="p-2 w-auto bg-white rounded">
                <video  ref={(el) => (videoRefs.current[i] = el)} width="100%" muted onClick={() => playVideo(i)}>
                  <source
                    src={video.video}
                    type="video/mp4"
                  />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Content;
