"use client";
import React from "react";
import { MdGppGood } from "react-icons/md";
import { CiLock, CiDeliveryTruck } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { PiGreaterThanBold } from "react-icons/pi";

const TemuBanner = () => {
  return (
    <div className="my-7 pt-5 cursor-pointer rounded-lg overflow-hidden"> 
      <div className="text-white bg-[rgb(9,125,0)] flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:px-6 rounded-t-lg hover:opacity-95">
        <div className="flex gap-1 items-center mb-2 sm:mb-0">
          <MdGppGood className="text-xl" />
          <span className="text-sm font-semibold">Why choose Temu</span>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <div className="flex gap-2 items-center sm:pr-5 sm:border-r border-white">
            <CiLock className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-sm font-semibold">
              Security Privacy
            </span>
          </div>
          <div className="flex gap-2 items-center sm:pr-5 sm:border-r border-white">
            <GoCreditCard className="text-xl" />
            <span className="text-xs sm:text-sm font-semibold">
              Safe payments
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CiDeliveryTruck className="text-xl sm:text-2xl" />
            <span className="text-xs sm:text-sm font-semibold">
              Delivery guarantee
            </span>
            <PiGreaterThanBold className="text-sm sm:text-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[rgb(9,125,0)] py-2 px-4 sm:px-6 border-[1.5px] border-[rgb(9,125,0)] rounded-b-lg hover:opacity-90">
        <div className="flex items-center gap-2">
          <FaBell className="flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">
            Security reminder: Please be wary of scam messages and links. Temu
            won&apos;t ask for extra fees via SMS or email.
          </span>
        </div>
        <div className="flex gap-2 items-center sm:ml-4">
          <span className="text-xs sm:text-sm font-semibold">View</span>
          <PiGreaterThanBold className="text-sm sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TemuBanner;
