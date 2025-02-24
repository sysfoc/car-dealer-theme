"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pagePropertiesSlice";

function LanguageDropDownButton() {
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
    dispatch(
      isDropdownOpen ? makePageUnInteractable() : makePageInteractable()
    );
  }, [dispatch, isDropdownOpen]);

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
      onFocus={()=>{setIsDropdownOpen(true)}}
      onBlur={()=>{setIsDropdownOpen(false)}}
      className="relative z-20"
    >
      {/* Dropdown Button */}
      <div className="group relative" onClick={handleClick}>
        <div
          className={` 
            ${isDropdownOpen ? "scale-100" : "scale-0"}
            bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full cursor-pointer
            transition-all duration-200 ease-in-out
            `}
        ></div>
        <Link
          as="language"
          href="/"
          className="text-white h-10 pointer-events-none relative z-10 text-xs font-bold px-1 py-2 rounded-3xl items-center flex gap-1"
        >
          <div className=" w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/pakistanFlag.png"
              alt="Account picture"
              width={32}
              height={32}
              quality={100}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          EN
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
          -right-20 flex flex-col items-center transition-all duration-300 ease-out
          `}
      >
        <div className="h-3 w-9 relative translate-x-8 overflow-hidden">
          <div className=" absolute left-0 right-0 border-t-[1px] border-l-[1px] rounded-tl-sm border-gray-300 -bottom-[8px] w-4 h-4 rotate-45 bg-white mx-auto pt-2"></div>
        </div>
        {/* Content Inside the dropdown Box */}
        <div
          className="
          w-[280px] -mt-[1px] max-h-fit h-[70vh] overflow-y-auto bg-white py-5 px-6 flex flex-col text-sm rounded-md
          custom-scrollbar-vertical border-[1px] border-gray-300 gap-3
          "
        >
          <p className="font-semibold text-sm">Languages</p>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="radio"
              name="radio"
              defaultChecked
              className="w-5 h-5 appearance-none border-[5px] border-black rounded-full bg-white peer-checked:border-[10px]"
            />
            <label htmlFor="radio" className="text-black cursor-pointer">
              English - EN
            </label>
          </div>
          {/* seperation */}
          <div className="border-b-[1px] border-gray-300 w-full mx-auto"></div>
          <div>
            <p className="font-semibold text-sm py-2">Currency</p>
            <p>PKR: Rs.</p>
          </div>
          {/* seperation */}
          <div className="border-b-[1px] border-gray-300 w-full mx-auto"></div>
          <div className=" leading-4 text-gray-600 font-medium">
            <div className="flex">
              <div className=" w-5 h-5 mr-2 relative rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/pakistanFlag.png"
                  alt="Account picture"
                  width={32}
                  height={32}
                  quality={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              You are shopping on Temu
            </div>
            Pakistan.
          </div>
          <Link
            href="/"
            className="w-[220px] h-fit border-2 rounded-full border-black text-center py-1 mx-auto"
          >
            Change country/region
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LanguageDropDownButton;
