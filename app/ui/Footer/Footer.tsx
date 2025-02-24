import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaTiktok,
  FaHourglassHalf,
} from "react-icons/fa";
import { FaTruckFast, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FiTrendingDown } from "react-icons/fi";
import Image from "next/image";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { HiTicket } from "react-icons/hi";
import { TbShoppingBagDiscount } from "react-icons/tb";

const companyInfoFooterLinks = [
  {
    title: "About Temu",
    link: "/",
  },
  {
    title: "Temu - Shop Like a Billionaire",
    link: "/",
  },
  {
    title: "Affiliate & Influencer: Earn Commission",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
  {
    title: "Careers",
    link: "/",
  },
  {
    title: "Press",
    link: "/",
  },
  {
    title: "Temu's Tree Planting Program",
    link: "/",
  },
];
const customerServiceFooterLinks = [
  {
    title: "Return and refund policy",
    link: "/",
  },
  {
    title: "Intellectual property policy",
    link: "/",
  },
  {
    title: "Shipping info",
    link: "/",
  },
  {
    title: "Report suspicious activity",
    link: "/",
  },
];
const helpFooterLinks = [
  {
    title: "Support center & FAQ",
    link: "/",
  },
  {
    title: "Safety center",
    link: "/",
  },
  {
    title: "Temu purchase protection",
    link: "/",
  },
  {
    title: "Sitemap",
    link: "/",
  },
  {
    title: "Partner with Temu",
    link: "/",
  },
];

const PaymentMethodsFooter = [
  "/images/footer/visa.webp",
  "/images/footer/masterLogo.webp",
  "/images/footer/AmericanEx.webp",
  "/images/footer/discoverR.webp",
  "/images/footer/maestro.webp",
  "/images/footer/Diners.webp",
  "/images/footer/JCBLogo.webp",
  "/images/footer/UnionPay.webp",
  "/images/footer/applePay.webp",
  "/images/footer/googlePay.webp",
];

const SecurityCertificationsFooter = [
  "/images/footer/DSS.webp",
  "/images/footer/VisaSecure.webp",
  "/images/footer/Master.webp",
  "/images/footer/SafeKey.webp",
  "/images/footer/Discover.webp",
  "/images/footer/JCB.webp",
  "/images/footer/trustedSite.webp",
];

const Footer: React.FC = () => {
  return (
    <footer className="flex min-w-[1160px] px-11 bg-[#1e1e1e] h-[505px] pt-7 mt-14 text-white text-sm justify-center w-full">
      <div className="max-w-[1460px] w-full">
        {/* Links */}
        <div className="flex justify-between mb-9">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Company info</h3>
            <ul className="text-gray-300 text-xs font-medium">
              {companyInfoFooterLinks.map((ele) => {
                return ele.title === "Temu - Shop Like a Billionaire" ? (
                  <li key={ele.title} className="text-gray-400 mt-2">
                    {ele.title}
                  </li>
                ) : (
                  <li key={ele.title} className="mt-3">
                    <a href={ele.link} className="hover:text-white">
                      {ele.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-3 text-sm">Customer Service</h3>
            <ul className="text-gray-300 text-xs font-medium">
              {customerServiceFooterLinks.map((ele) => {
                return (
                  <li key={ele.title} className="mt-3">
                    <Link href={ele.link} className="hover:text-white">
                      {ele.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Help Links */}
          <div>
            <h3 className="text-white font-bold mb-3 text-sm">Help</h3>
            <ul className="text-gray-300 text-xs font-medium">
              {helpFooterLinks.map((ele) => {
                return (
                  <li key={ele.title} className="mt-3">
                    <a href={ele.link} className="hover:text-white">
                      {ele.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* App Section */}
          <div className="w-[360px]">
            <div className="mb-8">
              <Link className="font-bold" href="/">
                Download the Temu App
              </Link>
              <div className="my-4 text-xs flex flex-col gap-3 pl-1">
                <div className="flex items-center">
                  <div className="flex w-[170px]">
                    <div className="bg-white w-4 h-4 rounded-full p-1 mr-1">
                      <FiTrendingDown className="text-black w-full h-full font-bold" />
                    </div>
                    Price-drop alerts
                  </div>
                  <div className="h-3 border-r-[1px] mx-3"></div>
                  <div className="flex">
                    <FaTruckFast className="w-4 h-4 mr-1" />
                    Track orders any time
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-[170px]">
                    <IoShieldCheckmarkSharp className="w-4 h-4 mr-1" />
                    Faster and more secu...
                  </div>
                  <div className="h-3 border-r-[1px] mx-3"></div>
                  <div className="flex">
                    <FaHourglassHalf className="w-4 h-4 mr-1" />
                    Low cost items alerts
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-[170px]">
                    <HiTicket className="w-4 h-4 mr-1" />
                    Exclusive offers
                  </div>
                  <div className="h-3 border-r-[1px] mx-3"></div>
                  <div className="flex">
                    <TbShoppingBagDiscount className="w-4 h-4 mr-1" />
                    Coupons & offers alerts
                  </div>
                </div>
              </div>
              <div className="flex">
                <Link
                  href="/"
                  className="flex py-2 px-4 mr-3 h-12 border-[1px] rounded-full border-gray-700 hover:border-gray-200 items-center"
                >
                  <div className="w-7 h-7 mr-2 mt-1">
                    <Image
                      src="/images/footer/applelogo.webp"
                      width={30}
                      height={30}
                      alt="apple logo"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] text-gray-400 font-semibold">
                      Download on the
                    </div>
                    <div className="font-bold ">App Store</div>
                  </div>
                </Link>
                <Link
                  href="/"
                  className="flex py-2 px-4 mr-3 h-12 border-[1px] rounded-full border-gray-700 hover:border-gray-200 items-center"
                >
                  <div className="w-7 h-7 mr-2 mt-1">
                    <Image
                      src="/images/footer/playstoreLogo.webp"
                      width={30}
                      height={30}
                      alt="apple logo"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] text-gray-400 font-semibold">
                      Get it on
                    </div>
                    <div className="font-bold ">GooglePlay</div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="font-bold">Connect with Temu</div>
              <div className="mt-1 flex gap-4">
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px] -ml-2"
                >
                  <FaInstagram size={28} />
                </Link>
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px]"
                >
                  <FaFacebook size={28} />
                </Link>
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px]"
                >
                  <FaXTwitter size={28} />
                </Link>
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px]"
                >
                  <FaTiktok size={28} />
                </Link>
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px]"
                >
                  <FaYoutube size={28} />
                </Link>
                <Link
                  href="/"
                  className="hover:bg-white hover:bg-opacity-15 rounded-full p-[6px]"
                >
                  <FaPinterest size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Payment */}
        <div className="flex border-b-[1px] border-gray-700 pb-8">
          <div className="w-[662px] mr-6 font-bold">
            <h4 className="">Security certification</h4>
            <div className="flex mt-3">
              {SecurityCertificationsFooter.map((element, i) => (
                <div key={i} className="h-7 mr-2 mb-2">
                  <Image
                    src={element}
                    alt="security certifications"
                    height={200}
                    width={200}
                    className="h-7 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[662px] mr-6 font-bold">
            <h4 className="">We accept</h4>
            <div className="flex mt-3">
              {PaymentMethodsFooter.map((element, i) => (
                <div key={i} className="h-7 mr-2 mb-2">
                  <Image
                    src={element}
                    alt="security certifications"
                    width={200}
                    height={200}
                    className="h-7 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms and conditions */}
        <div className="text-xs flex justify-center pt-8 text-gray-400">
          <p className="flex gap-3">
            © 2025 WhaleCo Inc.
            <a href="#" className="underline hover:text-white">
              Terms of use
            </a>
            <a href="#" className="underline hover:text-white">
              Privacy policy
            </a>
            <a
              href="#"
              className="underline hover:text-white flex items-center"
            >
              Your privacy choices
              <Image
                alt="toggle"
                src="/images/footer/toggle.webp"
                width={25}
                height={12}
                style={{ width: "auto", height: "auto" }}
                className="ml-1 w-6 h-3"
              />
            </a>
            <a href="#" className="underline hover:text-white">
              Ad Choices
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
