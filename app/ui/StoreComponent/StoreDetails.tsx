"use client"
import { useState } from "react";
import Image from "next/image";
import { storeData } from "@/data/StoreData";
import { IoBagCheck } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

function StoreDetails() {
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-start pb-10 border-b border-gray-300">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={storeData[0].image}
              width={115}
              height={115}
              alt="store-Picture"
              className="rounded-full min-w-[115px] min-h-[115px]"
            />
          </div>
          <div className="">
            <div className="text-2xl font-semibold">
              <span>{storeData[0].name}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoBagCheck className="text-green-700" />
              <span className="text-sm font-semibold">
                Seller established 2 years ago
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-5">
          <div className="flex gap-6 items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-black font-semibold">
                {storeData[0].followers}
              </span>
              <span className="text-gray-400 text-xs">Followers</span>
            </div>
              <RxDividerVertical className="text-gray-400" fontSize={30} /> 
            <div className="flex flex-col gap-1 items-center">
              <span className="text-black font-semibold">
                {storeData[0].sold}
              </span>
              <span className="text-gray-400 text-xs">sold</span>
            </div>
              <RxDividerVertical className="text-gray-400" fontSize={30} />
            <div className="flex flex-col gap-1 items-center">
                <span className="text-black font-semibold">{storeData[0].remainingItems}</span>
                <span className="text-gray-400 text-xs">Items</span>
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsFollowed((previous) => !previous)}
              className="flex text-black items-center justify-center rounded-3xl py-3 
              hover:outline hover:outline-2 hover:outline-black hover:opacity-80 
              gap-[1px] border-[1px] border-black w-[350px]"
            >
              {isFollowed ? (
                <span className="text-sm">Followed</span>
              ) : (
                <div className="flex items-center gap-1">
                  <MdOutlineStorefront fontSize={15} />
                  <span className="text-sm">Follow</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
  )
}

export default StoreDetails