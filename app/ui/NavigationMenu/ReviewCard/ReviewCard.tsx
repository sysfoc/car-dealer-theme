import { useEffect, useRef, useState } from "react";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import FeedbackCard from "./ReviewSections/FeedbackCard";

type currentVisibility = "messages" | "review" | "none";

interface ReviewCardProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<currentVisibility>>;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ setCurrentTab }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const reviewCardDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        reviewCardDiv.current &&
        !reviewCardDiv.current.contains(event.target as Node)
      ) {
        setCurrentTab("none");
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
      <div ref={reviewCardDiv}>
        {/* Review box */}
        <div className={`${isFormSubmitted ? "hidden" : "flex"}`}>
          <FeedbackCard
            setIsFormSubmitted={setIsFormSubmitted}
            setCurrentTab={setCurrentTab}
          />
        </div>
        {/* Thanks box */}
        <div className={`${isFormSubmitted? "flex": "hidden"} relative w-[640px] bg-white box-shadow overflow-y-auto rounded-md py-9 flex-col items-center text-center`}>
          {/* Close Button */}
          <button
            onClick={() => setCurrentTab("none")}
            className="absolute right-1 top-1 hover:bg-gray-200 rounded-full p-1"
          >
            <IoMdClose size={30} />
          </button>
          <div className="px-10 pb-5 flex flex-col items-center">
            <IoMdCheckmarkCircleOutline
              className="text-orange-500 mb-6"
              size={100}
            />
            <div className="font-semibold text-lg mb-2">Thank You!</div>
            <div className="text-xs text-gray-600">
              Thank you for taking the time to submit your feedback. We
              appreciate your help and will use your comments to improve our
              website.
            </div>
          </div>
          {/* Thanks Button */}
          <button
            onClick={() => setCurrentTab("none")}
            className="mt-2 h-12 w-96 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-400 hover:scale-105"
          >
            Done
          </button>
          <div className="text-xs text-gray-500 mt-3">
            <div>Questions or concerns? We are here to help.</div>
            <div className="font-medium text-gray-700">
              Visit the Support Center.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
