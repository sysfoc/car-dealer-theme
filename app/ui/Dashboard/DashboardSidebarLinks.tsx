"use client"
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegAddressBook, FaWallet } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
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

const DashboardNavLinks: {
  title: string;
  link: string;
  icon: IconType;
  subLinks?: { title: string; link: string }[];
}[] = [
  {
    title: "Your orders",
    link: "/your-orders",
    icon: RiPagesLine,
    subLinks: [
      { title: "All Orders", link: "/your-orders/all" },
      { title: "Processing", link: "/your-orders/processing" },
      { title: "Shipped", link: "/your-orders/shipped" },
      { title: "Delivered", link: "/your-orders/delivered" },
      { title: "Returns", link: "/your-orders/returns" },
    ],
  },
  {
    title: "Your reviews",
    link: "/your-reviews",
    icon: MdOutlineReviews,
  },
  {
    title: "Your profile",
    link: "/account",
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

interface DashboardSidebarLinksPropTypes {
  currentPath: string;
  setBreadcrumbLinks: React.Dispatch<
    React.SetStateAction<{ title: string; link: string }[]>
  >;
}

export default function DashboardSidebarLinks({
  currentPath,
  setBreadcrumbLinks,
}: DashboardSidebarLinksPropTypes) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
  <div className="w-56 h-fit sticky top-0 flex flex-col text-gray-900">
  <nav>
    <ul>
      {DashboardNavLinks.map((element, index) => (
        <li key={index} className="mb-2">
          {element.subLinks ? (
            <>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium bg-transparent border-0"
              >
                <div className="flex items-center">
                  <element.icon size={20} className="mr-2" />
                  {element.title}
                </div>
                {openDropdown ? <HiOutlineChevronUp size={16} /> : <HiOutlineChevronDown size={16} />}
              </button>
              {openDropdown && (
                <ul className="ml-6 mt-1 space-y-2 border-l-2 border-gray-300">
                  {element.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={`/dashboard${subLink.link}`}
                        className={`block px-3 py-1 hover:bg-gray-200 text-sm ${
                          currentPath.includes(subLink.link) ? "text-red-500 font-medium" : "text-gray-700"
                        }`}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              href={`/dashboard${element.link}`}
              className={`px-3 py-2 text-sm font-medium flex items-center ${
                currentPath.includes(element.link) ? "text-red-500 font-medium" : "text-gray-700"
              }`}
            >
              <element.icon size={20} className="mr-2" />
              {element.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
</div>
   );
}
