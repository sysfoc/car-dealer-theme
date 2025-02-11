"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuFilePenLine, LuMessageSquareMore } from "react-icons/lu";

const NavigationMenu = () => {
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopBtn(true);
      }
      else {
        setShowScrollToTopBtn(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [showScrollToTopBtn]);

  return (
    <div className="z-50 box-shadow mr-1 overflow-hidden w-11 max-h-44 h-fit items-center bg-white rounded-md fixed right-0 bottom-5 shadow-lg p-1 flex flex-col py-1">
      <Link href="/" className="hover:bg-gray-300 px-2 py-3 rounded-md">
        <LuMessageSquareMore size={25} />
      </Link>

      <Link href="/" className={`${showScrollToTopBtn? 'mb-[60px]': 'mb-0'} transition-all duration-300 ease-in-out hover:bg-gray-300 px-2 py-3 rounded-md`}>
        <LuFilePenLine size={25} />
      </Link>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          showScrollToTopBtn ? "opacity-100 -translate-y-[2px]" : "opacity-100 translate-y-20"
        } absolute bottom-0 transition-all duration-300 ease-in-out hover:bg-gray-300 px-2 py-3 rounded-md`}
      >
        <IoIosArrowUp size={25} className="mx-auto" />
        <p className="text-xs font-semibold">Top</p>
      </button>
    </div>
  );
};

export default NavigationMenu;
