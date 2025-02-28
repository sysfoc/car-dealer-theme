"use client"
import React, { useState } from "react";
import { HiChevronDown, HiCheck } from "react-icons/hi";
import { storeData } from "@/data/StoreData";
import { products } from "@/data/AllProductsData";
import ProductsCard from "@/app/ui/ProductCard/ProductsCard";


interface ProductsSectionGridProps {
    showTags?: boolean;
    showStoreInfo?: boolean;
    showOfferEndTime?: boolean;
    columns: number;
  }

  const StoreProducts: React.FC<ProductsSectionGridProps> = ({
    showTags = false,
    showStoreInfo = false,
    showOfferEndTime = false,
    columns,
  }) => {
  const [sortType, setSortType] = useState("relevant");
  const videoProducts = products.filter(product => product.image.endsWith(".mp4"));



  const getGridColsClass = (columns: number) => {
    return {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
    }[columns] || "grid-cols-4"; 
  };

  const options = [
    { value: "relevant", label: "Relevance" },
    { value: "top-sales", label: "Top Sales" },
    { value: "most-recent", label: "Most Recent" },
    { value: "price-low-high", label: "Price Low to High" },
    { value: "price-high-low", label: "Price High to Low" },
  ];

  return (
    <div>
        <div className="flex justify-between p-3">
      <div>
        <span className="text-lg text-gray-800 font-semibold">{storeData[0].remainingItems} Items</span>
      </div>

      <div className="relative group flex items-center gap-3">
          <span className="text-gray-500">Sort by</span>
        <div className="flex items-center gap-2 border rounded-full p-2 px-4 text-sm cursor-pointer bg-white group-hover:bg-gray-100">
          <span>{options.find((opt) => opt.value === sortType)?.label}</span>
          <HiChevronDown
            className="transition-transform duration-300 group-hover:rotate-180"
            size={16}
          />
        </div>

        <div className="absolute left-0 top-9 mt-1 w-full bg-white text-sm border rounded-lg shadow-lg hidden group-hover:block">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex justify-between items-center p-2 px-4 cursor-pointer hover:bg-gray-100 ${
                sortType === option.value ? "font-medium" : ""
              }`}
              onClick={() => setSortType(option.value)}
            >
              <span>{option.label}</span>
              {sortType === option.value && <HiCheck size={16} />}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={`grid ${getGridColsClass(columns)}`}>
        {videoProducts.slice(0,4).map((product) => (
          <div
            key={product.id}
            className="flex-grow min-w-[200px] max-w-[250px]mx-auto"
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


    </div>
  );
}

export default StoreProducts