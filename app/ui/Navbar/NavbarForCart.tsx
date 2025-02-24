import { AppRootState } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { IoIosUnlock } from "react-icons/io";
import { useSelector } from "react-redux";

const NavbarForCart = () => {
  const isPageInteractable = useSelector((state : AppRootState) => state.pageProperties.pageInteractable)
  return (
    <header className={`flex bg-white border-b-[1px] border-gray-300 w-full ${isPageInteractable?"z-40": "z-20"} w-full`}>
      <div className="h-[65px] mx-auto max-w-[1460px] w-full min-w-[1150px] flex items-center px-10 py-1 gap-2 relative">
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
