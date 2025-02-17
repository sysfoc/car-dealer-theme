"use client";

import React, { useState } from "react";
import Image from "next/image";
import StarsRating from "@/app/ui/StarsRating";
import { ClearanceProduct , clearanceProducts } from "@/data/ClearanceProducts";
import ProductDescription from "@/app/ui/ProductDescription";

const ClearanceProductCard: React.FC<{ product: ClearanceProduct }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const discountPercentage =
    product.previousPrice && product.previousPrice > product.price
      ? Math.round(((product.previousPrice - product.price) / product.previousPrice) * 100)
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
            src={product.image}
            alt={product.title}
            width={225}
            height={220}
            className="md:h-[220px] md:w-[223px] w-[185px] h-[185px] object-fill transform transition-transform duration-300 group-hover:scale-110"
          />
          {product.itemsLeft !== undefined && (
            <div className="flex justify-center">
              <span className="text-white bg-[rgba(0,0,0,0.6)] inline-block absolute top-[185px] border-gray-200 border-[1px] px-2 rounded-xl">
                {typeof product.itemsLeft === "number" && product.itemsLeft > 0
                  ? `Only ${product.itemsLeft} left`
                  : product.itemsLeft}
              </span>
            </div>
          )}
        </div>
        {isHovered && (
          <ProductDescription
          description={product.description}
          mousePosition={mousePosition}
          />
        )}
      </div>
      <div className="text-center">
        <div className="flex items-center gap-[2px]">
      <div className="flex items-center gap-[1.5px]">
            {product.discountDaysRemaining === undefined &&
              discountPercentage !== null && (
                <div className="text-[#D9001B] border-[#D9001B] border-[1px] text-xs font-bold px-1 rounded inline-block">
                  -{discountPercentage}%
                </div>
              )}
          </div>
          {product.discountDaysRemaining !== undefined && (
            <p className="text-sm text-[#D9001B]">
              Last {product.discountDaysRemaining} days
            </p>
          )}
          <p className="text-xl font-bold text-[#D9001B]">${product.price}</p>
          {product.previousPrice && (
            <p className="text-xs text-gray-600 line-through">
              ${product.previousPrice}
            </p>
          )}
          <p className="text-xs text-gray-600">{product.sold}k+ sold</p>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="!text-[#D9001B]">
        <StarsRating rating={product.rating}/>
          </div>
          <span className="text-xs text-gray-600 ml-1">{product.reviews}</span>
        </div>
      </div>
    </div>
  );
};


const ClearanceProducts: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden  mb-4 sm:mb-7">
      <div className="flex flex-nowrap gap-4">
        {clearanceProducts.map((product) => (
          <div className="flex-shrink-0" key={product.id}>
            <ClearanceProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClearanceProducts;
