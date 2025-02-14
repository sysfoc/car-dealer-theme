import { useEffect, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

type currentVisibility = "messages" | "review" | "none";
type feedbackTypes = "" | "Very poor" | "Poor" | "Fair" | "Good" | "Excellent";

const feedbacks: { title: feedbackTypes }[] = [
  {
    title: "Very poor",
  },
  {
    title: "Poor",
  },
  {
    title: "Fair",
  },
  {
    title: "Good",
  },
  {
    title: "Excellent",
  },
];

const negativeFeedbackReasons = [
  {
    title: "Website Experience",
    desc: "What was the specific problem?",
    options: [
      "Poor search results",
      "Don't trust this site",
      "Lack of Products",
      "Difficult to use",
      "Other",
    ],
  },
  {
    title: "Promotions",
    desc: "What was the problem with our coupon/promotions?",
    options: [
      "The coupon amount was too small",
      "Don't know how to use my received coupons",
      "Other",
    ],
  },
  {
    title: "Site Search",
    desc: "Why weren't you able to find products the you liked?",
    options: [],
  },
  {
    title: "Size Chart",
    desc: "What was the specific problem?",
    options: [],
  },
  {
    title: "Shopping cart",
    desc: "What was the specific problem?",
    options: [],
  },
  {
    title: "Checkout",
    desc: "What's your prefered payment method?",
    options: [],
  },
  {
    title: "Delivery",
    desc: "What was the problem you experienced with our delivery service?",
    options: [],
  },
  {
    title: "Returns",
    desc: "What was the reason of your return(s)?",
    options: [],
  },
  {
    title: "Customer service",
    desc: "What area of our customer service were you dissatisfied with?",
    options: [],
  },
  {
    title: "Other",
    desc: "Can you describe the problem?",
    options: [],
  },
];

interface FeedbackCardProps {
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTab: React.Dispatch<React.SetStateAction<currentVisibility>>;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  setIsFormSubmitted,
  setCurrentTab,
}) => {
  const [reviewString, setReviewString] = useState<string>("");
  const [selectedFeedback, setSelectedFeedback] = useState<feedbackTypes>("");
  const [isFeedbackNotEmpty, setIsFeedbackNotEmpty] = useState(false);
  const [selectedNegativeFeedbacks, setSelectedNegativeFeedbacks] = useState<
    { title: string; desc: string; options: string[] }[]
  >([]);

  const handleSubmitFeedback = () => {
    if (selectedFeedback === "") {
      setIsFeedbackNotEmpty(true);
    } else {
      setIsFormSubmitted(true);
    }
  };

  useEffect(() => {
    console.log(selectedNegativeFeedbacks);
  }, [selectedNegativeFeedbacks]);

  return (
    <div className="relative w-[640px] bg-white box-shadow overflow-y-auto rounded-md py-9 flex flex-col items-center text-center">
      {/* Close Button */}
      <button
        onClick={() => setCurrentTab("none")}
        className="absolute right-1 top-1 hover:bg-gray-200 rounded-full p-1"
      >
        <IoMdClose size={30} />
      </button>
      <div className="px-10 pb-5 flex flex-col items-center">
        <div className="mt-2 font-semibold text-lg">
          We are here to improve your experience!
        </div>
        <div className="mt-3 text-xs text-gray-600 font-medium">
          Your feedback matters! Please tell us what you think of our website
          below.
        </div>
        <div className="mt-9 font-semibold text-sm">
          How do you feel about your visit on our site today?
        </div>

        {/* Reviews */}
        <div>
          <div className="h-20 pt-5 w-[480px] flex justify-between">
            {feedbacks.map((element) => (
              <div
                key={element.title}
                onClick={() => {
                  setSelectedFeedback(element.title);
                  setIsFeedbackNotEmpty(false);
                }}
              >
                <div className=" flex w-20 flex-col justify-center h-full items-center cursor-pointer group">
                  <div
                    className={`${
                      selectedFeedback === element.title
                        ? "border-[6px] border-black hover:border-gray-600"
                        : "border-[1px] border-gray-400"
                    } w-5 h-5 rounded-full hover:bg-gray-200`}
                  />
                  <div className="text-sm mt-2">{element.title}</div>
                </div>
              </div>
            ))}
          </div>
          {isFeedbackNotEmpty && (
            <div className="w-full text-xs font-semibold text-red-600 text-left flex items-center gap-1">
              <AiFillExclamationCircle />
              Please select an option that best describes your experience.
            </div>
          )}
        </div>
      </div>

      {/* Feedback section when Review option is selected */}
      <div className={`transition-all duration-200 overflow-hidden`}>
        <div
          className={`mt-3 px-6 bg-gray-100 w-[560px] rounded-lg  transition-all flex flex-col justify-center`}
        >
          {/* For Excellent and Good Reviews */}
          {(selectedFeedback === "Excellent" ||
            selectedFeedback === "Good") && (
            <div className="flex flex-col items-end justify-center h-[145px]">
              <textarea
                onChange={(e) => {
                  setReviewString(e.target.value);
                }}
                name="good-feedback"
                id=""
                className="w-full px-4 py-2 h-20 outline-none border-[1px] border-gray-300 rounded-md resize-none focus:border-black hover:border-black"
                maxLength={1000}
              ></textarea>
              <div className="text-sm text-gray-600 pt-2">
                {reviewString.length} / 1000
              </div>
            </div>
          )}
          {/* For other Negative Reviews */}
          {
            (selectedFeedback === "Poor") && (
            <div className="text-left h-[200px] text-xs flex flex-col justify-center">
              <p className="text-sm mb-3">
                Sorry to hear that! What was the problem?
              </p>
              <div>
                {negativeFeedbackReasons.map((element) => (
                  <button
                    onClick={() => {
                      setSelectedNegativeFeedbacks((prev) =>
                        selectedNegativeFeedbacks.find(
                          (ele) => ele.title === element.title
                        )
                          ? selectedNegativeFeedbacks.filter(
                              (ele) => ele.title !== element.title
                            )
                          : [...prev, element]
                      );
                    }}
                    className={`${
                      selectedNegativeFeedbacks.find(
                        (ele) => ele.title === element.title
                      )
                        ? "border-black"
                        : "border-gray-300"
                    } font-medium px-3 py-2 m-1 border-[1px] rounded-[4px] bg-white hover:scale-[1.01] box-shadow-hover`}
                    key={element.title}
                  >
                    {element.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmitFeedback}
        className="mt-3 h-12 w-96 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-400 hover:scale-105"
      >
        Share with Temu
      </button>
    </div>
  );
};

export default FeedbackCard;
