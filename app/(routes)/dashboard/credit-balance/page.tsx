"use client";

import React from "react";
import { CiFolderOn, CiLock } from "react-icons/ci";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GoInfo } from "react-icons/go";
import { PiGreaterThan } from "react-icons/pi";

const CreditBalanceCard: React.FC = () => {
  return (
    <div className="bg-white px-6 rounded-lg w-full">
      <h2 className="text-xl font-semibold flex items-center gap-1">
        Credit balance <GoInfo fontSize={17} fontWeight={500}/>
      </h2>
      <div className="flex items-center text-green-600 justify-start gap-1">
      <CiLock/>
      <p className="text-sm">All data is encrypted</p>
      </div>
      <div className="mt-4 pt-4">
        <p className="text-gray-600 text-sm">Total (PKR):</p>
        <p className="text-3xl font-bold">Rs.0</p>
      </div>
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-medium">History</h3>
        <div className="flex justify-between text-gray-500 text-sm font-medium mt-7 border-b pb-2">
          <div className="flex gap-28">
          <span>Date</span>
          <span>Description</span>
          </div>
          <div className="flex gap-28">
          <span>Amount</span>
          <span>Status</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 text-gray-500">
          <div className="flex items-center justify-center">
            <CiFolderOn fontSize={70} />
          </div>
          <p className="mt-2">You do not have any activities</p>
        </div>
      </div>
       <div className="space-y-3 mt-5">
              <p className="font-semibold">Cannot find your credit?</p>
              <div className="flex space-x-3 text-sm">
                <button
                  className="outline outline-[1px] outline-orange-500
                hover:outline-2
                flex flex-1 items-center justify-between gap-2 px-2 py-1 rounded w-full"
                >
                  <div className="flex items-center gap-2">
                    <span>Try signing in with another account</span>
                  </div>
      
                  <div className="flex gap-1 items-center">
                    <FcGoogle fontSize={18} />
                    <FaApple fontSize={18} />
                    <FaFacebook fontSize={18} className="bg-white text-blue-500"/>
                    <FaXTwitter fontSize={18} className="text-white bg-black p-[2px] rounded-full" />
                    <PiGreaterThan />
                  </div>
                </button>
      
                <button
                  className="outline outline-[1px] outline-orange-500
                hover:outline-2 flex-1 px-2 py-1 
                rounded flex justify-between items-center"
                >
                  Self-service to find credit
                  <PiGreaterThan />
                </button>
              </div>
            </div>
    </div>
  );
};

export default CreditBalanceCard;
