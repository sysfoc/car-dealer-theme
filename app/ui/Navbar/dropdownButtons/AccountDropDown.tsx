"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MdHistory,
  MdOutlineRateReview,
  MdOutlineSecurity,
  MdOutlineVpnKey,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline, IoWalletOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makePageInteractable,
  makePageUnInteractable,
} from "@/store/slices/pagePropertiesSlice";
import { PiUserSwitch } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { AppRootState } from "@/store";
const unknownUserImage = "/images/unknownProfile.jpg";

const linksToShow = [
  {
    title: "Your orders",
    link: "/your-orders",
    icon: BsBoxSeam,
  },
  {
    title: "Your reviews",
    link: "/your-reviews",
    icon: MdOutlineRateReview,
  },
  {
    title: "Your profile",
    link: "/account",
    icon: CgProfile,
  },
  {
    title: "Credit balance",
    link: "/credit-balance",
    icon: IoWalletOutline,
  },
  {
    title: "Followed stores",
    link: "/followed-stores",
    icon: FaStore,
  },
  {
    title: "Browsing history",
    link: "/browsing-history",
    icon: MdHistory,
  },
  {
    title: "Account security",
    link: "/account-security",
    icon: MdOutlineSecurity,
  },
  {
    title: "Permissions",
    link: "/permissions",
    icon: MdOutlineVpnKey,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: IoIosNotificationsOutline,
  },
];


const actionsToShow = [
  {
    title: "Switch accounts",
    icon: PiUserSwitch,
    link: "/",
  },
  {
    title: "Sign out",
    icon: IoLogOutOutline,
    link: "/",
  },
];

export default function AccountDropdown({isHomePage}: {isHomePage: boolean}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state:AppRootState)=>state.user)

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

  // runs everytime dropdown changes
  useEffect(() => {
    dispatch(
      isDropdownOpen ? makePageUnInteractable() : makePageInteractable()
    );
  }, [isDropdownOpen,dispatch]);

  function handleClick(): void {
    if (isTouchScreen) {
      setIsDropdownOpen((prev) => !prev);
    } else {
      // link on button click for non touch devices
      window.location.href = "/dashboard/account";
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
      {/* Dropdown Button */}
      <div className="group relative" onClick={handleClick}>
        <div
          className={` 
            ${isDropdownOpen ? "scale-100" : "scale-0"}
            ${isHomePage? "bg-blue-500": "bg-gray-100"} scale-0 absolute inset-0 rounded-full cursor-pointer
            transition-all duration-200 ease-in-out
            `}
        ></div>
        <Link
          href="/dashboard/account"
          as="account-details"
          className={`${isHomePage? "text-white": "text-gray-800"} h-10 pointer-events-none text-xs font-bold z-10 relative pl-1 pr-3 py-2 rounded-3xl items-center flex gap-1`}
        >
          <div className=" w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={
                currentUser.profilePicture
                  ? currentUser.profilePicture
                  : unknownUserImage
              }
              alt="Account picture"
              width={30}
              height={30}
              quality={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" flex flex-col 1.5xl:hidden">
            <p>Orders &</p>
            <p>Account</p>
          </div>
          <div className="hidden 1.5xl:block">
            <p>Hello, {currentUser.name ? currentUser.name : "User"}</p>
            <p className="font-bold">Orders & Account</p>
          </div>
        </Link>
      </div>

      {/* DropDown When Button is hovered over or button clicked on touch devices*/}
      <div
        className={`
                ${
                  isDropdownOpen
                    ? "opacity-100 pointer-events-auto scale-y-100 visible"
                    : "opacity-0 pointer-events-none scale-y-[.75] invisible"
                }
                absolute 
                origin-top
                right-1/2 translate-x-1/2 flex flex-col items-center transition-all duration-300 ease-out
                `}
      >
        <div className="h-3 w-9 relative overflow-hidden">
          <div className=" absolute top-[4px] left-0 right-0 border-t-[1px] border-l-[1px] rounded-tl-sm border-gray-300 -bottom-[8px] w-4 h-4 rotate-45 bg-white mx-auto pt-2"></div>
        </div>
        {/* Inside the DropdownBox */}
        <div
          className="
                w-[280px] -mt-[1px] max-h-fit h-[80vh] overflow-y-auto bg-white flex flex-col text-sm rounded-md
                custom-scrollbar-vertical border-[1px] border-gray-300 overscroll-contain
                "
        >
          {/* account links right side */}
          <div>
            {/* user info */}
            <Link href="/dashboard/account">
              <div className="flex w-full items-center h-14 px-5 my-2">
                <div className="h-9 w-9">
                  <Image
                    src={
                      currentUser.profilePicture
                        ? currentUser.profilePicture
                        : unknownUserImage
                    }
                    alt="profile picture"
                    width={40}
                    height={40}
                    quality={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="pl-3 pr-1 text-xl">
                  {currentUser?.name || "User"}
                </p>
              </div>
            </Link>
            {/* seperation */}
            <div className="border-b-[1px] border-gray-300 w-[90%] mx-auto"></div>
            {/* links section */}
            <div className="py-3 flex flex-col">
              {linksToShow.map((element) => (
                <Link
                  key={element?.title}
                  onClick={()=>setIsDropdownOpen(false)}
                  href={"/dashboard"+element?.link}
                  className="py-2 flex hover:bg-gray-200"
                >
                  <element.icon size={21} className="mx-3" />
                  <p>{element.title}</p>
                </Link>
              ))}
            </div>
            {/* seperation */}
            <div className="border-b-[1px] border-gray-300 w-[90%] mx-auto"></div>
            {/* Extra links */}
            <div className="py-3 flex flex-col">
              {actionsToShow.map((element) => (
                <Link
                  href="/"
                  key={element.title}
                  className="py-2 flex hover:bg-gray-200"
                >
                  <element.icon size={21} className="mx-3" />
                  <p>{element.title}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* products left side */}
        </div>
      </div>
    </div>
  );
}
