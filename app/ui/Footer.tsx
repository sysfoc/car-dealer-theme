import React from "react";
import { BsGraphDownArrow, BsCreditCard2FrontFill } from "react-icons/bs";
import { MdGppGood } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmazonPay,
  FaPinterest,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { PiHourglassLowFill } from "react-icons/pi";
import { RiCoupon4Fill } from "react-icons/ri";
import {
  FaCcDiscover,
  FaCcAmex,
  FaCcDinersClub,
  FaCcJcb,
  FaShieldAlt,
  FaCheckCircle,
  FaKey,
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company info</h3>
          <ul className="space-y-2">
            <li>About Temu</li>
            <li>Temu – Shop Like a Billionaire</li>
            <li>Affiliate & Influencer: Earn Commission</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Temu's Tree Planting Program</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer service</h3>
          <ul className="space-y-2">
            <li>Return and refund policy</li>
            <li>Intellectual property policy</li>
            <li>Shipping info</li>
            <li>Report suspicious activity</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li>Support center & FAQ</li>
            <li>Safety center</li>
            <li>Temu purchase protection</li>
            <li>Sitemap</li>
            <li>Partner with Temu</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Download the Temu App
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <p className="flex items-center gap-2 min-w-0">
                <BsGraphDownArrow />
                <span className="truncate">
                  Price-drop alerts with long text example to show truncation
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <MdGppGood />
                <span className="truncate">
                  Faster &amp; more secure checkout with longer text example
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <FaTruckFast />
                <span className="truncate">
                  Exclusive offers for app users only
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2 min-w-0">
                <BsCreditCard2FrontFill />
                <span className="truncate">Track orders anytime anywhere</span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <PiHourglassLowFill />
                <span className="truncate">
                  Low stock items alerts notification
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <RiCoupon4Fill />
                <span className="truncate">
                  Coupons &amp; offers alerts daily
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-white px-3 py-1 rounded-md text-black truncate">
              App Store
            </div>
            <div className="bg-white px-3 py-1 rounded-md text-black truncate">
              Google Play
            </div>
          </div>

          {/* Connect with Temu */}
          <div className="mt-5">
            <h4 className="text-white font-semibold">Connect with Temu</h4>
            <div className="flex space-x-4 text-2xl mt-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>

      {/* Security & Payment and Rights Section */}
      <div className="container mx-auto pt-5">
        <div className="flex flex-col md:flex-row justify-between text-start text-sm border-b border-gray-700 pb-5">
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Security certification</h4>
            <div className="flex space-x-3 text-xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcApplePay />
              <FaCcAmazonPay />
              <FaCcDinersClub />
              <FaShieldAlt />
              <FaCheckCircle />
              <FaKey />
            </div>
          </div>

          <div className="space-y-2 mt-5 md:mt-0">
            <h4 className="text-white font-semibold">We accept</h4>
            <div className="flex space-x-3 text-xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcApplePay />
              <FaCcDiscover />
              <FaCcAmex />
              <FaCcDinersClub />
              <FaCcJcb />
              <SiGooglepay />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center text-gray-500 text-xs">
          <p>
            © 2025 WhaleCo Inc. |{" "}
            <a href="#" className="underline">
              Terms of use
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Privacy policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Your privacy choices
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Ad Choices
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
