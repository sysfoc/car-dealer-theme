"use client";
import { useParams } from "next/navigation";
import { products } from "@/data/LighteningDealProducts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import {
  FaStar,
  FaClock,
  FaTruck,
  FaCheckCircle,
  FaCheck,
} from "react-icons/fa";
import { reviews } from "@/data/Reviews";
import { MdDone, MdElectricBolt } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";

export default function LighteningDealDetail() {
  const [selectedQuantity, setSelectedQuantity] = useState(20);
  const { id } = useParams();
  if (!id) return notFound();

  const product = products.find((p) => p.id.toString() === id);
  if (!product) return notFound();

  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="max-w-6xl mx-auto p-5 font-sans">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Scrollable Content */}
        <div className="col-span-5 space-y-6">
          {/* Image Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              {Array(5)
                .fill(product.image)
                .map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    width={80}
                    height={80}
                    className={`rounded-md border cursor-pointer ${
                      mainImage === img ? "border-black" : "border-gray-300"
                    }`}
                    onMouseEnter={() => setMainImage(img)}
                  />
                ))}
            </div>
            <Image
              src={mainImage}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Reviews Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-xl font-semibold">
                {reviews.length} Reviews
              </h2>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <FaCheckCircle className="text-lg" />
                <span>Reviews from Verified Customers</span>
              </div>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-800 font-semibold">
                      {review.name}
                    </div>
                    <div className="flex items-center gap-1">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} className="text-yellow-500 text-lg" />
                        ))}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">{review.date}</div>
                  <p className="text-gray-700 mt-2">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right column section */}
        <div className="col-span-7 sticky top-0 self-start h-screen overflow-y-auto">
          <div className="space-y-4 ml-6">
            <div className="text-lg py-1 flex gap-1 justify-center rounded-md items-center text-white bg-[#1C724A] uppercase">
              <MdDone fontSize={20} />
              <div>Free shipping for last day 73% off!</div>
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
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="font-semibold">Sold by </span>
                  <span className="font-bold">My store</span>
                  <PiGreaterThan
                    fontSize={15}
                    className="relative top-[1.5px]"
                  />
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
              <span
                className="border-[1px] border-orange-500 text-orange-500 rounded-md p-[2px] 
              text-xs font-bold uppercase"
              >
                73% off
              </span>
            </div>
            <div className="border-2 border-orange-500 rounded-lg space-y-3">
              {/* Lightning Deal Section */}
              <div className="p-2 bg-orange-500 text-white rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold">
                  <FaClock className="text-lg" />
                  Lightning Deal
                </div>
                <span className="font-medium">
                  Ends in: 09:03:27
                </span>
              </div>

              {/* Quantity Selection Section */}
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
             <MdElectricBolt/>
             <span>09:03:27</span>
             </div>
            </div>




            <div className="space-y-2 text-gray-700">
              <div className="flex items-center text-green-600 gap-1">
                <FaTruck fontSize={24}/>
                <span className="font-bold text-sm">Free shipping on all orders</span>
                <PiGreaterThan fontSize={15} className="relative top-[1.5px]"/>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Delivery:</span>
                <span className="text-gray-900">5-11 business days</span>
              </div>
              <div className="flex items-center gap-3">
              <span className="text-gray-500">Courier Company:</span>
                <span className="text-gray-900">TCS, Leopards, Speedaf, CPEX</span>
              </div>
            </div>


            {/* kl yahan sy start krna */}
            <div className="mt-6 border-t pt-4 space-y-3">
              <h2 className="text-lg font-semibold">Why Choose Temu?</h2>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Free Returns
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Price Adjustment
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Temu's Tree Planting
                  Program (17M+ trees)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
