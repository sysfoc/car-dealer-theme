"use client"
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import LanguageDropDownButton from "./dropdownButtons/LanguageDropDownButton";
import SupportDropDownButton from "./dropdownButtons/SupportDropDownButton";
import AccountDropdown from "./dropdownButtons/AccountDropDown";
import CategoryDropDown from "./dropdownButtons/categoriesDropdown/CategoryDropDown";
import Searchbar from "./Searchbar";
import Image from "next/image";
import img from "@/public/Temu_logo.svg";
import { HiThumbUp } from "react-icons/hi";
import { TbFileStar } from "react-icons/tb";
import { useSelector } from "react-redux";
import { AppRootState } from "@/store";
import SwitchAccountModal from "../Modal/switchAccountModal";
import { useState } from "react";

const linksToShow = [
  {
    icon: HiThumbUp,
    title: "Best Sellers",
  },
  {
    icon: TbFileStar,
    title: "5-Star Rated",
  },
];


const Navbar = ({ isHomePage }: { isHomePage: boolean }) => {
  const Interactable = useSelector(
    (state: AppRootState) => state.pageProperties.pageInteractable
  );
  const [showSwitchAccountModal, setShowSwitchAccountModal] = useState<boolean>(false);
  return (
    <div>
      {/* Page Overlay */}
      {showSwitchAccountModal && (
                    <SwitchAccountModal
                      onClose={() => setShowSwitchAccountModal(false)}
                    />
                  )}
      <div
        className={`pointer-events-none ${
          Interactable
            ? "bg-opacity-0 bg-transparent"
            : "bg-opacity-60 bg-black"
        } transition-all duration-300 w-screen h-[calc(100vh+65px)] fixed pointer-events-none top-0 left-0 z-0`}
      ></div>
      {/* Navbar */}
      <header
        className={`h-[65px] border-b-[1px] border-gray-300 relative z-40 ${
          isHomePage ? "bg-[#6dade5]/90 backdrop-blur-md" : "bg-white/100"
        } w-full flex ${Interactable ? "z-30" : "z-50"}`}
      >
        <div className="flex max-w-[1640px] mx-auto w-full py-1 px-10 items-center gap-2 relative">
          {/* HomePage Link logo */}

          <Link href="/">
            <Image
              height={48}
              width={48}
              className=""
              src={img}
              alt="app-logo"
            />
          </Link>

          {/* Links for quick top searches */}
          <nav
            className={`
          flex ${
            isHomePage ? "text-white" : "text-gray-800"
          } gap-2 text-xs font-bold
          `}
          >
            {linksToShow.map((link) => (
              <div key={link.title} className="group relative">
                <div
                  className={`group-hover:scale-100
            ${isHomePage? "bg-blue-500": "bg-gray-100"} scale-0 absolute inset-0 z-0 rounded-full
              transition-all duration-200 ease-in-out
              `}
                ></div>
                <Link
                  href="/"
                  className="px-1 h-10 rounded-3xl items-center flex relative z-10"
                >
                  <link.icon className="h-5 w-5" />
                  <p>{link.title}</p>
                </Link>
              </div>
            ))}
          </nav>

          <div className={`flex ${isHomePage? "text-white": "text-gray-800"} gap-2 text-xs font-bold`}>
            {/* New Arrival Link */}

            <div className="group relative">
              <div
                className={`group-hover:scale-100
            ${isHomePage? "bg-blue-500": "bg-gray-100"} scale-0 absolute inset-0 z-0 rounded-full
            transition-all duration-200 ease-in-out
              `}
              ></div>
              <Link
                href="/"
                className="px-1 h-10 rounded-3xl items-center flex relative z-10"
              >
                <p>New Arrival</p>
              </Link>
            </div>

            {/* Category Link */}

            <div>
              <CategoryDropDown isHomePage={isHomePage}/>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-grow h-10">
            <Searchbar isHomePage={isHomePage}/>
          </div>

          {/* Orders and Account */}
          <div>
            <AccountDropdown setShowSwitchAccountModal={setShowSwitchAccountModal} isHomePage={isHomePage}/>
          </div>

          {/* Support Button */}
          <div className="relative">
            <SupportDropDownButton isHomePage={isHomePage}/>
          </div>

          {/* Language Button */}

          <div>
            <LanguageDropDownButton isHomePage={isHomePage}/>
          </div>

          {/* Cart Button */}
          <div className="group relative h-10 w-10 flex items-center justify-center">
            <div
              className={` group-hover:scale-100
          ${
            isHomePage ? "bg-blue-500" : "bg-gray-100"
          } scale-0 absolute inset-0 z-0 rounded-full
          transition-all duration-200 ease-in-out
          `}
            ></div>
            <Link
              href="/cart"
              className={`relative z-10 ${
                isHomePage ? "text-white" : "text-gray-800"
              }`}
            >
              <LuShoppingCart size={25} />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
