import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { LuFilePenLine, LuMessageSquareMore } from "react-icons/lu";

const NavigationMenu = () => {
  return (
    <div className="z-50 w-11 max-h-44 h-fit items-center bg-white rounded-md fixed right-0 bottom-5 shadow-lg p-1 flex flex-col gap-6 py-6">
      <Link href="/">
        <LuMessageSquareMore size={20} />
      </Link>

      <Link href="/">
        <LuFilePenLine size={20} />
      </Link>

      <Link href="/">
        <div className="leading-tight text-center">
          <IoIosArrowUp size={20} className="mx-auto" />
          <p className="text-xs font-semibold">Top</p>
        </div>
      </Link>
    </div>
  );
};

export default NavigationMenu;
