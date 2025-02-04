import Image from "next/image";
import img from "@/public/Temu_logo.svg";
import Link from "next/link";
import Searchbar from "./Searchbar";
import AccountDropDown from "./AccountDropDown";
import { HiThumbUp } from "react-icons/hi";
import { TbFileStar } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import SupportDropDownButton from "./SupportDropDownButton";
import LanguageDropDownButton from "./LanguageDropDownButton";
import { LuShoppingCart } from "react-icons/lu";

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
export default function Navbar() {
  return (
    <header className="h-[65px] z-50 bg-[#6dade5] w-ful min-w-[1150px] flex py-1 px-10 items-center gap-2 relative">
      {/* HomePage Link logo */}

      <Link href="/">
        <Image height={48} width={48} className="" src={img} alt="app-logo" />
      </Link>

      {/* Links for quick top searches */}
      <div className="flex text-white gap-2 text-xs font-bold">
        {linksToShow.map((link) => (
          <Link
            key={link.title}
            href="/"
            className="hover:bg-blue-500 px-1 h-10 rounded-3xl items-center flex gap-0"
          >
              <link.icon className="h-6 w-6" />
              <p>{link.title}</p>
          </Link>
        ))}
      </div>

      {/* Category tab */}

      <div className="flex text-white gap-2 text-xs font-bold">
        <Link
          href="/"
          className="hover:bg-blue-500 px-1 h-10 rounded-3xl items-center lg:flex gap-1 hidden"
        >
          <p>New Arrival</p>
        </Link>
        <Link
          href="/"
          className="hover:bg-blue-500 px-1 h-10 rounded-3xl items-center flex gap-1"
        >
          <p>Categories</p>
          <IoIosArrowDown/>
        </Link>
      </div>

      {/* Search bar */}

      <div className="flex-grow h-10">
        <Searchbar />
      </div>

      {/* Orders and Account */}

      <div>
        <AccountDropDown />
      </div>

      {/* Support Button */}

      <div className="relative">
        <SupportDropDownButton/>
      </div>

      {/* Language Button */}

      <div>
        <LanguageDropDownButton/>
      </div>

      {/* Cart Button */}

      <Link
      href="/"
      className="h-10 w-10 text-white hover:bg-blue-500  px-1 py-2 rounded-3xl"
    >
        <LuShoppingCart size={30}/>
    </Link>
    </header>
  );
}
