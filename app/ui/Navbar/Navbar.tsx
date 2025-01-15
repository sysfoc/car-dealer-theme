import Image from "next/image";
import img from "@/public/Temu_logo.svg";
import Link from "next/link";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Searchbar from "./Searchbar";
import AccountDropDown from "./AccountDropDown";

const linksToShow = [
  {
    icon: ThumbUpOffAltIcon,
    title: "Best Sellers",
  },
  {
    icon: LocalActivityIcon,
    title: "5-Star Rated",
  },
  {
    icon: AcUnitIcon,
    title: "Winter Picks",
  },
];
export default function Navbar() {
  return (
    <header className="h-[65px] bg-[#6dade5] w-ful w-min-[1097px] flex p-1 items-center gap-2 relative">
      {/* HomePage Link logo */}

      <Link href="/">
        <Image height={48} width={48} className="" src={img} alt="app-logo" />
      </Link>

      {/* Links for quick top searches */}
      <div className="flex text-white gap-0 text-sm font-bold">
        {linksToShow.map((link) => (
          <Link
            key={link.title}
            href="/"
            className="hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1"
          >
            <link.icon className="h-6 w-6" />
            <p>{link.title}</p>
          </Link>
        ))}
      </div>

      {/* Category tab */}

      <div className="md:flex text-white gap-3 text-sm font-bold">
        <Link
          href="/"
          className="hover:bg-blue-500 px-1 py-2 rounded-3xl items-center lg:flex gap-1 hidden"
        >
          <p>New Arrival</p>
        </Link>
        <Link
          href="/"
          className="hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1"
        >
          <p>Category</p>
          <KeyboardArrowDownIcon className="h-6 w-6" />
        </Link>
      </div>

      {/* Search bar */}

      <div className="flex-grow">
        <Searchbar />
      </div>

      {/* Orders and Account */}

      <div>
        <AccountDropDown />
      </div>
    </header>
  );
}
