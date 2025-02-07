"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pageProperties";
import { IoMdArrowDropup } from "react-icons/io";

const linksToShow = [
  {
    title: "",
    link: "",
  },
];
const LanguageDropDownButton = () => {
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onMouseEnter={() => {
        setIsHoveredOver(true);
        dispatch(makePageUnInteractable());
      }}
      onMouseLeave={() => {
        setIsHoveredOver(false);
        dispatch(makePageInteractable());
      }}
      className="relative"
    >
      <div className="group relative">
        <div
          className=" group-hover:scale-100
            bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full
              transition-all duration-200 ease-in-out
              "
        ></div>
        <Link
          as="language"
          href="/"
          className="text-white h-10 relative z-10 text-xs font-bold px-1 py-2 rounded-3xl items-center flex gap-1"
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

      {/* DropDown When Link is hovered over */}
      {isHoveredOver && (
        <div className="absolute  right-1/2 translate-x-1/2 flex flex-col items-center">
          <div className="h-3 w-9 overflow-hidden relative ">
            <IoMdArrowDropup
              className="text-white -top-4 absolute left-1/2 -translate-x-1/2  h-[45px] w-[45px]"
              size={45}
            />
          </div>
          <div className="w-[280px] bg-white py-4 flex flex-col text-sm rounded-md">
            {linksToShow.map((element) => (
              <Link
                className="px-8 py-3 w-full hover:bg-gray-200"
                key={element.title}
                href={element.link}
              >
                {element.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropDownButton;
