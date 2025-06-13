import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import React from "react";

export default function Slider({ children }) {
  return (
    <Swiper
      spaceBetween={5}
      freeMode={false}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
