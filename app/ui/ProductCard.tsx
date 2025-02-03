"use client";
import React, { useState, useEffect } from "react";

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
}

const CountdownTimer = ({ targetTime }: { targetTime: string }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date(targetTime); 
    const interval = setInterval(() => {
      const currentTime = new Date().getTime(); 
      const timeLeft = targetDate.getTime() - currentTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0); 
      } else {
        setTimeRemaining(timeLeft); 
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);
  
  const hours = Math.floor(timeRemaining / 3600000);
  const minutes = Math.floor((timeRemaining % 3600000) / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  // Calculate the progress bar percentage
  const targetDate = new Date(targetTime);
  const totalDuration = targetDate.getTime() - new Date().getTime();
  const progress = totalDuration > 0 ? (timeRemaining / totalDuration) * 100 : 0;


  return (
      <div className="flex items-center justify-start gap-3 w-full">
        <div className="w-1/2 bg-gray-300 h-1 rounded-full ml-2">
          <div
            className="bg-orange-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex items-center space-x-1 text-xs text-gray-600">
          <span>{hours.toString().padStart(2, "0")}:</span>
          <span>{minutes.toString().padStart(2, "0")}:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const {
    title,
    price,
    previousPrice,
    image,
    rating,
    sold,
    reviews,
    offerEndTime,
  } = product;

  const generateStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        // Full star
        stars.push(
          <span key={i} className="text-black text-2xl">
            ★
          </span>
        );
      } else if (i < rating) {
        // Partially filled star using CSS gradient
        stars.push(
          <span
            key={i}
            className="text-transparent text-2xl relative"
            style={{
              display: "inline-block",
              background: `linear-gradient(to right, #000 ${
                (rating - Math.floor(rating)) * 100
              }%, #c4c4c4 ${(rating - Math.floor(rating)) * 100}% 100%)`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ★
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="text-gray-400 text-2xl">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="max-w-[230px] shadow-lg flex flex-col items-center">
      <div className="group relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[225px] h-[220px] object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="text-center mt-3">
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
          <div className="font-sans">{generateStars(rating)}</div>
          <p className="mt-1 text-sm text-gray-500">{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
