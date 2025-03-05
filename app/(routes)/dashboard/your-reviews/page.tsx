import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Review() {
  return (
    <div className="p-40">
      <div className="flex flex-col font-sans items-center justify-center gap-1 w-[550px]">
        <IoDocumentTextOutline fontSize={70} className="text-gray-400" />
        <span className="block">You do not have any reviews</span>
        <span className="text-gray-500">
          You have no completed reviews or your reviews have been deleted.
        </span>
      </div>
    </div>
  );
}
