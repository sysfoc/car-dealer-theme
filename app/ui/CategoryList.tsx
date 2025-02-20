"use client";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import { useState } from "react";
import { categoriesToShow } from "@/data/categories";

const Categories = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);

 
  return (
    <div className="mt-8 relative w-full overflow-visible mb-5">
      <div className="text-xl font-bold flex justify-center items-center uppercase mb-4">
        Explore Your Interests
      </div>

      <Carousel spaceBetween={16}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setIsBeginning(swiper.isBeginning);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
        }}
         
        className="swiper-container"
      >
        {categoriesToShow.map((category) => (
          <SwiperSlide key={category.title} className="!w-auto max-w-44 gap-5 mb-5">
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full border-gray-300 border-[1px] bg-white px-4 py-3 text-sm 
                           text-gray-900 font-semibold transition-all hover:bg-gray-50 hover:shadow-xl h-14 cursor-pointer"
            >
              {category.title}
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
