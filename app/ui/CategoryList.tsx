"use client";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import { useState, useEffect } from "react";
const Categories = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);

  const categories = [
    {
      title: "Featured",
      icon: null,
      link: "/",
    },
    {
      title: "Home & Kitchen",
      icon: null,
      link: "/",
    },
    {
      title: "Women's Clothing",
      icon: null,
      link: "/",
    },
    {
      title: "Women's Curve Clothing",
      icon: null,
      link: "/",
    },
    {
      title: "Women's Shoes",
      icon: null,
      link: "/",
    },
    {
      title: "Women's Lingerie & Lounge",
      icon: null,
      link: "/",
    },
    {
      title: "Men's Clothing",
      icon: null,
      link: "/",
    },
    {
      title: "Men's Shoes",
      icon: null,
      link: "/",
    },
    {
      title: "Men's Big & Tall",
      icon: null,
      link: "/",
    },
    {
      title: "Men's Underware & Sleepwear",
      icon: null,
      link: "/",
    },
    {
      title: "Sports & Outdoors",
      icon: null,
      link: "/",
    },
    {
      title: "Jewelry & Accessories",
      icon: null,
      link: "/",
    },
    {
      title: "Beauty & Health",
      icon: null,
      link: "/",
    },
    {
      title: "Toys & Games",
      icon: null,
      link: "/",
    },
    {
      title: "Automotive",
      icon: null,
      link: "/",
    },
    {
      title: "Kid's Fashion",
      icon: null,
      link: "/",
    },
    {
      title: "Kid's Shoes",
      icon: null,
      link: "/",
    },
    {
      title: "Baby & Maternity",
      icon: null,
      link: "/",
    },
    {
      title: "Bags & Luggage",
      icon: null,
      link: "/",
    },
    {
      title: "Patio, Lawn & Garden",
      icon: null,
      link: "/",
    },
    {
      title: "Arts, Crafts & Sewing",
      icon: null,
      link: "/",
    },
    {
      title: "Electronics",
      icon: null,
      link: "/",
    },
    {
      title: "Business, Industry & Science",
      icon: null,
      link: "/",
    },
    {
      title: "Tools & Home improvements",
      icon: null,
      link: "/",
    },
    {
      title: "Appliances",
      icon: null,
      link: "/",
    },
    {
      title: "Office & School Supplies",
      icon: null,
      link: "/",
    },
    {
      title: "Health & Houshold",
      icon: null,
      link: "/",
    },
    {
      title: "Pet Supplies",
      icon: null,
      link: "/",
    },
    {
      title: "Cell Phones & Accessories",
      icon: null,
      link: "/",
    },
    {
      title: "Smart Home",
      icon: null,
      link: "/",
    },
    {
      title: "Musical Instruments",
      icon: null,
      link: "/",
    },
    {
      title: "Books",
      icon: null,
      link: "/",
    },
    {
      title: "Beachwear",
      icon: null,
      link: "/",
    },
  ];
  return (
    <div className="mt-8 relative w-full overflow-visible mb-10">
      <div className="text-xl font-bold flex justify-center items-center uppercase mb-4">
        Explore Your Interests
      </div>

      <Carousel
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setIsBeginning(swiper.isBeginning);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
        }}
         
        className="swiper-container"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.title} className="!w-auto max-w-44 mb-5">
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
