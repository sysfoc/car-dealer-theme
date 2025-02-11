import { PiGreaterThanBold } from "react-icons/pi"
import { RiDiscountPercentLine } from "react-icons/ri";

const ClearanceDealBanner = () => {
    return (
        <div className="my-7 cursor-pointer hover:opacity-95">
      <div className="bg-red-600 text-white py-3 text-center flex items-center justify-center gap-5">
        <div className="flex gap-[1px] items-center">
        <RiDiscountPercentLine className="text-2xl"/>
        <span className="text-xl font-bold italic">Clearance deals</span>
        </div>
        <div className="flex items-center justify-center gap-1">
        <span className="text-sm font-semibold">Limited stock</span>
        <PiGreaterThanBold className=" text-xl"/>
        </div>
      </div>
        </div>
    );
  };
  
  export default ClearanceDealBanner;
  