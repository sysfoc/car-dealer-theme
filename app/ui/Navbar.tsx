import Image from "next/image";
import img from "@/public/Temu_logo.svg";
import Link from "next/link";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AcUnitIcon from "@mui/icons-material/AcUnit";

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
    <header className="h-[65px] bg-[#6dade5] w-full text-red-500 flex p-2 items-center gap-2">
      <Link href="/">
        <Image height={45} width={45} className="" src={img} alt="app-logo" />
      </Link>
      <div className="hidden md:flex text-white gap-2 text-sm font-bold">
        {linksToShow.map((link) => (
          <Link key={link.title} href="/" className='hover:bg-gray-600 p-3 rounded-3xl'>
            <link.icon className="h-6 w-6" />
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
