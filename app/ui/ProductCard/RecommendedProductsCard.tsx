"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaEye, FaPlay } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import StarsRating from "@/app/ui/StarsRating";
import ProductDescription from "@/app/ui/ProductDescription";
import { products } from "@/data/AllProductsData";
import { IoIosArrowDown } from "react-icons/io";
import { CountdownTimer } from "@/app/ui/CountdownTimer";

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
  offerEndTime?: string;
}

interface RecommendedProductsCardProps {
  product: Product;
  showTags?: boolean; 
  showStoreInfo?: boolean;
  showOfferEndTime?: boolean;
}

const RecommendedProductsCard: React.FC<RecommendedProductsCardProps> = ({
  product,
  showTags = true,
  showStoreInfo = true,
  showOfferEndTime = false,
}) => {
  const formattedSold =
    product.sold >= 1000
      ? (product.sold / 1000).toFixed(1) + "k"
      : product.sold.toString();

  const rating = product.reviews?.[0]?.rating || 0;
  const reviewCount = product.reviews?.[0]?.count || 0;
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const isVideo = product.image.endsWith(".mp4");
  const VideoUseRef = useRef<NodeJS.Timeout | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const TimeOutRef = useRef<NodeJS.Timeout | null>(null);
  const [showText, setShowText] = useState<boolean>(false);

  const handleMouseEnter = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });

    if (TimeOutRef.current) {
      clearTimeout(TimeOutRef.current);
    }

    TimeOutRef.current = setTimeout(() => {
      setShowToolTip(true);
    }, 500);

    const target = event.currentTarget as HTMLVideoElement | HTMLImageElement;

    if (isVideo && target instanceof HTMLVideoElement) {
      if (VideoUseRef.current) {
        clearTimeout(VideoUseRef.current);
      }

      VideoUseRef.current = setTimeout(() => {
        if (target.paused) {
          target.currentTime = 0;
          target.play();
          target.playbackRate = 1;
        }
      }, 2000);
    }

    setShowText(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (TimeOutRef.current) {
      clearTimeout(TimeOutRef.current);
    }
    setShowToolTip(false);

    const target = event.currentTarget as HTMLVideoElement | HTMLImageElement;

    if (isVideo && target instanceof HTMLVideoElement) {
      if (!target.paused) {
        target.pause();
        target.currentTime = 0;
      }
      if (VideoUseRef.current) {
        clearTimeout(VideoUseRef.current);
      }
    }
    setShowText(false);
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

  return (
    <div
      className="min-w-[150px] max-w-[220px] hover:shadow-[0_4px_15px_-3px_rgba(0,0,0,0.2)] font-sans cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

      {showToolTip && (
        <ProductDescription
          description={product.description}
          mousePosition={mousePosition}
          isVisible={showToolTip}
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

        {showTags && product.tags.length > 0 && (
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

        {/* Add Offer End Time component here */}
        {showOfferEndTime && product.offerEndTime && (
          <div className="mt-1 p-1 rounded text-center">
            {<CountdownTimer targetTime={product.offerEndTime} />}
          </div>
        )}
        {showStoreInfo && storeInfoMessages.length > 0 && (
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

interface AllproductsCardProps {
  showTags?: boolean;
  showStoreInfo?: boolean;
  showOfferEndTime?: boolean;
}

const AllproductsCard: React.FC<AllproductsCardProps> = ({
  showTags = false,
  showStoreInfo = false,
  showOfferEndTime = false 
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap md:justify-start justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-grow min-w-[200px] max-w-[250px] md:mx-0 mx-auto"
          >
            <RecommendedProductsCard
              product={product}
              showTags={showTags}
              showStoreInfo={showStoreInfo}
              showOfferEndTime={showOfferEndTime}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 hover:scale-105 transition-all">
        <button className="bg-orange-500 text-white px-10 py-4 flex items-center rounded-full">
          Show More
          <IoIosArrowDown className="ml-1 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default AllproductsCard;
