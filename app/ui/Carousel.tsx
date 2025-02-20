"use client";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

const Carousel = ({ children, spaceBetween = "2", ...props }: SwiperProps) => {
    return (
        <Swiper
  slidesPerView="auto"
  spaceBetween={spaceBetween}
  freeMode={true}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  modules={[FreeMode, Navigation]}
  className="swiper-container w-full max-w-[100vw] px-4 py-3 rounded-xl relative"
  watchOverflow={true}
  observer={true}
  observeParents={true}
  resistanceRatio={0}
  {...props}
>
  {children}
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</Swiper>
    );
};
export { Carousel, SwiperSlide };