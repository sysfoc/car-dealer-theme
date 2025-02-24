import React from "react";
import AllPictures from "@/data/AllPictures";

const ProductAllPics = () => {
  return (
    <div className="flex flex-col gap-2">
      {AllPictures.map((image, index) => (
        <div key={index} className="w-full">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};
export default ProductAllPics;