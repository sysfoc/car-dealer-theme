import { FaStar } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { reviews } from "@/data/Reviews";

export default function ProductReview() {
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
        {reviews.map((review) => (
          <div key={review.id} className="pb-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-800 font-semibold flex items-center gap-2">
                <img src={review.image} alt="avatar" className="w-8 h-8 rounded-full" />
                {review.name} <span className="text-sm text-gray-500">{review.date}</span>
              </div>
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
        hover:outline hover:outline-2 hover:outline-black hover:opacity-80 ">
          See All Reviews
        </button>
      </div>
    </div>
  );
}
