"use client"
import { FaStar } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { reviews } from "@/data/Reviews";
import ReviewModal from "@/app/ui/Modal/reviewModal";
import { useState } from "react";
import Flag from 'react-world-flags'
import Image from "next/image";


export default function ProductReview() {

  const [ modal , setModal] = useState<boolean>(false)
  return (
    <div className="border-t pt-6 max-w-xl mx-auto">
      {/* Reviews Section */}
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold">{reviews.length} Reviews</h2>
        <div className="flex items-center gap-1 text-green-600 text-sm">
          <MdAdminPanelSettings className="text-lg" />
          <span>Reviews from Verified Customers</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {reviews.slice(0,4).map((review) => (
          <div key={review.id} className="pb-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-800 font-semibold flex items-center gap-2">
                <Image src={review.image} alt="avatar" className="w-8 h-8 rounded-full" />
                {review.name}
                <span className="flex items-center gap-2 text-gray-500">in 
                <Flag code={review.country} className="!min-w-[20px]"/> 
                </span>
               
                <span className="text-sm text-gray-500">{review.reviewDate}</span>
              </div>
              {
                review.purchases &&
              <div className="text-orange-500">
                Purchased {review.purchases} times
              </div>
              }
            </div>
            <div className="flex items-center gap-1 mt-1">
              {Array(review.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-black text-lg" />
                ))}
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 rounded-full text-black border-[1px] border-black
        hover:outline hover:outline-2 hover:outline-black hover:opacity-80"
        onClick={()=>setModal(true)}
        >
          See All Reviews
        </button>
      </div>
      {modal && <ReviewModal reviews={reviews} onClose={() => setModal(false)} />}
    </div>
  );
}
