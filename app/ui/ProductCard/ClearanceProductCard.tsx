"use client";

import Image from "next/image";
import StarsRating from "@/app/ui/ProductCard/StarsRating";
import ProductDescription from "@/app/ui/ProductCard/ProductDescription";
import { useEffect , useState , useRef  } from "react";
import { setClearanceProducts } from "@/store/slices/clearanceProductSlice";
import { AppRootState } from "@/store";
import { useDispatch , useSelector } from "react-redux";

export interface Product {
  _id: string;
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

interface ProductCardProps {
  product: Product;
  navigateToIndividual?: boolean;
}


export const ClearanceProductCard: React.FC<ProductCardProps> = ({ product, navigateToIndividual = false  }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const TimeOutRef = useRef<NodeJS.Timeout | null  >(null)

const handleClick = () => {
  if (navigateToIndividual) {
    window.open(`/ClearanceDealsList/${product._id}`, '_blank');
  } else {
    window.open(`/ClearanceDealsList`, '_blank');
  }
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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const clearanceProducts = useSelector((state:AppRootState) => state.clearanceProducts.clearanceProducts)


  useEffect(() => {
    fetch("/api/products/clearanceProducts")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setClearanceProducts(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching clearance products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full overflow-x-auto grid grid-cols-5 gap-5 scrollbar-hidden mb-4 justify-center">
        {clearanceProducts.slice(-10).map((product) => (
          <div className="flex-shrink-0" key={product._id}>
            <ClearanceProductCard product={product} />
          </div>
        ))}
    </div>
  );
};

export default AllClearanceProducts;
