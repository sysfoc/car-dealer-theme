"use client";
import Link from "next/link";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pagePropertiesSlice";
import { categoriesToShow } from "@/data/categories";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import CategoryItems from "@/app/ui/Navbar/dropdownButtons/categoriesDropdown/categoryItems/CategoryItems";

const SupportDropDownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  // only runs when page loads for the first time
  useEffect(() => {
    // checking the device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;
    setIsTouchScreen(isTouch);
  }, []);
  useEffect(() => {
    // for checking if clicked outside of the page in touch devices

    if (isTouchScreen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event?.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isTouchScreen]);
  useEffect(() => {
    dispatch(
      isDropdownOpen ? makePageUnInteractable() : makePageInteractable()
    );
  }, [dispatch, isDropdownOpen]);

  function handleClick(): void {
    if (isTouchScreen) {
      setIsDropdownOpen((prev) => !prev);
    } else {
      // link on button click for non touch devices
      window.location.href = "/categories";
    }
  }
  function handleCategoryClick(category: string): void {
    if (isTouchScreen) {
      setSelectedCategory(category);
    } else {
      window.location.href = "/categories/" + category;
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!isTouchScreen) {
          setIsDropdownOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchScreen) {
          setIsDropdownOpen(false);
        }
      }}
      onFocus={() => {
        setIsDropdownOpen(true);
      }}
      onBlur={() => {
        setIsDropdownOpen(false);
      }}
      className="relative z-20"
    >
      {/* Button for dropdown */}
      <div className="group relative cursor-pointer" onClick={handleClick}>
        {/* link background */}
        <div
          className={` 
              ${isDropdownOpen ? "scale-100" : "scale-0"}
              bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full
              transition-all duration-200 ease-in-out
              `}
        ></div>
        <Link
          as="SupportButton"
          // Change the link here
          href="/Support"
          className="text-white h-10 text-xs pointer-events-none relative z-10 font-bold px-1 py-2 rounded-3xl items-center flex gap-1"
        >
          Categories
          <IoIosArrowUp
            size={16}
            className={`${
              isDropdownOpen ? "rotate-180" : ""
            } transition-all duration-300`}
          />
        </Link>
      </div>

      {/* DropDown When Link is hovered over or button clicked on touch devices*/}
      <div
        className={`
          ${isDropdownOpen ? "opacity-100" : "opacity-0"}
          ${isDropdownOpen ? "pointer-events-auto" : "pointer-events-none"}
          ${isDropdownOpen ? "scale-y-100" : "scale-y-[.75]"}
          absolute 
          origin-top translate-x-2/3
          right-1/2  flex flex-col items-center transition-all duration-300 ease-out text-black
          `}
      >
        <div className="h-3 w-9 relative z-30 -ml-72  overflow-hidden">
          <div className=" absolute left-0 right-0 border-t-[1px] border-l-[1px] rounded-tl-sm border-gray-300 -bottom-[8px] w-4 h-4 rotate-45 bg-white mx-auto"></div>
        </div>
        <div
          className="
          w-[850px] -mt-[1px] max-h-fit h-[70vh] overflow-y-auto bg-white flex flex-col rounded-md
          custom-scrollbar-vertical border-[1px] border-gray-300 font-normal text-xs
          "
        >
          {/* Content Inside the dropdown Box */}
          <div className="flex h-full pt-2">
            {/* CategoryList :Left side */}
            <div className="w-60 flex flex-col py-2 overflow-y-auto custom-scrollbar-vertical h-full">
              {categoriesToShow.map((ele) => (
                <div
                  key={ele.title}
                  onMouseEnter={() => {
                    if (!isTouchScreen) setSelectedCategory(ele.title);
                  }}
                  className={`${
                    selectedCategory === ele.title ? "bg-gray-300" : ""
                  } cursor-pointer`}
                  onClick={() => {
                    handleCategoryClick(ele.title);
                  }}
                  onFocus={() => {
                    setSelectedCategory(ele.title);
                  }}
                >
                  <Link
                    href={ele.title}
                    className={`px-4 pointer-events-none text-gray-900 py-2 flex justify-between items-center`}
                  >
                    {ele.title}
                    <IoIosArrowUp
                      size={10}
                      className="rotate-90 text-gray-500"
                    />
                  </Link>
                </div>
              ))}
            </div>
            {/* Separater */}
            <div className="border-r-[1px] border-gray-300 h-[100%] px-[2px] my-auto"></div>
            {/* Selected Category Items : Right side */}
            <CategoryItems selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDropDownButton;
