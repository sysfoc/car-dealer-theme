import React from "react";
import { FaStore } from "react-icons/fa6";

export default function Review() {
  return (
    <div className="p-40">
      <div className="flex flex-col font-sans items-center justify-center gap-1 w-[550px]">
      <FaStore fontSize={70} className="text-gray-400"/>
        <span className="block">You don't have any followed stores</span>
        <span className="text-gray-500">
        You get better recommendations as you follow more stores.
        </span>
      </div>
    </div>
  );
}
