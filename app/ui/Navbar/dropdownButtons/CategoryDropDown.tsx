import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const CategoryDropDown = () => {
  return (
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
        <p>Categories</p>
        <IoIosArrowDown />
      </Link>
    </div>
  );
};

export default CategoryDropDown;
