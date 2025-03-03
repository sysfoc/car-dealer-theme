import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TbMathGreater, TbMinusVertical } from "react-icons/tb";

const ProductSpecs = () => {
  const [expanded, setExpanded] = useState(false);
  const [saved, isSaved] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between py-5">
        <div className="text-2xl font-semibold">Product details</div>
        <div className="flex gap-2 items-center">
          <span
            className="flex items-center gap-1 text-xs font-semibold hover:underline cursor-pointer"
            onClick={() => isSaved((previous) => !previous)}
          >
            {saved ? (
                <>
              <FaHeart fontSize={16} className="text-black" />
              <span>saved</span>
                </>
            ) : (
                <>
              <FaRegHeart fontSize={16} className="text-black" />
              <span>save</span>
                </>
            )}
            
          </span>
          <TbMinusVertical fontSize={18} className="text-gray-400" />
          <span className="flex items-center text-xs font-semibold hover:underline cursor-pointer">
            Report this Item
            <TbMathGreater fontSize={12} className="mt-[2px]" />
          </span>
        </div>
      </div>
      <div className="text-xs text-gray-600 space-y-2">
        <p>Item ID: LB09234</p>
        <p>
          Made from high-quality full-grain leather for durability and a premium
          feel.
        </p>
        <p>
          Adjustable length with multiple holes to ensure a comfortable fit for
          all waist sizes.
        </p>
        <p>Width: 3.5cm/1.38in, designed for both casual and formal wear.</p>
        <p>Composition: 100% Rexine</p>
      </div>

      {expanded && (
        <div className="mt-2 text-gray-600 text-xs space-y-2">
          <p>Material: Polyamide</p>
          <p>Composition: 100% Genuine Leather</p>
          <p>Material: Premium Cowhide Leather with reinforced stitching.</p>
          <p>
            Buckle Type: Heavy-duty metal buckle with a scratch-resistant
            finish.
          </p>
          <p>Type: Men's Leather Belt</p>
          <p>
            Color Variants: Available in black, brown, and tan for versatile
            styling.
          </p>
          <p>Item ID: LB09234</p>
          <p>
            Origin: Handmade in Italy using traditional craftsmanship
            techniques.
          </p>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-start mt-2 text-xs hover:underline text-black"
      >
        {expanded ? "See Less" : "See More"}
        <IoIosArrowDown
          fontSize={13}
          className={` relative top-[1px] transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ProductSpecs;
