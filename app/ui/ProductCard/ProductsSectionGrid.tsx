import { IoIosArrowDown } from "react-icons/io";
import ProductsCard from "./ProductsCard";
import { products } from "@/data/AllProductsData";

interface ProductsSectionGridProps {
  showTags?: boolean;
  showStoreInfo?: boolean;
  showOfferEndTime?: boolean;
  columns: number;
}

const getGridColsClass = (columns: number) => {
  return {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
  }[columns] || "grid-cols-4"; // Default to 4 if an invalid value is provided
};

const ProductsSectionGrid: React.FC<ProductsSectionGridProps> = ({
  showTags = false,
  showStoreInfo = false,
  showOfferEndTime = false,
  columns,
}) => {
  return (
    <div className="w-full">
      <div className={`grid ${getGridColsClass(columns)} gap-5`}>
        {products.map((product) => (
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
      <div className="flex justify-center mt-5 hover:scale-105 transition-all">
        <button className="bg-orange-500 text-white px-10 py-4 flex items-center rounded-full">
          Show More
          <IoIosArrowDown className="ml-1 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ProductsSectionGrid;
