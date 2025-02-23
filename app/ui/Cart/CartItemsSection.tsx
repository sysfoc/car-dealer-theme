"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const CartItemsSection = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const popUpDiv = useRef<HTMLDivElement>(null);
  const popUpBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        popUpDiv.current &&
        !popUpDiv.current.contains(e.target as Node) &&
        !popUpBtn.current?.contains(e.target as Node)
      ) {
        setIsPopUpOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="flex flex-col w-[65%] min-w-[658px] ">
      <div className="h-fit relative">
        {/* Sticky Element */}
        <div className="sticky top-0 left-0 z-50 bg-white">
          {/* Free Shipping ad */}
          <div aria-label="Free Shipping ad">
            <div className="pt-3 pb-1">
              <button
                ref={popUpBtn}
                onClick={() => {
                  setIsPopUpOpen((prev) => !prev);
                }}
                className="bg-pink-400 bg-opacity-25 rounded-md w-full py-2 flex items-center font-semibold select-none hover:bg-pink-200"
              >
                <FaTruck size={24} className="mx-3" />
                <div className="border-r-[1px] h-7 w-[1px] border-red-500 opacity-25"></div>
                <div className="pl-3">Free shipping on all orders</div>
              </button>
            </div>
            {/* PopUp */}
            {isPopUpOpen && (
              <>
                <div
                  className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 flex items-center`}
                >
                  <div
                    ref={popUpDiv}
                    className="relative h-fit w-[494px] text-xs font-medium text-center px-10 py-9 bg-white box-shadow mx-auto flex justify-between flex-col gap-3 rounded-lg"
                  >
                    {/* Closing Button */}
                    <button
                      onClick={() => {
                        setIsPopUpOpen(false);
                      }}
                      className="absolute right-3 top-3 hover:bg-gray-200 rounded-full p-1"
                    >
                      <IoCloseOutline size={30} />
                    </button>
                    {/* Pop Up Content */}

                    <div className="">
                      <div className="font-semibold text-lg">Free shipping</div>
                      <ul className="list-disc text-left my-3 flex flex-col gap-3">
                        <li>Free standard shipping on all orders.</li>
                        <li>
                          Get a Rs.280 credit (standard shipping) for late
                          delivery.
                        </li>
                        <li>
                          Temu has order minimums to place your order. The
                          applicable thresholds are detailed before you submit
                          your order.
                        </li>
                        <li>
                          The first return of one or multiple returnable items
                          for EVERY order is free!
                        </li>
                        <li>
                          All eligible items can be returned within the return
                          window in their original condition for a full refund.
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setIsPopUpOpen(false)}
                      className="bg-orange-500 h-10 w-60 mx-auto rounded-full font-semibold text-white scale-100 hover:bg-orange-400 hover:scale-105 transition-all duration-200"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cart Items */}
        <div>
          {/* Sticky Cart Products count */}
          <div className="border-b-[1px] border-gray-200"></div>
          {/* Selected Products */}
          <div>
            {/* Cart Empty */}
            <div className="mt-5 mb-10">
              <div className="flex items-center justify-center">
                <PiShoppingCartSimpleThin
                  size={70}
                  className="text-gray-400 mr-2"
                />
                <div className="ml-2">
                  <div className="font-semibold text-sm mb-2">
                    Your shopping cart is empty
                  </div>
                  <div className="text-gray-400 text-xs font-medium">
                    Add your favorite items in it.
                  </div>
                </div>
              </div>
              <div className="font-medium mt-5">
                <Link
                  href="/"
                  className="bg-orange-500 text-white w-[250px] h-10 
                  rounded-full flex items-center justify-center
                    hover:scale-[1.01] hover:bg-orange-400 mx-auto
                 "
                >
                  See trending items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Explore Products */}
      <div className="h-[2000px] bg-purple-200 w-full"></div>
    </div>
  );
};

export default CartItemsSection;
