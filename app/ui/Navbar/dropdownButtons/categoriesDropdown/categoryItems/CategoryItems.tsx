"use client"
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";
import { setCategoryTypes } from "@/store/slices/categoryTypesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "@/store";

const CategoryItems: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategoryTypes = async () => {
      try {
        const res = await fetch("/api/categories/categoriestypes"); 
        const data = await res.json();
        if (Array.isArray(data.data)) {
          dispatch(setCategoryTypes(data.data));
        } else {
          console.warn("Unexpected data format:", data.data);
        }
      } catch (error) {
        console.error("Failed to fetch category types:", error);
      }
    };
    fetchCategoryTypes();
  }, [dispatch]);

  const categoriesTypes = useSelector((state: AppRootState) => state.categoryTypes.categoryTypes);
  let filteredCategoryTypes: typeof categoriesTypes = [];
  filteredCategoryTypes = categoriesTypes.filter((item) => {
    const isMatch = item.categoryType?.toLowerCase() === selectedCategory?.toLowerCase();
    return isMatch;
  });

  return (
    <div className="px-4 w-[610px] h-full overflow-y-auto custom-scrollbar-vertical overscroll-contain">
      {!(selectedCategory === "Featured") && (
        <div className="flex items-center">
          <p className="font-semibold text-lg">All {selectedCategory}</p>
          <IoIosArrowUp size={20} className="rotate-90" />
        </div>
      )}
      <div className="grid grid-cols-5 gap-3 pt-3">
      {filteredCategoryTypes?.length > 0 ? (
  filteredCategoryTypes.map((type) => (
    <Link
      href={`/categories/${encodeURIComponent(selectedCategory)}/${encodeURIComponent(type.title.split(' ').join('_'))}`}
      key={type.title}
      className="flex flex-col items-center text-center text-xs gap-1 mb-3"
    >
      <div className="w-24 h-24">
        <Image
          quality={50}
          alt={type.title}
          src={type.image || "/images/productPicture.jpg"}
          width={20}
          height={20}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>
      <div className="w-20">
        <p>{type.title}</p>
      </div>
    </Link>
  ))
) : (
  <p>No Category Found.</p>
)}
      </div>
    </div>
  );
};

export default CategoryItems;
