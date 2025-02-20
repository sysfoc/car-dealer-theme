"use client";
import Image from "next/image";
import { PiGreaterThan } from "react-icons/pi";
import PromotionalBanner from "@/app/ui/TemuBanners/PromotionalBanner";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import { useState } from "react";
import { categoriesToShow } from "@/data/categories";
import AllproductsCard from "@/app/ui/ProductCard/RecommendedProductsCard";
import { products } from "@/data/LighteningDealProducts";
import { ProductCard } from "@/app/ui/ProductCard/LightningProductCard";

export default function LighteningDealsList() {
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="mx-10 py-5">
      <div className="flex items-center gap-1">
        <span className="opacity-60">Home</span>
        <PiGreaterThan className="opacity-60" fontSize={12} />
        <span>Lightning deals</span>
      </div>
      <PromotionalBanner />
      <div className="flex gap-2 pb-4 text-xl">
        <span className="text-black font-bold">Exclusive Offer</span>
        <span className="text-orange-500 font-bold">All under Rs.299</span>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hidden">
        <div className="flex flex-nowrap gap-5">
          {products.map((product) => (
            <div
              className="flex-shrink-0"
              key={product.id}
              onClick={() => window.open(`/LightningDealsList/${product.id}`, "_blank")}
            >
              <ProductCard product={product} navigateToIndividual={true} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
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
          {categoriesToShow.map((category) => (
            <SwiperSlide key={category.title} className="max-w-36">
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full cursor-pointer"
                  />
                </div>
                <div className="cursor-pointer text-center text-sm font-semibold text-gray-900 bg-white px-4 py-2">
                  {category.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      <AllproductsCard
        showTags={false}
        showStoreInfo={false}
        showOfferEndTime={true}
      />
    </div>
  );
}
