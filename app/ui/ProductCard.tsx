"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar , FaRegStar } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  previousPrice: number;
  image: string;
  rating: number;
  sold: number;
  reviews: number;
  offerEndTime: string | undefined;
  itemsLeft: string | number | undefined;
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

  // Calculate the progress bar percentage
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
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0, });

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

  const generateStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-black text-xl">
            <FaStar/>
          </span>
        );
      } else if (i < rating) {
        stars.push(
          <span key={i} className="relative inline-block text-xl w-[24px] h-[24px]">
            <FaRegStar className="text-gray-400 absolute inset-0" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${(rating - Math.floor(rating)) * 100}%` }}
            >
              <FaStar className="text-black absolute left-0" />
            </div>
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="text-gray-400 text-xl">
            <FaRegStar/>
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="max-w-[230px] shadow-lg flex flex-col items-center cursor-pointer">
      <div>
        <div
          className="group relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouse}
        >
          <Image
            src={"/images/images.jpg"}
            alt={title}
            width={225}
            height={190}
            className="object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex justify-center">
            <span className="text-white bg-[rgba(0,0,0,0.6)] inline-block absolute top-[245px] border-gray-200 border-[1px] px-2 rounded-xl">
              {itemsLeft !== undefined &&
              typeof itemsLeft !== "string" &&
              itemsLeft > 0
                ? `Only ${itemsLeft} left`
                : itemsLeft}
            </span>
          </div>
        </div>
        {isHovered && (
          <div
            className="absolute bg-[rgba(0,0,0,0.6)] text-xs text-gray-200 z-50 max-w-64 py-1 px-2"
            style={{
               left: `${mousePosition.x + 12}px`,
               top:  `${mousePosition.y + 12}px`,
               pointerEvents:  'none',
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {description}
          </div>
        )}
      </div>
      <div className="text-center ">
        <div className="flex items-center gap-[1.5px]">
          <p className="text-sm text-orange-500">Last 3 days</p>
          <p className="text-xl font-bold text-orange-500">${price}</p>
          {previousPrice && (
            <p className="text-xs text-gray-600 line-through ">
              ${previousPrice}
            </p>
          )}
          <p className="text-xs text-gray-600">{sold}k+ sold</p>
        </div>

        <div className="flex">
          {offerEndTime && <CountdownTimer targetTime={offerEndTime} />}
        </div>

        <div className="flex items-center">
          <div className="font-sans flex text-sm">{generateStars(rating)}</div>
          <p className="mt-1 text-sm text-gray-500">{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
