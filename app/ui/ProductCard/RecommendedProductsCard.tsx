"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaPlay } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import StarsRating from "@/app/ui/StarsRating";
import ProductDescription from "../ProductDescription";

interface Product {
  id: number;
  description: string;
  price: number;
  sold: number;
  image: string;
  tags: string[];
  reviews: {
    count: number;
    rating: number;
  }[];
  storeInfo: string[];
}

const RecommendedProductsCard: React.FC<{ product: Product }> = ({
  product,
}) => {
  const formattedSold =
    product.sold >= 1000
      ? (product.sold / 1000).toFixed(1) + "k"
      : product.sold.toString();

  const rating = product.reviews?.[0]?.rating || 0;
  const reviewCount = product.reviews?.[0]?.count || 0;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const storeInfoMessages: string[] = product.storeInfo;

  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [prevTagIndex, setPrevTagIndex] = useState<number | null>(null);

  useEffect(() => {
    if (product.tags.length > 1) {
      const interval = setInterval(() => {
        setCurrentTagIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % product.tags.length;
          setPrevTagIndex(prevIndex);
          setTimeout(() => {
            setPrevTagIndex(null);
          }, 800);
          return newIndex;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [product.tags]);

  const [currentStoreInfoIndex, setCurrentStoreInfoIndex] = useState(0);
  const [prevStoreInfoIndex, setPrevStoreInfoIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (storeInfoMessages.length > 1) {
      const interval = setInterval(() => {
        setCurrentStoreInfoIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % storeInfoMessages.length;
          setPrevStoreInfoIndex(prevIndex);
          setTimeout(() => {
            setPrevStoreInfoIndex(null);
          }, 800);
          return newIndex;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [storeInfoMessages]);

  const isVideo = product.image.endsWith(".mp4");
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.target as HTMLVideoElement | HTMLImageElement;
  
    if (target instanceof HTMLVideoElement) {
      // Check if the video is already playing to avoid unnecessary play/pause
      if (target.paused) {
        target.currentTime = 0;
        target.play();
        target.playbackRate = 1;
      }
      setShowText(true);
    } else if (!isVideo) {
      setShowText(true);
    }
  
    setIsHovered(true);
  };
  
  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.target as HTMLVideoElement | HTMLImageElement;
  
    if (target instanceof HTMLVideoElement) {
      // Pause the video only if it's playing
      if (!target.paused) {
        target.pause();
        target.currentTime = 0;
      }
      setShowText(false);
    } else if (!isVideo) {
      setShowText(false);
    }
  
    setIsHovered(false);
  };
  

  return (
    <div
    className="min-w-[150px] max-w-[220px] hover:shadow-[0_4px_15px_-3px_rgba(0,0,0,0.2)] font-sans cursor-pointer"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouse}
  >
    <div className="relative overflow-hidden w-full p-2">
      {isVideo ? (
        <video
          src={product.image}
          className="w-[185px] h-[185px] md:w-[225px] md:h-[225px] object-cover"
          muted
          loop
          playsInline
          onMouseEnter={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
            e.currentTarget.playbackRate = 1;
            setShowText(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
            setShowText(false);
          }}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.description}
          width={215}
          height={215}
          className="w-[185px] h-[185px] md:w-[225px] md:h-[225px] object-fill"
        />
      )}

      {isVideo && !showText && (
        <div className="absolute bottom-2 left-2 m-2 rounded-full bg-black bg-opacity-50 text-white p-2 text-xs">
          <FaPlay />
        </div>
      )}

      {!isVideo && showText && (
        <div className="absolute m-2 bottom-2 left-2 bg-white flex justify-center items-center gap-1 text-black rounded-full px-2 py-1 text-sm transition-all duration-200">
          <FaEye />
          Quick Look
        </div>
      )}
    </div>

    {isHovered && (
      <ProductDescription
        description={product.description}
        mousePosition={mousePosition}
      />
    )}

    <div className="text-center mt-1 w-full px-2">
      <p className="text-xs text-[#777777] truncate">{product.description}</p>

      <div className="flex justify-between items-center mt-1">
        <div className="flex items-baseline gap-1">
          <p className="text-lg sm:text-lg md:text-xl font-bold text-orange-500">
            ${product.price}
          </p>
          <div className="flex items-center text-[12px]">
            <FaFire className="text-orange-500" />
            <p className="text-gray-600">{formattedSold} sold</p>
          </div>
        </div>
        <div className="inline-block border border-black px-3 py-[1px] rounded-full hover:border-[1.5px]">
          <BiCartAdd className="text-xl" />
        </div>
      </div>

      {product.tags.length > 0 && (
        <div className="relative h-6 overflow-hidden text-start">
          {prevTagIndex !== null && (
            <div className="absolute w-full text-xs text-orange-500 animate-slideOutUp">
              {product.tags[prevTagIndex]}
            </div>
          )}
          <div
            className={`absolute w-full text-sm text-orange-500 ${
              prevTagIndex !== null ? "animate-slideInUp" : ""
            }`}
          >
            {product.tags[currentTagIndex]}
          </div>
        </div>
      )}

      <div className="flex items-center justify-start">
        <StarsRating rating={rating} />
        <span className="text-xs text-[#777777] ml-1">{reviewCount}</span>
      </div>

      {storeInfoMessages.length > 0 && (
         <div className="relative h-6 overflow-hidden text-start">
         {prevStoreInfoIndex !== null && (
           <div className="absolute w-full text-xs text-black animate-slideOutUp">
             {storeInfoMessages[prevStoreInfoIndex]}
           </div>
         )}
         <div
           className={`absolute w-full text-sm text-black ${
             prevStoreInfoIndex !== null ? "animate-slideInUp" : ""
           }`}
         >
           {storeInfoMessages[currentStoreInfoIndex]}
         </div>
       </div>
     )}
   </div>

   <style jsx>{`
     .animate-slideInUp {
       animation: slideInUp 0.5s ease forwards;
     }
     .animate-slideOutUp {
       animation: slideOutUp 0.5s ease forwards;
     }
     @keyframes slideInUp {
       from {
         transform: translateY(100%);
       }
       to {
         transform: translateY(0);
       }
     }
     @keyframes slideOutUp {
       from {
         transform: translateY(0);
       }
       to {
         transform: translateY(-120%);
       }
     }
   `}</style>
  </div>
);
};

export default RecommendedProductsCard;
