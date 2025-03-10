"use client";
import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LuSquarePercent } from "react-icons/lu";
import { PiGreaterThan } from "react-icons/pi";

const CouponsPage = () => {
  const [couponCode, setCouponCode] = useState("");
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("unused");

  const tabContent = {
    unused: "You do not have any coupons or offers available",
    used: "You do not have any used coupons or offers. Only coupons that were used in the last 3 months are shown on this list.",
    expired:
      "You do not have any expired coupons or offers. Only coupons that were expired within 3 months are shown on this list.",
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex border-b pb-2 space-x-4">
        {(["unused", "used", "expired"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "unused" && (
        <div className="space-y-4">
          <div className="flex space-x-2 w-fit">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border outline-none hover:border-black px-4 py-2 flex-1 rounded text-sm font-semibold w-[350px]"
            />
            <button className="bg-white text-black outline outline-[1px] hover:outline-2 hover:outline-black outline-gray-700 rounded-full px-4 py-2">
              Apply
            </button>
          </div>

          <div className="flex gap-3 text-sm">
            <button className="border w-full flex justify-between items-center text-start px-3 py-1 rounded">
              Seller exclusive coupon for specific item
              <PiGreaterThan />
            </button>
            <button className="border w-full flex justify-between items-center text-start px-3 py-1 rounded">
              Temu exclusive coupon for specific item
              <PiGreaterThan />
            </button>
          </div>
        </div>
      )}

      <div className="text-center py-10 border rounded">
        <div className="text-6xl w-full flex justify-center">
          <LuSquarePercent fontSize={80} className="text-gray-400" />
        </div>
        <p className="font-semibold mt-2">{tabContent[activeTab]}</p>
      </div>
      <hr />

      <div className="space-y-3">
        <p className="font-semibold">Cannot find your coupon(s)?</p>
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
            Self-service to find coupon(s)
            <PiGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
