import { IoIosArrowDown } from "react-icons/io";
import ProductsCard from "./ProductsCard";
import { products } from "@/data/AllProductsData";

interface ProductsSectionGridProps {
    showTags?: boolean;
    showStoreInfo?: boolean;
    showOfferEndTime?: boolean;
    columns: number;
  }
  
  const ProductsSectionGrid: React.FC<ProductsSectionGridProps> = ({
    showTags = false,
    showStoreInfo = false,
    showOfferEndTime = false,
    columns
  }) => {
    return (
      <div className="w-full">
        <div className={`grid grid-cols-${columns} gap-5`}>
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
  