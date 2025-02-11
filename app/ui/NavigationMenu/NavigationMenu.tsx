"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuFilePenLine, LuMessageSquareMore } from "react-icons/lu";
import MessagesCard from "./MessagesCard";

const NavigationMenu = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopBtn(true);
      } else {
        setShowScrollToTopBtn(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMessageClick = () =>{
    setShowReview(false);
    setShowMessages(state=> !state);
  }
  const handleReviewClick = () =>{
    setShowMessages(false);
    setShowReview(state=>!state);
  }
  console.log(Math.random());

  useEffect(()=>{
    function handleClick (event: MouseEvent){
      if(ref.current && !ref.current.contains(event.target as Node) ) {
        setShowMessages(false);
        setShowReview(false);
      }
    };

    document.addEventListener('click', handleClick);
    return ()=>document.removeEventListener('click', handleClick);
  },[setShowMessages, setShowReview])

  return (
    <div ref={ref} className="z-50 box-shadow mr-1 w-11 max-h-44 h-fit items-center bg-white rounded-md fixed right-0 bottom-5 shadow-lg p-1 flex flex-col">
      {/* Messages */}
      <button onClick={handleMessageClick} className="hover:bg-gray-200 px-2 py-3 rounded-md">
        <LuMessageSquareMore size={25} />
      </button>

      {/* Message Card */}
      {showMessages && <MessagesCard setShowMessages={setShowMessages}/>}


      {/* Review */}
      <button onClick={handleReviewClick}
        className={`${
          showScrollToTopBtn ? "mb-[60px]" : "mb-0"
        } transition-all duration-300 ease-in-out hover:bg-gray-200 px-2 py-3 rounded-md`}
      >
        <LuFilePenLine size={25} />
      </button>

      {/* Go to the top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          showScrollToTopBtn
            ? "opacity-100 -translate-y-[2px]"
            : "opacity-100 translate-y-20"
        } absolute bottom-0 transition-all duration-300 ease-in-out hover:bg-gray-200 px-2 py-3 rounded-md`}
      >
        <IoIosArrowUp size={25} className="mx-auto" />
        <p className="text-xs font-semibold">Top</p>
      </button>
    </div>
  );
};

export default NavigationMenu;
