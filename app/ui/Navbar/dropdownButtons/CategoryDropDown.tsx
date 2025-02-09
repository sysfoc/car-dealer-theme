"use client";
import Link from "next/link";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pageProperties";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";



const SupportDropDownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  // only runs when page loads for the first time
  useEffect(() => {
    // checking the device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1;
    setIsTouchScreen(isTouch);

    dispatch(
      isDropdownOpen ? makePageUnInteractable() : makePageInteractable()
    );

    // for checking if clicked outside of the page in touch devices

    if (isTouch) {
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
  }, []);

  // runs everytime dropdown changes
  useEffect(() => {
    dispatch(
      isDropdownOpen ? makePageUnInteractable() : makePageInteractable()
    );
  }, [isDropdownOpen]);

  function handleClick(): void {
    if (isTouchScreen) {
      setIsDropdownOpen((prev) => !prev);
    } else {
      // link on button click for non touch devices
      window.location.href = "/Support";
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
          <IoIosArrowUp size={16} className={`${isDropdownOpen? 'rotate-180':''} transition-all duration-300`} />
        </Link>
      </div>

      {/* DropDown When Link is hovered over or button clicked on touch devices*/}
      <div
        className={`
          ${isDropdownOpen ? "opacity-100" : "opacity-0"}
          ${isDropdownOpen ? "pointer-events-auto" : "pointer-events-none"}
          ${isDropdownOpen ? "scale-y-100" : "scale-y-[.75]"}
          absolute 
          origin-top
          right-1/2 translate-x-1/2 flex flex-col items-center transition-all duration-300 ease-out
          `}
      >
        <div className="h-3 w-9 relative z-30  overflow-hidden">
          <div className=" absolute left-0 right-0 border-t-[1px] border-l-[1px] rounded-tl-sm border-gray-300 -bottom-[8px] w-4 h-4 rotate-45 bg-white mx-auto pt-2"></div>
        </div>
        <div
          className="
          w-[850px] translate-x-44 -mt-[1px] max-h-fit h-[70vh] overflow-y-auto bg-white py-4 flex flex-col text-sm rounded-md
          custom-scrollbar-vertical border-[1px] border-gray-300
          "
        >
          {/* Content Inside the dropdown Box */}
          
        </div>
      </div>
    </div>
  );
};

export default SupportDropDownButton;
