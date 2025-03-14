"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import StarsRating from "@/app/ui/ProductCard/StarsRating";
import { clearanceProductsData } from "@/data/ClearanceProductsData";
import ProductDescription from "@/app/ui/ProductCard/ProductDescription";


export interface ClearanceProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  image: string;
  rating: number;
  sold: number;
  reviews: number;
  itemsLeft?: string | number;
  discountDaysRemaining?: number;
  offerEndTime: string;
}


export const ClearanceProductCard: React.FC<{ product: ClearanceProducts }> = ({ product }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const TimeOutRef = useRef<NodeJS.Timeout | null  >(null)

  const handleClick = () => {
    window.open(`/ClearanceDealsList` , '_blank');
};

  const handleMouseEnter = (event: React.MouseEvent) => {
    const { clientX , clientY} =  event;
    setMousePosition({x:clientX , y:clientY})

if(TimeOutRef.current){
  clearTimeout(TimeOutRef.current)
}

    TimeOutRef.current = setTimeout(()=>{
      setShowToolTip(true)
    } , 500)
  } 

  const handleMouseLeave = () => {
    if(TimeOutRef.current){ 
      clearTimeout(TimeOutRef.current)
    }
    setShowToolTip(false)
  }


  const discountPercentage =
    product.previousPrice && product.previousPrice > product.price
      ? Math.round(((product.previousPrice - product.price) / product.previousPrice) * 100)
      : null;

  return (
    <div className="min-w-[185px] min-h-[270px] w-full h-full shadow-lg flex flex-col items-center font-sans cursor-pointer"
    onClick={handleClick}
    >
      <div>
        <div
          className="group relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
        {showToolTip && (
          <ProductDescription
          description={product.description}
          mousePosition={mousePosition}
          isVisible={showToolTip}
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


const AllClearanceProducts: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto grid grid-cols-5 gap-5 scrollbar-hidden mb-4 justify-center">
        {clearanceProductsData.slice(-10).map((product) => (
          <div className="flex-shrink-0" key={product.id}>
            <ClearanceProductCard product={product} />
          </div>
        ))}
    </div>
  );
};

export default AllClearanceProducts;
