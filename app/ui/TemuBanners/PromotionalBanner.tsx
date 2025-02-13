"use client"
import { MdOutlineElectricBolt } from "react-icons/md";
import { PiGreaterThanBold } from "react-icons/pi"

const PromotionalBanner = () => {
    return (
        <div className="my-7 cursor-pointer hover:opacity-95">
      <div className="bg-red-600 text-white py-3 text-center flex items-center justify-center gap-5">
        <div className="flex gap-[1px] items-center">
        <MdOutlineElectricBolt className="text-2xl"/>
        <span className="text-xl font-bold italic">Lightning deals</span>
        </div>
        <div className="flex items-center justify-center gap-1">
        <span className="text-sm font-semibold">Limited time offer</span>
        <PiGreaterThanBold className=" text-xl"/>
        </div>
      </div>
        </div>
    );
  };
  
  export default PromotionalBanner;
  