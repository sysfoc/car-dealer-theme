"use client";
import { IoCloseOutline } from "react-icons/io5";
import { RiMailSettingsLine } from "react-icons/ri";
import MessageCardContent from "./MessageCardContent";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

type currentVisibility = "messages" | "review" | "none";
type MessageSection = "home" | "promotion" | "order";

interface MessageCardProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<currentVisibility>>;
}

const MessagesCard: React.FC<MessageCardProps> = ({ setCurrentTab }) => {
  const [currentSection, setCurrentSection] = useState<MessageSection>("home");
  return (
    <div className="absolute w-[375px] h-[90vh] overflow-auto z-1 bg-white box-shadow rounded-md right-14 bottom-0">
      {/* Header */}
      <div className="h-[51px] px-3 relative flex justify-between items-center">
        <button
          onClick={() => setCurrentSection("home")}
          className={`${
            currentSection === "home" ? "hidden" : "flex mr-11"
          } rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center`}
        >
          <IoIosArrowBack size={25} />
        </button>
        <p className={`${currentSection==='home'?'ml-32':'ml-0'} text-base select-none font-semibold`}>
          {currentSection === "home"
            ? "Messages"
            : currentSection === "promotion"
            ? "Promotion"
            : "Orders & Shipping"}
        </p>
        <div className="flex pr-3 gap-1 items-center">
          <button className="rounded-full p-[5px] hover:bg-gray-100 w-8 h-8 flex items-center justify-center">
            <RiMailSettingsLine size={30} />
          </button>
          <button
            onClick={() => setCurrentTab("none")}
            className="rounded-full p-0 hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
          >
            <IoCloseOutline size={30} />
          </button>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-gray-300"></div>
      {/* Content Inside the Card */}
      <MessageCardContent
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default MessagesCard;
