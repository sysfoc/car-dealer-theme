import Image from "next/image";
import Link from "next/link";
import { IoIosUnlock } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const NavbarForCart = () => {
  const isPageInteractable = useSelector((state : RootState) => state.pageProperties.pageInteractable)
  return (
    <header className={`${isPageInteractable?"z-40": "z-20"} w-full`}>
      <div className="h-[65px] bg-white w-full border-b-[1px] border-gray-300 min-w-[1150px] flex items-center px-10 py-1 gap-2 relative">
        <Link href="/">
          <Image
            height={48}
            width={48}
            className=""
            src="/Temu_logo.svg"
            alt="Temu App"
          />
        </Link>
        <div className="ml-3 text-green-700 text-sm flex gap-1 font-semibold">
          <IoIosUnlock size={20}/> All data is encrypted
        </div>
      </div>
    </header>
  );
};

export default NavbarForCart;
