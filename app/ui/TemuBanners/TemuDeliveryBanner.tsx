"use client"
import { PiGreaterThanBold } from "react-icons/pi";
import { SiTcs } from "react-icons/si";
import { ImCross } from "react-icons/im";

const TemuDeliveryBanner = () => {
  return (
    <div className="my-4 sm:my-7 cursor-pointer hover:opacity-95 flex">
      <div
        className="red-section bg-[#F21F2B] text-white 
                   px-4 md:px-20 py-2 md:py-3 
                   flex items-center gap-2 md:gap-4 
                   relative z-20"
      >
        <div className="font-bold text-lg md:text-2xl lg:text-3xl">TEMU</div>
        <div className="flex gap-2 md:gap-5 items-center">
          <ImCross className="text-base md:text-lg lg:text-2xl" />
          <SiTcs className="text-lg md:text-2xl lg:text-4xl" />
        </div>
      </div>

      <div
        className="flex-1 bg-[#82819E] text-white 
                      py-2 md:py-3 
                      flex items-center justify-between 
                      px-4 md:px-5 pl-4 md:pl-8"
      >
        <div className="font-bold text-sm md:text-base lg:text-xl">
          Together for better delivery
        </div>
        <PiGreaterThanBold className="text-base md:text-lg mr-1 md:mr-2" />
      </div>
    </div>
  );
};

export default TemuDeliveryBanner;
