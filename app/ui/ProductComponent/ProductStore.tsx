import Image from "next/image";
import React, { useState } from "react";
import { storeData } from "@/data/StoreData";
import { FaStar } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

function ProductStore() {
  const [isFollowed, setIsFollowed] = useState<boolean>(true);

  return (
    <div className="!w-auto">
      <div className="mt-8 p-2 text-center">
        <div className="flex justify-start items-center gap-5">
          <div onClick={() => window.open(`/store`, "_blank")}>
            <Image
              src={storeData[0].image}
              width={115}
              height={115}
              alt="store-Picture"
              className="rounded-full min-w-[115px] min-h-[115px] cursor-pointer"
            />
          </div>

          <div className="flex flex-col items-start gap-1">
            <div className="text-2xl font-semibold cursor-pointer">
              <span onClick={() => window.open(`/store`, "_blank")}>
                {storeData[0].name}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex gap-1">
                <span className="text-black font-semibold">
                  {storeData[0].followers}
                </span>
                <span className="text-gray-400">Followers</span>
                <RxDividerVertical className="text-gray-400" fontSize={24} />
              </div>
              <div className="flex gap-1">
                <span className="text-black font-semibold">
                  {storeData[0].sold}
                </span>
                <span className="text-gray-400">sold</span>
                <RxDividerVertical className="text-gray-400" fontSize={24} />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <span>{storeData[0].rating}</span>
                </div>
                <FaStar />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFollowed((previous) => !previous)}
                className="flex text-black items-center rounded-3xl px-12 py-2 
              hover:outline hover:outline-2 hover:outline-black hover:opacity-80 
              gap-[1px] border-[1px] border-black w-[150px]"
              >
                {isFollowed ? (
                  <div className="flex items-center gap-1">
                    <MdOutlineStorefront fontSize={15} />
                    <span className="text-sm">Follow</span>
                  </div>
                ) : (
                  <span className="text-sm">Followed</span>
                )}
              </button>
              <button
                className="text-black whitespace-nowrap text-sm flex
               items-center gap-2 rounded-3xl px-12 py-2 border-[1px] border-black
                hover:outline hover:outline-2 hover:outline-black
                hover:opacity-80"
              >
                <span>Shop all items</span>
                <span>({storeData[0].remainingItems})</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <IoBagCheck className="text-green-700" />
          <span className="text-sm font-semibold">
            Seller established 2 years ago
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductStore;
