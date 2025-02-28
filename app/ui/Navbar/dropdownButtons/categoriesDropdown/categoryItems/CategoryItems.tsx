import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { categoriesTypes } from "@/data/categories";

const CategoryItems: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  const categoryKey = selectedCategory as keyof typeof categoriesTypes;
  return (
    <div className="px-4 w-[610px] h-full overflow-y-auto custom-scrollbar-vertical overscroll-contain">
      {/* Title of Selected Category */}
      {!(selectedCategory === "Featured") && (
        <div className="flex items-center">
          <p className="font-semibold text-lg">All {selectedCategory}</p>
          <IoIosArrowUp size={20} className="rotate-90" />
        </div>
      )}
      {/* Selected Category Types */}
      <div className="grid grid-cols-5 gap-3 pt-3">
        {categoriesTypes[categoryKey]?.map((type) => (
          <Link
            href={`/categories/${encodeURIComponent(
              selectedCategory
            )}/${encodeURIComponent(type.title.split(' ').join('_'))}`} // I'm changing spaces with underscores for cleaner URLs. 
            key={type.title}
            className="flex flex-col items-center text-center text-xs gap-1  mb-3"
          >
            <div className="w-24 h-24">
              <Image
                quality={50}
                alt={type.title}
                src="/images/productPicture.jpg"
                width={20}
                height={20}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-20">
              <p>{type.title}</p>
            </div>
          </Link>
        )) || <p>No Category Found.</p>}
      </div>
    </div>
  );
};

export default CategoryItems;
