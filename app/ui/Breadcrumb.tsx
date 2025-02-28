import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({
  links,
}: {
  links: { title: string; link: string }[];
}) => {
  return (
    <nav className="w-full flex items-center text-sm py-5">
      {links.map((element, index) => {
        return (
        <ol key={index} className="flex text-gray-600 items-center">
            {index<links.length-1 && <Link href={element.link}>{element.title}</Link>}
            {index===links.length-1 && <div className="select-none text-black">{element.title}</div>}
            {index<links.length-1 && <MdKeyboardArrowRight className="mx-1"/>}
        </ol>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
