"use client";
import React, { useState , useRef, useEffect } from "react";
import Image from "next/image";
import StarsRating from "@/app/ui/ProductCard/StarsRating";
import ProductDescription from "@/app/ui/ProductCard/ProductDescription";
import { CountdownTimer } from "@/app/ui/ProductCard/CountdownTimer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "@/store";
import { setLightningProducts } from "@/store/slices/lightningProductSlice";
import ShimmerSkeleton from "@/app/ui/SkeletonAnimation/ShimmerSkeleton";


interface Product {
  _id: string;
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
 interface ProductCardProps {
  product: Product;
  navigateToIndividual?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, navigateToIndividual = false  }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const TimeOutRef = useRef<NodeJS.Timeout | null>(null);
  const handleClick = () => {
    if (navigateToIndividual) {
      // Navigate to the individual product page
      window.open(`/LightningDealsList/${product._id}`, '_blank');
    } else {
      // Navigate to the LightningDealsList page
      window.open(`/LightningDealsList`, '_blank');
    }
  };
  
  const handleMouseEnter = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });

    if (TimeOutRef.current) {
      clearTimeout(TimeOutRef.current);
    }

    TimeOutRef.current = setTimeout(() => {
      setShowToolTip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (TimeOutRef.current) {
      clearTimeout(TimeOutRef.current);
    }
    setShowToolTip(false);
  };

  const {
    title,
    price,
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <Image
            src={"/images/productPicture.jpg"}
            alt={title}
            width={225}
            height={220}
            loading="lazy"
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
        {showToolTip && (
          <ProductDescription
            description={product.description}
            mousePosition={mousePosition}
            isVisible={showToolTip}
          />
        )}
      </div>
      <div className="text-center ">
        <div className="flex items-center gap-[1px]">
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
            {product.discountDaysRemaining == undefined &&
              discountPercentage !== null && (
                <div
                  className=" text-orange-500
                border-orange-500 border-[1px]
               text-xs font-bold px-1 rounded inline-block"
                >
                  -{discountPercentage}%
                </div>
              )}
          </div>
        </div>

        <div className="flex">
          {offerEndTime && <CountdownTimer targetTime={offerEndTime} />}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <StarsRating rating={rating} />
          <span className="text-xs text-gray-600 ml-1">{reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

const LighteningDealProducts: React.FC = () => {
   const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const lightningProducts = useSelector((state:AppRootState) => state.lightningProducts.lightningProducts)
  
  
    useEffect(() => {
      fetch("/api/products/lightningProducts")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setLightningProducts(data));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching clearance products:", err);
          setLoading(false);
        });
    }, []);
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden">
      <div className="flex flex-nowrap gap-4">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <div className="flex-shrink-0" key={index}>
                <ShimmerSkeleton />
              </div>
            ))
          : lightningProducts.slice(-10).map((product) => (
              <div className="flex-shrink-0" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default LighteningDealProducts;
