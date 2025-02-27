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

const Navbar = () => {
    const Interactable = useSelector(
        (state: AppRootState) => state.pageProperties.pageInteractable
      );
  return (
    <div>
      {/* Page Overlay */}
      <div
        className={`pointer-events-none ${
          Interactable
            ? "bg-opacity-0 bg-transparent"
            : "bg-opacity-60 bg-black"
        } transition-all duration-300 w-screen h-screen fixed pointer-events-none top-0 left-0 z-0`}
      ></div>
      {/* Navbar */}
      <header
        className={`h-[65px] border-b-[1px] border-gray-300 relative z-40 bg-[#6dade5] w-full flex ${
          Interactable ? "z-30" : "z-50"
        }`}
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
            className="
          flex text-white gap-2 text-xs font-bold
          "
          >
            {linksToShow.map((link) => (
              <div key={link.title} className="group relative">
                <div
                  className=" group-hover:scale-100
            bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full
              transition-all duration-200 ease-in-out
              "
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

          <div className="flex text-white gap-2 text-xs font-bold">
            {/* New Arrival Link */}

            <div className="group relative">
              <div
                className=" group-hover:scale-100
            bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full
            transition-all duration-200 ease-in-out
              "
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
              <CategoryDropDown />
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-grow h-10">
            <Searchbar />
          </div>

          {/* Orders and Account */}
          <div>
            <AccountDropdown />
          </div>

          {/* Support Button */}
          <div className="relative">
            <SupportDropDownButton />
          </div>

          {/* Language Button */}

          <div>
            <LanguageDropDownButton />
          </div>

          {/* Cart Button */}
          <div className="group relative h-10 w-10 flex items-center justify-center">
            <div
              className=" group-hover:scale-100
          bg-blue-500 scale-0 absolute inset-0 z-0 rounded-full
          transition-all duration-200 ease-in-out
          "
            ></div>
            <Link href="/cart" className="relative z-10 text-white">
              <LuShoppingCart size={25} />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
