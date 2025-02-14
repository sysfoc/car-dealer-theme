import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdGppGood } from "react-icons/md";

const MessagesPromotionCard = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const popUpDiv = useRef<HTMLDivElement>(null);
  const popUpBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickMessagesPromotionCard = (event: MouseEvent) => {
      if(popUpDiv.current && !popUpDiv.current.contains(event.target as Node) && !popUpBtn.current?.contains(event.target as Node))
      {
        setShowPopUp(false);
      }
    };

    document.addEventListener("click", handleClickMessagesPromotionCard);
    return () => document.removeEventListener("click", handleClickMessagesPromotionCard)
  }, []);

  return (
    <div className="w-full h-[calc(90vh-52px)]">
      <button
        ref={popUpBtn}
        onClick={()=>setShowPopUp(true)}
        className="flex h-[47px] items-center px-3 py-1 hover:bg-[rgb(39,146,32)] bg-[rgb(9,125,0)] text-white"
      >
        <div className="pr-1">
          <MdGppGood className="text-xl" />
        </div>
        <p className="text-[11px] text-left pr-2 leading-none font-medium">
          Be wary of scams and messages imitating Temu. We don&#39;t ask customers
          for extra fees via SMS or email.
        </p>
      </button>
      {/* Security Details Pop Up */}
      <div className={`${showPopUp? 'flex': 'hidden'} fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 items-center`}>
        <div ref={popUpDiv} className="relative h-[391px] w-[494px] text-xs font-medium text-center px-10 py-9 bg-white box-shadow mx-auto flex justify-between flex-col gap-3">
          {/* Closing Button */}
          <button onClick={()=>setShowPopUp(false)} className="absolute right-3 top-3 hover:bg-gray-200 rounded-full p-1">
            <IoCloseOutline size={30} />
          </button>
          {/* Pop Up Content */}
          <div className=" flex flex-col items-center">
            <div>
              <MdGppGood className="w-14 h-14 text-[rgb(9,125,0)]" />
            </div>
            <p className="font-semibold text-base">Security Reminder</p>
          </div>
          <p className=" text-center">
            Please be wary of scam campaigns and messages imitating Temu, such
            as paying a shipping fee to get a free gift. Remember that Temu does
            not charge customers extra fees via text or email. Here are some
            common fraud cases for reference.
          </p>
          <p>If you need further assistance, please contact us.</p>
          <button onClick={()=>setShowPopUp(false)} className="bg-orange-500 h-10 w-60 mx-auto rounded-full font-semibold text-white scale-100 hover:bg-orange-400 hover:scale-105 transition-all duration-200">
            OK
          </button>
          <Link href="/" className="flex items-center justify-center">
            If you come across anything suspicious, please report it in time{" "}
            <IoIosArrowForward />
          </Link>
        </div>
      </div>

      {/* No Notifications */}

      <div className="text-gray-400 w-full h-[calc(100%-47px)] flex flex-col items-center justify-center">
        <IoIosNotificationsOutline size={100} />
        <p>No notifications</p>
      </div>
    </div>
  );
};

export default MessagesPromotionCard;
