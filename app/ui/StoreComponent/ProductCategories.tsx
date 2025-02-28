"use client"
import React from 'react'
import { FaSearch, FaStar } from "react-icons/fa";
import { reviews } from "@/data/Reviews";
import { IoIosArrowDown } from "react-icons/io";
import { storeData } from "@/data/StoreData";


export default function ProductCategories() {
  return (
    
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="text-gray-500 text-sm font-semibold flex gap-4">
      <span className="p-2 hover:bg-gray-100 rounded-full">Items</span>
      <span className="p-2 hover:bg-gray-100 rounded-full">Home decor products</span>
      <span className="p-2 hover:bg-gray-100 rounded-full">Interior Accessories</span>
      <div className="flex items-center gap-[1px] p-2 rounded-full hover:bg-gray-100 group">
      <span>More sections</span>
      <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180"/>
      </div>
      <div className="flex gap-[1px] p-2 rounded-full hover:bg-gray-100">
      <span>reviews</span>
      <span className="flex items-center">({reviews[1].rating} <FaStar fontSize={12}/>)</span>
      </div>
        </div>
      <div className="flex items-center justify-between border border-gray-400 rounded-full px-2 min-w-[330px] py-1">
        <input
          type="text"
          placeholder={`search all ${storeData[0].remainingItems} items`}
          className="outline-none border-none bg-transparent px-2"
        />
        <div className="rounded-full bg-gray-200 px-5 py-2">
        <FaSearch fontSize={15} className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}
