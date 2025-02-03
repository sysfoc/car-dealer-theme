import { TbMessageCircleQuestion } from "react-icons/tb";
import Link from "next/link";

const SupportDropDownButton = () => {
  return (
    <Link
      href="/"
      className="text-white h-10 text-xs font-bold hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1"
    >
      <TbMessageCircleQuestion size={30} />
      Support
    </Link>
  );
};

export default SupportDropDownButton;
