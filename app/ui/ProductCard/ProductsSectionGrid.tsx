import { IoIosArrowDown } from "react-icons/io";
import ProductsCard from "./ProductsCard";
import { products } from "@/data/AllProductsData";

interface ProductsSectionGridProps {
    showTags?: boolean;
    showStoreInfo?: boolean;
    showOfferEndTime?: boolean;
  }
  
  const ProductsSectionGrid: React.FC<ProductsSectionGridProps> = ({
    showTags = false,
    showStoreInfo = false,
    showOfferEndTime = false 
  }) => {
    return (
      <div className="w-full">
        <div className="grid grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-grow min-w-[200px] max-w-[250px] md:mx-0 mx-auto bg-red-400 gap-4"
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
  