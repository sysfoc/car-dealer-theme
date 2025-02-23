import { IoIosUnlock } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import CartCheckoutDetails from "./CartCheckoutDetails";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { FaTruckFast } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";

const securityCertificationsToShow = [
  "/images/footer/DSS.webp",
  "/images/footer/VisaSecure.webp",
  "/images/footer/masterIdCheck.webp",
  "/images/footer/SafeKey.webp",
  "/images/footer/Discover.webp",
  "/images/footer/JCB.webp",
  "/images/footer/trustedSite.webp",
];
const paymentMethodsToShow = [
  "/images/footer/Jazzcash.webp",
  "/images/footer/easypaisa.webp",
  "/images/footer/visa.webp",
  "/images/footer/masterLogo.webp",
  "/images/footer/AmericanEx.webp",
  "/images/footer/DiscoverR.webp",
  "/images/footer/maestro.webp",
  "/images/footer/Diners.webp",
  "/images/footer/JCB.webp",
  "/images/footer/UnionPay.webp",
  "/images/footer/applePay.webp",
  "/images/footer/googlePay.webp",
];
const CartDetails = () => {
  return (
    <div
      className="w-[354px] pt-5 h-screen overflow-y-scroll scrollbar-hide font-semibold text-base sticky top-0"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="mb-5">Order Summary</div>
      {/* Cart Dynamic checkout details price */}
      <CartCheckoutDetails />
      {/* Cart Details Terms */}
      <div>
        <div className="flex flex-col text-[0.8rem] font-medium gap-4 leading-normal">
          <div>
            <IoIosUnlock
              className="inline-block text-green-600 mr-2"
              size={20}
            />
            <span>
              You will not be charged until you review this order on the next
              page
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div>
                <IoShieldCheckmarkSharp
                  className="inline-block text-green-600 mr-2"
                  size={20}
                />
                <span className="font-semibold text-sm">
                  Safe Payment Options
                </span>
              </div>
              <div>
                <span className="text-green-700">
                  Temu is committed to protecting your payment information.
                </span>
                <span className="text-gray-400">
                  We follow PCI DSS standards, use strong encryption, and
                  perform regular reviews of its system to protect your privacy.
                </span>
              </div>
              <ol className="list-decimal pl-4 mt-2">
                <li>
                  <div>Payment methods</div>
                  <div className="flex w-full flex-wrap -ml-4 mt-2">
                    {paymentMethodsToShow.map((element, i) => (
                      <Image
                        alt="img"
                        src={element}
                        width={200}
                        height={200}
                        className="h-7 w-auto mr-2 mb-2"
                        key={i}
                      />
                    ))}
                  </div>
                </li>
                <li>
                  <div>Security certification</div>
                  <div className="flex w-full flex-wrap -ml-4 mt-2">
                    {securityCertificationsToShow.map((element, i) => (
                      <Image
                        alt="img"
                        src={element}
                        width={200}
                        height={200}
                        className="h-7 w-auto mr-2 mb-2"
                        key={i}
                      />
                    ))}
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <IoIosUnlock
              className="inline-block text-green-600 mr-2"
              size={20}
            />
            <span className="font-semibold text-sm">Secure privacy</span>
            <div className="text-gray-500 mt-1">
              <span>
                Protecting your privacy is important to us! Please be assured
                that your information will be kept secured and uncompromised. We
                will only use your information in accordance with our privacy
                policy to provide and improve our services to you.
              </span>
              <div className="cursor-pointer hover:text-black w-fit pt-1">
                Learn more &gt;
              </div>
            </div>
          </div>
          <div>
            <HiShoppingCart
              className="inline-block text-green-600 mr-2"
              size={20}
            />
            <span className="font-semibold text-sm">
              Temu Purchase Protection
            </span>
            <div className="text-gray-500 mt-1">
              <span>
                Shop confidently on Temu knowing that if something goes wrong,
                we&#39;ve always got your back.
              </span>
              <div className="cursor-pointer hover:text-black w-fit pt-1">
                See program terms &gt;
              </div>
            </div>
          </div>
          <div>
            <FaTruckFast
              className="inline-block text-green-600 mr-2"
              size={20}
            />
            <span className="font-semibold text-sm">Delivery guarantee</span>
            <div className="text-gray-500 mt-1">
              <div className="grid grid-cols-2 text-xs">
                <div>
                  <BsCheck className="inline text-green-600" size={20} /> Rs.280
                  Credit for delay
                </div>
                <div>
                  <BsCheck className="inline text-green-600" size={20} /> 15-day
                  no update refund
                </div>
                <div>
                  <BsCheck className="inline text-green-600" size={20} /> Return
                  if item damaged
                </div>
                <div>
                  <BsCheck className="inline text-green-600" size={20} /> 30-day
                  no refund
                </div>
              </div>
              <button className="hover:text-black w-fit pt-1">
                Learn more &gt;
              </button>
            </div>
          </div>
          <button className="text-left">
            <RiPlantFill
              className="inline-block text-green-600 mr-2"
              size={20}
            />
            <span className="font-semibold text-sm">
              Temu{"'"}s Tree Planting Program {">"}
            </span>
          </button>
        </div>
        {/* Bottom White Faded border */}
        <div className="sticky bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default CartDetails;
