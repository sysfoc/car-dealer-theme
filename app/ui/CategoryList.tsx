"use client";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "@/store/slices/categoriesSlice";
import { AppRootState } from "@/store";

const Categories = () => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const dispatch = useDispatch()
  const categoriesToShow = useSelector((state: AppRootState)=> state.categories.categories)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories/categoriestoshow");
      const data = await res.json();
      dispatch(setCategories(data));
    };
    fetchCategories();
  }, [dispatch]);

  return (
    <div className="mt-8 relative w-full overflow-visible mb-5">
      <div className={`text-xl font-bold flex justify-center items-center uppercase mb-4 transition-opacity ${
          isBeginning ? "opacity-100" : "opacity-70"
        }`}>
        Explore Your Interests
      </div>

      <Carousel
        spaceBetween={16}
        onSwiper={(swiper) => setIsBeginning(swiper.isBeginning)}
        onSlideChange={(swiper) => setIsBeginning(swiper.isBeginning)}
      >
        {categoriesToShow?.map((category) => (
          <SwiperSlide
            key={category.title}
            className="!w-auto max-w-44 gap-5 mb-5"
          >
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
