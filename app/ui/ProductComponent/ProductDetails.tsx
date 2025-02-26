"use client";
import { useState } from "react";
import { MdElectricBolt, MdGppGood, MdDone } from "react-icons/md";
import { FaClock, FaCheck } from "react-icons/fa";
import { IoArchiveSharp, IoShareOutline } from "react-icons/io5";
import { PiGreaterThan, PiGreaterThanBold } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { Carousel, SwiperSlide } from "@/app/ui/Carousel";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { products } from "@/data/LighteningDealProducts";

type Product = (typeof products)[number];

export default function ProductDetails({
  product,
  selectedQuantity,
  setSelectedQuantity,
}: {
  product: Product;
  selectedQuantity: number;
  setSelectedQuantity: (quantity: number) => void;
}) {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);

  return (
    <div className="space-y-4 ml-6">
      <div className="space-y-4 ml-6">
        <div className="p-2 flex gap-1 justify-start rounded-md items-center bg-[#FEEFE1] uppercase">
          <MdDone fontSize={20} className="text-green-600" />
          <div className="text-black text-sm font-semibold">
            Free shipping for last day 73% off!
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span>Hurry! Limited stock available.</span>
          <IoShareOutline className="text-lg" />
        </div>
        <div className="flex items-center gap-1 text-sm ">
          <div className="flex items-center gap-1">
            <div className="text-gray-400 flex ">
              <span>11k+ sold</span>
              <RxDividerVertical fontSize={22} />
            </div>
            <div className="flex items-center gap-1 text-black">
              <span>Sold by My Store</span>
              <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm ">
          <div className="flex items-center gap-1">
            <div className="text-gray-400 flex ">
              <span className="text-white bg-green-800 rounded-br-md rounded-tl-md px-1">
                #65 Top Rated
              </span>
            </div>
            <div className="flex items-center gap-1 text-black">
              <span>in Interior Accessories</span>
              <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-3">
          <div className="flex gap-1 items-center font-bold text-orange-500">
            <span className="text-xl">Last Day</span>
            <MdElectricBolt fontSize={23} />
            <span className="text-xl">Rs.</span>
            <span className="text-4xl"> 200</span>
          </div>
          <span className="line-through text-gray-400">899</span>
          <span className="border-[1px] border-orange-500 text-orange-500 rounded-sm px-[5px] text-xs font-bold uppercase">
            73% off
          </span>
          <span className="border-[1px] border-orange-500 text-orange-500 rounded-sm px-[5px] text-xs font-bold uppercase">
            almost sold out
          </span>
        </div>
        <div className="border-2 border-orange-500 rounded-lg space-y-3">
          <div className="p-2 bg-orange-500 text-white rounded-sm flex items-center justify-between">
            <div className="flex items-center gap-1 font-semibold">
              <FaClock className="text-lg" />
              <span className="italic">Lightning Deal</span>
              <RxDividerVertical fontSize={20} />
              <span className="font-medium">Ends in: 09:03:27</span>
            </div>
            <PiGreaterThanBold fontSize={15} className="relative top-[1.5px]" />
          </div>

          <div className="space-y-2 p-4">
            <div className="text-gray-700 font-medium">Quantity:</div>
            <div className="flex gap-2">
              {[20, 30, 50].map((qty) => (
                <button
                  key={qty}
                  className={`px-4 py-1 border rounded-full ${
                    selectedQuantity === qty
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedQuantity(qty)}
                >
                  {qty}
                </button>
              ))}
            </div>
            <select className="w-[90px] p-1 border rounded-md text-gray-700">
              {[...Array(20).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-fit px-44 flex transition-transform hover:scale-105 flex-col items-center bg-orange-500 hover:bg-orange-600 text-white text-sm py-1 rounded-full font-semibold">
          <span>-73% Now! Add to Cart</span>
          <div className="flex gap-1 items-center">
            <MdElectricBolt />
            <span>09:03:27</span>
          </div>
        </div>

        <div className="space-y-2 text-gray-700">
          <div className="flex items-center text-green-600 gap-1">
            <FaTruckFast fontSize={24} />
            <span className="font-bold text-sm">
              Free shipping on all orders
            </span>
            <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Delivery:</span>
            <span className="text-gray-900">5-11 business days</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Courier Company:</span>
            <span className="text-gray-900">TCS, Leopards, Speedaf, CPEX</span>
          </div>
        </div>
        <div className="text-green-700 font-semibold space-y-3">
          <div className="flex items-center gap-1 text-lg">
            <MdGppGood fontSize={23} />
            <span>Why choose Temu</span>
            <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
          </div>

          <Carousel
            spaceBetween={16}
            onSwiper={(swiper) => setIsBeginning(swiper.isBeginning)}
            onSlideChange={(swiper) => setIsBeginning(swiper.isBeginning)}
          >
            <SwiperSlide>
              <div className="text-sm p-3 rounded-md flex gap-4">
              
                <div className="bg-gray-100  rounded-lg p-4 flex-none">
                  <h3 className="text-green-600 mb-2">Security & Privacy</h3>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">Safe payments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">Secure privacy</span>
                    </div>
                  </div>
                </div>

              
                <div className="bg-gray-100 rounded-lg p-4 flex-1">
                  <h3 className="text-green-600 mb-2">Delivery Guarantee</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">
                        Rs.280 Credit for delay
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">
                        15-day no update refund
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">
                        Return if item damaged
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-400">
                        30-day no delivery refund
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {isBeginning && <div>{isBeginning}</div>}
          </Carousel>

          <div className="flex items-center gap-1 text-lg">
            <IoArchiveSharp fontSize={23} />
            <span>Free returns • Price adjustment</span>
            <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
          </div>

          <div className="flex items-center gap-1 text-lg">
            <Image
              src={"/images/plantImage.jpg"}
              width={25}
              height={20}
              alt="plant-pic"
            />
            <span>Temu's Tree Planting Program (17M+ trees)</span>
            <PiGreaterThan fontSize={15} className="relative top-[1.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
