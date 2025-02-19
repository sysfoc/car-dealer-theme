"use client";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import { useState } from "react";

export const categories = [
  {
    title: "Featured",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Home & Kitchen",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Women's Clothing",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Women's Curve Clothing",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Women's Shoes",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Women's Lingerie & Lounge",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Men's Clothing",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Men's Shoes",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Men's Big & Tall",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Men's Underwear & Sleepwear", // Fixed typo (Underware -> Underwear)
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Sports & Outdoors",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Jewelry & Accessories",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Beauty & Health",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Toys & Games",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Automotive",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Kid's Fashion",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Kid's Shoes",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Baby & Maternity",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Bags & Luggage",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Patio, Lawn & Garden",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Arts, Crafts & Sewing",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Electronics",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Business, Industry & Science",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Tools & Home Improvements", // Fixed typo (improvements)
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Appliances",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Office & School Supplies",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Health & Household", // Fixed typo (Houshold -> Household)
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Pet Supplies",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Cell Phones & Accessories",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Smart Home",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Musical Instruments",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Books",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
  {
    title: "Beachwear",
    icon: null,
    link: "/",
    image: "/images/productPicture.jpg",
  },
];

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
        {categories.map((category) => (
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
