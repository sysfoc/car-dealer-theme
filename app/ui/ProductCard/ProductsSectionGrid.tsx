"use client"
import { IoIosArrowDown } from "react-icons/io";
import ProductsCard from "./ProductsCard";
import OrangeButton from "../OrangeButton";
import { useEffect, useState } from "react";
import { AppRootState } from "@/store";
import { setProducts } from "@/store/slices/productsSlice";
import { useDispatch , useSelector } from "react-redux";
import ShimmerSkeleton from "@/app/ui/SkeletonAnimation/ShimmerSkeleton";

interface ProductsSectionGridProps {
  showTags?: boolean;
  showStoreInfo?: boolean;
  showOfferEndTime?: boolean;
  columns: number;
}

const getGridColsClass = (columns: number) => {
  return (
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
    }[columns] || "grid-cols-4"
  );
};

const ProductsSectionGrid: React.FC<ProductsSectionGridProps> = ({
  showTags = false,
  showStoreInfo = false,
  showOfferEndTime = false,
  columns,
}) => {
  //console.log('rerendered grid')
  const [visibleCount, setVisibleCount] = useState(20);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const products = useSelector((state:AppRootState) => state.products.allProducts)

  useEffect(() => {
    setLoading(true);
    fetch('/api/products/allProducts')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="w-full">
      <div className={`grid ${getGridColsClass(columns)} gap-5`}>
        
        {loading
  ? Array.from({ length: columns * 2 }).map((_, index) => (
      <div key={index} className="flex-grow min-w-[200px] max-w-[250px] mx-auto">
        <ShimmerSkeleton />
      </div>
    ))
  : visibleProducts.map((product: any) => (
      <div
        key={product._id}
        className="flex-grow min-w-[200px] max-w-[250px] mx-auto"
      >
        <ProductsCard
          product={product}
          showTags={showTags}
          showStoreInfo={showStoreInfo}
          showOfferEndTime={showOfferEndTime}
        />
      </div>
    ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="w-56 h-12"
        onClick={handleShowMore}
        >
          <OrangeButton>
            <div className="flex items-center">
              Show More
              <IoIosArrowDown className="ml-1 text-sm" />
            </div>
          </OrangeButton>
        </button>
      </div>
    </div>
  );
};

export default ProductsSectionGrid;
