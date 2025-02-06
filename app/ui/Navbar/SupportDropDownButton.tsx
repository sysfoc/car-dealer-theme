"use client";
import { TbMessageCircleQuestion } from "react-icons/tb";
import Link from "next/link";
import { IoMdArrowDropup } from "react-icons/io";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pageProperties";

import { useState } from "react";
import { useDispatch } from "react-redux";

const linksToShow = [
  {
    title: "Support Center",
    link: "/",
  },
  {
    title: "Safety Center",
    link: "/",
  },
  {
    title: "Chat with Temu",
    link: "/",
  },
  {
    title: "Temu Purchase Protection",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/",
  },
  {
    title: "Terms of use",
    link: "/",
  },
];

const SupportDropDownButton = () => {
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
    >
      <Link
        href="/"
        className={`text-white h-10 text-xs font-bold hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1`}
      >
        <TbMessageCircleQuestion size={30} />
        Support
      </Link>
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

export default SupportDropDownButton;
