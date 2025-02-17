"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StarsRating from "@/app/ui/StarsRating";
import ProductDescription from "@/app/ui/ProductDescription";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  image: string;
  rating: number;
  sold: number;
  reviews: number;
  offerEndTime?: string;
  itemsLeft?: string | number | undefined;
  discountDaysRemaining: number | undefined;
}

const CountdownTimer = ({ targetTime }: { targetTime: string }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date(targetTime).getTime();
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = targetDate - currentTime; 

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  const targetDate = new Date(targetTime);
  const totalDuration = targetDate.getTime() - new Date().getTime();
  const progress =
    totalDuration > 0 ? (timeRemaining / totalDuration) * 100 : 0;

  return (
    <div className="flex items-center justify-start gap-3 w-full">
      <div className="w-1/2 bg-gray-300 h-1 rounded-full ml-2">
        <div
          className="bg-orange-500 h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex items-center font-bold text-xs text-gray-600">
        {timeRemaining > 24 * 60 * 60 * 1000 && (
          <span>{days.toString().padStart(2, "0")}:</span>
        )}
        <span>{hours.toString().padStart(2, "0")}:</span>
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const {
    title,
    price,
    description,
    previousPrice,
    rating,
    sold,
    reviews,
    offerEndTime,
    itemsLeft,
  } = product;

  const discountPercentage =
    previousPrice && previousPrice > price
      ? Math.round(((previousPrice - price) / previousPrice) * 100)
      : null;

  return (
    <div className="w-[185px] h-[270px] md:w-[223px] md:h-[300px] shadow-lg flex flex-col items-center font-sans cursor-pointer">
      <div>
        <div
          className="group relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouse}
        >
          <Image
            src={"/images/productPicture.jpg"}
            alt={title}
            width={225}
            height={220}
            className="md:h-[220px] md:w-[223px] w-[185px] h-[185px] object-fill transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex justify-center">
            <span className="text-white bg-[rgba(0,0,0,0.6)] inline-block absolute top-[185px] border-gray-200 border-[1px] px-2 rounded-xl">
              {itemsLeft !== undefined &&
              typeof itemsLeft !== "string" &&
              itemsLeft > 0
                ? `Only ${itemsLeft} left`
                : itemsLeft}
            </span>
          </div>
        </div>
        {isHovered && (
          <ProductDescription
          description={product.description}
          mousePosition={mousePosition}
          />
        )}
      </div>
      <div className="text-center ">
        <div className="flex items-center gap-[1.5px]">
          {product.discountDaysRemaining !== undefined && (
            <p className="text-sm text-orange-500">
              Last {product.discountDaysRemaining} days
            </p>
          )}
          <p className="text-xl font-bold text-orange-500">${price}</p>
          {previousPrice && (
            <p className="text-xs text-gray-600 line-through ">
              ${previousPrice}
            </p>
          )}
          <p className="text-xs text-gray-600">{sold}k+ sold</p>

          <div className="flex items-center gap-[1.5px]">
            {
            product.discountDaysRemaining == undefined &&  discountPercentage !== null && (
                <div className=" text-orange-500
                border-orange-500 border-[1px]
               text-xs font-bold px-1 rounded inline-block">
                  -{discountPercentage}%
                </div>
              )
            }
          </div>
        </div>

        <div className="flex">
          {offerEndTime && <CountdownTimer targetTime={offerEndTime} />}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <StarsRating rating={rating}/>
          <span className="text-xs text-gray-600 ml-1">{reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
