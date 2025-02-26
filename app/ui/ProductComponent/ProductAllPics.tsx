// import React from "react";
// import AllPictures from "@/data/AllPictures";

// const ProductAllPics = () => {
//   return (
//     <div className="flex flex-col gap-2">
//       {AllPictures.map((image, index) => (
//         <div key={index} className="w-full">
//           <img
//             src={image}
//             alt={`Image ${index + 1}`}
//             className="w-full h-auto"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ProductAllPics;
import React, { useState } from "react";
import AllPictures from "@/data/AllPictures";
import { IoIosArrowDown } from "react-icons/io";

const ProductAllPics = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {(showAll ? AllPictures : AllPictures.slice(0, 3)).map((image, index) => (
        <div key={index} className="w-full">
          <img
            src={image}
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
