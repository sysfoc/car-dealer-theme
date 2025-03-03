import React, { useState } from "react";
import AllPictures from "@/data/AllPictures";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const ProductAllPics = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {(showAll ? AllPictures : AllPictures.slice(0, 3)).map((image, index) => (
        <div key={index} className="w-full">
          <Image
            src={image}
            width={100}
            height={100}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
      {!showAll && (
        <button 
          className="m-5 text-black text-sm hover:underline flex items-center gap-[1px] justify-center "
          onClick={() => setShowAll(true)}
        >
          <span>See more</span>
          <IoIosArrowDown />
        </button>
      )}
    </div>
  );
};

export default ProductAllPics;
