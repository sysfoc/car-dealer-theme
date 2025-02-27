import Breadcrumb from "@/app/ui/Breadcrumb";
import ProductsSectionGrid from "@/app/ui/ProductCard/ProductsSectionGrid";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaRegAddressBook, FaWallet } from "react-icons/fa";
import { IoCardOutline, IoStorefrontOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import {
  MdNotificationsActive,
  MdOutlineReviews,
  MdSecurity,
  MdVpnKey,
} from "react-icons/md";
import {
  RiAccountCircleLine,
  RiCoupon3Line,
  RiPagesLine,
} from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const linksForBreadcrumb: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Account", link: "/account" },
];

const DashboardNavLinks: { title: string; link: string; icon: IconType }[] = [
  {
    title: "Your orders",
    link: "/your-orders",
    icon: RiPagesLine,
  },
  {
    title: "Your reviews",
    link: "/your-reviews",
    icon: MdOutlineReviews,
  },
  {
    title: "Your profile",
    link: "/your-profile",
    icon: RiAccountCircleLine,
  },
  {
    title: "Coupons & offers",
    link: "/coupons-offers",
    icon: RiCoupon3Line,
  },
  {
    title: "Credit balance",
    link: "/credit-balance",
    icon: FaWallet,
  },
  {
    title: "Followed stores",
    link: "/followed-stores",
    icon: IoStorefrontOutline,
  },
  {
    title: "Browsing history",
    link: "/browsing-history",
    icon: LuClock3,
  },
  {
    title: "Addresses",
    link: "/addresses",
    icon: FaRegAddressBook,
  },
  {
    title: "Country/Region & Language",
    link: "/country-region-language",
    icon: TbWorld,
  },
  {
    title: "Your payment methods",
    link: "/payment-methods",
    icon: IoCardOutline,
  },
  {
    title: "Account security",
    link: "/account-security",
    icon: MdSecurity,
  },
  {
    title: "Permissions",
    link: "/permissions",
    icon: MdVpnKey,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: MdNotificationsActive,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const path = usePathname();
  return (
    <div className="max-w-[1192px] mx-auto">
      <Breadcrumb links={linksForBreadcrumb} />
      {/* Dashboard section */}
      <section className="flex relative">
        {/* Left navigation */}
        <div className="w-56 h-fit sticky top-0 mr-5 flex flex-col text-gray-900">
          <nav>
            <ul>
              {DashboardNavLinks.map((element, index) => (
                <li key={index} className="">
                  <Link
                    href={`/dashboard/${element.link}`}
                    className="flex relative group items-center mb-2 px-3 py-1 text-sm font-medium leading-[18px]"
                  >
                    <div className="flex justify-center flex-shrink-0 mr-2">
                      {<element.icon size={24} />}
                    </div>
                    {element.title}
                    <div className="w-full h-full absolute top-0 left-0 pointer-events-none z-[-1] opacity-25 rounded-sm group-hover:bg-gray-400"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Right Side Section */}
        <div className="w-full min-h-[550px] overflow-y-auto custom-scrollbar-vertical flex-1">
          {children}
        </div>
      </section>
      {/* Explore section */}
      <section className="w-full">
        <h3 className="font-bold my-5 text-lg pl-2">Explore your interests</h3>
        <ProductsSectionGrid columns={5} />
      </section>
    </div>
  );
}
