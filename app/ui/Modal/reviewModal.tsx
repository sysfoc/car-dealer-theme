"use client";
import { FaRegThumbsUp, FaStar } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TbMinusVertical } from "react-icons/tb";
import Flag from "react-world-flags";
import ShareModal from "@/app/ui/Modal/ShareModal";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface Review {
  id: number;
  name: string;
  reviewDate: string;
  image: string;
  rating: number;
  comment: string;
  purchases: number | undefined;
  country: string;
}

interface ReviewModalProps {
  reviews: Review[];
  onClose: () => void;
}

export default function ReviewModal({ reviews, onClose }: ReviewModalProps) {
  const [showShareModal, setShowShareModal] = useState<number | null>(null);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopySuccess = () => {
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {showCopyNotification && (
        <div className="fixed flex items-center gap-2 top-8 left-1/2 text-sm font-semibold transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-6 py-4 rounded-md shadow-lg z-50 animate-fade-in-down">
          <FaCheck
            fontSize={19}
            className="text-white bg-green-400 rounded-full p-1"
          />
          Link copied successfully!
        </div>
      )}
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 px-6 py-3 rounded-lg shadow-lg relative">
        <div className="flex justify-end ">
          <span className="text-black hover:bg-gray-100 p-1 rounded-full">
            <RxCross2 onClick={onClose} fontSize={25} />
          </span>
        </div>
        <div className="text-xl text-center pb-2">
          <span className="font-semibold">Item Reviews</span>
        </div>
        <div className="max-h-96 overflow-y-auto px-3 space-y-4">
          <div className="space-y-6">
            <div
              className="flex items-center gap-1 text-green-600 
            px-2 py-1 hover:underline text-sm font-semibold bg-gray-100"
            >
              <MdAdminPanelSettings className="text-lg" />
              <span>All reviews are from verified purchases</span>
            </div>
            {reviews.map((review) => (
              <div key={review.id} className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-gray-800 font-semibold flex items-center gap-2">
                    <img
                      src={review.image}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    {review.name}
                    <span className="flex items-center gap-2 text-gray-500">
                      in
                      <Flag code={review.country} className="!min-w-[20px]" />
                    </span>
                    <span className="text-sm text-gray-500">
                      {review.reviewDate}
                    </span>
                  </div>
                  {review.purchases && (
                    <div className="text-orange-500">
                      Purchased {review.purchases} times
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-black text-lg" />
                    ))}
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1">
                      <ShareModal
                        reviewId={review.id}
                        showShareModal={showShareModal}
                        setShowShareModal={setShowShareModal}
                        onCopySuccess={handleCopySuccess}
                      />
                    </span>
                    <TbMinusVertical fontSize={20} className="text-gray-400" />
                    <span className="flex items-center gap-1 hover:opacity-75 cursor-pointer">
                      <FaRegThumbsUp fontSize={18} />
                      Helpful
                    </span>
                  </div>
                  <div>
                    <PiDotsThreeBold fontSize={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
