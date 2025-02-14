// import React from "react";
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
  FaGooglePlay,
  FaCcDiscover,
  FaCcAmex,
  FaCcDinersClub,
  FaCcJcb,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { PiHourglassLowFill } from "react-icons/pi";
import { RiCoupon4Fill } from "react-icons/ri";
import { SiGooglepay } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-10 px-5 md:px-20 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base md:text-lg">
            Company info
          </h3>
          <ul className="space-y-2 text-[#BCBCBC] custom-list text-xs md:text-sm">
            <li>About Temu</li>
            <li>Temu – Shop Like a Billionaire</li>
            <li>Affiliate &amp; Influencer: Earn Commission</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Temu's Tree Planting Program</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base md:text-lg">
            Customer service
          </h3>
          <ul className="space-y-2 text-[#BCBCBC] custom-list text-xs md:text-sm">
            <li>Return and refund policy</li>
            <li>Intellectual property policy</li>
            <li>Shipping info</li>
            <li>Report suspicious activity</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base md:text-lg">
            Help
          </h3>
          <ul className="space-y-2 text-[#BCBCBC] custom-list text-xs md:text-sm">
            <li>Support center &amp; FAQ</li>
            <li>Safety center</li>
            <li>Temu purchase protection</li>
            <li>Sitemap</li>
            <li>Partner with Temu</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base md:text-lg">
            Download the Temu App
          </h3>
          <div className="grid grid-cols-2 gap-4 text-[#FFFFFF]">
            <div className="space-y-2">
              <p className="flex items-center gap-2 min-w-0">
                <BsGraphDownArrow className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Price-drop alerts with long text example to show truncation
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <MdGppGood className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Faster &amp; more secure checkout with longer text example
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <FaTruckFast className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Exclusive offers for app users only
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2 min-w-0">
                <BsCreditCard2FrontFill className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Track orders anytime anywhere
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <PiHourglassLowFill className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Low stock items alerts notification
                </span>
              </p>
              <p className="flex items-center gap-2 min-w-0">
                <RiCoupon4Fill className="text-4xl md:text-5xl" />
                <span className="truncate text-xs md:text-sm">
                  Coupons &amp; offers alerts daily
                </span>
              </p>
            </div>
          </div>
         
          <div className="flex relative lg:right-10 sm:right-28 md:right-40 gap-3 mt-3">
 
  <div className="flex items-center bg-black px-3 py-2 w-full max-w-[200px] min-w-[170px] text-white cursor-pointer rounded-full">
    <IoLogoApple className="text-3xl mr-2" />
    <div className="flex flex-col leading-tight">
      <span className="text-[10px]  uppercase">Download on</span>
      <span className="text-sm font-semibold">App Store</span>
    </div>
  </div>

 
  <div className="flex items-center bg-black px-3 py-2 rounded-full w-full max-w-[200px] min-w-[170px] text-white cursor-pointer">
    <FaGooglePlay className="text-3xl mr-2" />
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase">Get it on</span>
      <span className="text-sm font-semibold">Google Play</span>
    </div>
  </div>
</div>

{/* Download Buttons */}



          {/* Connect with Temu */}
          <div className="mt-5 text-white">
           
              <h4 className="font-semibold text-base md:text-lg">
                Connect with Temu
              </h4>
              <div className="flex space-x-1 mt-2">
                <a href="#" className="social-link">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <FaYoutube className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <FaPinterest className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* Security & Payment and Rights Section */}
      <div className="container mx-auto pt-5">
        <div className="flex flex-col md:flex-row justify-between text-start text-sm border-b border-gray-700 pb-5">
          <div className="space-y-2 mr-6">
            <h4 className="text-white font-semibold text-base md:text-lg">
              Security certification
            </h4>
            <div className="flex space-x-3 lg:text-3xl md:text-2xl sm:text-xl text-sm">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcApplePay />
              <FaCcAmazonPay />
              <FaCcDinersClub />
              <FaShieldAlt />
              <FaCheckCircle />
            </div>
          </div>

          <div className="space-y-2 mt-5 md:mt-0">
            <h4 className="text-white font-semibold text-base md:text-lg">
              We accept
            </h4>
            <div className="flex space-x-3 lg:text-3xl md:text-2xl sm:text-xl text-sm">
              <FaCcVisa />
              <FaCcMastercard />
              <SiGooglepay />
              <FaCcPaypal />
              <FaCcApplePay />
              <FaCcDiscover />
              <FaCcAmex />
              <FaCcDinersClub />
              <FaCcJcb />
            </div>
          </div>
        </div>

        <div className="mt-7 font-semibold text-center text-xs text-[#BCBCBC]">
          <p>
            © 2025 WhaleCo Inc.
            <a href="#" className="underline mx-2">
              Terms of use
            </a>
            <a href="#" className="underline mx-2">
              Privacy policy
            </a>
            <a href="#" className="underline mx-2">
              Your privacy choices
            </a>
            <a href="#" className="underline mx-2">
              Ad Choices
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
