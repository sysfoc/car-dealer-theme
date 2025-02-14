"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

// Define the ClearanceProduct interface
interface ClearanceProduct {
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
  discountDaysRemaining: number | undefined;
}

// Local array of clearance products
const clearanceProducts: ClearanceProduct[] = [
    {
      id: 101,
      title: "Clearance Product 1",
      discountDaysRemaining: undefined,
      description: "Huge discounts on this clearance product!",
      price: 9.99,
      previousPrice: 29.99,
      image: "/images/productPicture.jpg",
      rating: 4.2,
      sold: 80,
      reviews: 200,
      itemsLeft: 15,
    },
    {
      id: 102,
      title: "Clearance Product 2",
      discountDaysRemaining: undefined,
      description: "Limited stock available!",
      price: 8.99,
      previousPrice: 27.99,
      image: "/images/productPicture.jpg",
      rating: 4.5,
      sold: 100,
      reviews: 180,
      itemsLeft: 10,
    },
    {
      id: 103,
      title: "Clearance Product 3",
      discountDaysRemaining: undefined,
      description: "Don't miss out on this amazing deal!",
      price: 7.99,
      previousPrice: 25.99,
      image: "/images/productPicture.jpg",
      rating: 4.0,
      sold: 90,
      reviews: 150,
      itemsLeft: 20,
    },
    {
      id: 104,
      title: "Clearance Product 4",
      discountDaysRemaining: undefined,
      description: "Special clearance sale just for you!",
      price: 10.99,
      previousPrice: 30.99,
      image: "/images/productPicture.jpg",
      rating: 4.3,
      sold: 75,
      reviews: 210,
      itemsLeft: 12,
    },
    {
      id: 105,
      title: "Clearance Product 5",
      discountDaysRemaining: undefined,
      description: "Get it before it's gone!",
      price: 6.99,
      previousPrice: 24.99,
      image: "/images/productPicture.jpg",
      rating: 4.1,
      sold: 85,
      reviews: 170,
      itemsLeft: 8,
    },
    {
      id: 106,
      title: "Clearance Product 6",
      discountDaysRemaining: undefined,
      description: "Massive savings on this item!",
      price: 5.99,
      previousPrice: 22.99,
      image: "/images/productPicture.jpg",
      rating: 4.4,
      sold: 95,
      reviews: 220,
      itemsLeft: 18,
    },
    {
      id: 107,
      title: "Clearance Product 7",
      discountDaysRemaining: undefined,
      description: "Flash sale on this product!",
      price: 12.99,
      previousPrice: 32.99,
      image: "/images/productPicture.jpg",
      rating: 4.6,
      sold: 110,
      reviews: 250,
      itemsLeft: 9,
    },
    {
      id: 108,
      title: "Clearance Product 8",
      discountDaysRemaining: undefined,
      description: "Best deal of the season!",
      price: 11.99,
      previousPrice: 31.99,
      image: "/images/productPicture.jpg",
      rating: 4.7,
      sold: 120,
      reviews: 260,
      itemsLeft: 5,
    },
    {
      id: 109,
      title: "Clearance Product 9",
      discountDaysRemaining: undefined,
      description: "Limited-time offer!",
      price: 9.49,
      previousPrice: 28.99,
      image: "/images/productPicture.jpg",
      rating: 4.2,
      sold: 98,
      reviews: 190,
      itemsLeft: 14,
    },
    {
      id: 110,
      title: "Clearance Product 10",
      discountDaysRemaining: undefined,
      description: "Unbeatable price for a limited time!",
      price: 8.49,
      previousPrice: 26.99,
      image: "/images/productPicture.jpg",
      rating: 4.3,
      sold: 105,
      reviews: 230,
      itemsLeft: 7,
    }
  ];
  

/**
 * Renders a single clearance product card.
 */
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

  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-black text-sm" />);
      } else if (i < rating) {
        stars.push(
          <span key={i} className="relative w-4 h-4 text-sm flex items-center">
            <FaRegStar className="text-gray-400 absolute" />
            <span
              className="absolute top-1/2 left-0 overflow-hidden"
              style={{
                width: `${(rating - Math.floor(rating)) * 100}%`,
                transform: "translateY(-52%)",
              }}
            >
              <FaStar className="text-black" />
            </span>
          </span>
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-[185px] h-[270px] md:w-[225px] md:h-[300px] shadow-lg flex flex-col items-center font-sans cursor-pointer">
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
            className="md:h-[220px] md:w-[225px] w-[185px] h-[185px] object-fill transform transition-transform duration-300 group-hover:scale-110"
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
          <div
            className="fixed bg-[rgba(0,0,0,0.6)] text-xs text-gray-200 z-50 max-w-64 py-1 px-2"
            style={{
              left: `${mousePosition.x + 12}px`,
              top: `${mousePosition.y + 12}px`,
              pointerEvents: "none",
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {product.description}
          </div>
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
          <div className="flex items-center text-[#D9001B] text-sm">
            {generateStars(product.rating)}
          </div>
          <span className="text-xs text-gray-600 ml-1">{product.reviews}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Container component that maps over the clearanceProducts array.
 */
const ClearanceProducts: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden  mb-4 sm:mb-7">
      <div className="flex flex-nowrap gap-6">
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
