"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuFilePenLine, LuMessageSquareMore } from "react-icons/lu";
import MessagesCard from "./MessagesCard/MessagesCard";
import ReviewCard from "./ReviewCard/ReviewCard";

type currentVisibility = "messages" | "review" | "none";

const NavigationMenu = () => {
  const [currentTab, setCurrentTab] = useState<currentVisibility>("none");
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopBtn(true);
      } else {
        setShowScrollToTopBtn(false);
      }
    };
    function handleNavigationMenuOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCurrentTab("none");
      }
    }
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleNavigationMenuOutsideClick);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleNavigationMenuOutsideClick);
    };
  }, []);


  return (
    <div
      ref={ref}
      className={`z-30 box-shadow mr-1 w-11 max-h-44 h-fit items-center bg-white rounded-md fixed right-0 bottom-5 shadow-lg p-1 flex flex-col`}
    >
      {/* Messages */}
      <button
        onClick={() => {
          setCurrentTab(currentTab === "messages" ? "none" : "messages");
        }}
        className="hover:bg-gray-200 px-2 py-3 rounded-md"
      >
        <LuMessageSquareMore size={25} />
      </button>

      {/* Message Card */}
      {currentTab === "messages" && (
        <MessagesCard setCurrentTab={setCurrentTab} />
      )}

      {/* Review */}
      <button
        onClick={() => {
          setCurrentTab(currentTab === "review" ? "none" : "review");
        }}
        className={`${
          showScrollToTopBtn ? "mb-[60px]" : "mb-0"
        } transition-all duration-300 ease-in-out hover:bg-gray-200 px-2 py-3 rounded-md`}
      >
        <LuFilePenLine size={25} />
      </button>

      {/* Review Card */}
      {currentTab === "review" && <ReviewCard setCurrentTab={setCurrentTab} />}

      {/* Go to the top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          showScrollToTopBtn
            ? "opacity-100 -translate-y-[2px] pointer-events-auto"
            : "opacity-0 translate-y-20 pointer-events-none"
        } absolute bottom-0 transition-all duration-300 ease-in-out hover:bg-gray-200 px-2 py-3 rounded-md`}
      >
        <IoIosArrowUp size={25} className="mx-auto" />
        <p className="text-xs font-semibold">Top</p>
      </button>
    </div>
  );
};

export default NavigationMenu;
