import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

type currentVisibility = "messages" | "review" | "none";

interface ReviewCardProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<currentVisibility>>;
}

const feedbacks = [
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
    options: ["Poor search results", "Don't trust this site", "Lack of Products", "Difficult to use", "Other"],
},
{
    title: "Promotions",
    desc: "What was the problem with our coupon/promotions?",
    options: ["The coupon amount was too small", "Don't know how to use my received coupons", "Other"],
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

const ReviewCard: React.FC<ReviewCardProps> = ({ setCurrentTab }) => {
  const [selectedFeedback, setSelectedFeedback] = useState<string>("");
  const handleSubmit = () => {
    setCurrentTab("none");
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCurrentTab("none");
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [setCurrentTab]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
      {/* Review box */}
      <div
        ref={ref}
        className="relative w-[640px] bg-white box-shadow overflow-y-auto rounded-md py-9 flex flex-col items-center text-center"
      >
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
          <div className="h-20 pt-5 w-[480px] flex justify-between">
            {feedbacks.map((element) => (
              <div
                key={element.title}
                onClick={() => setSelectedFeedback(element.title)}
              >
                <div className=" flex w-20 flex-col justify-center h-full items-center cursor-pointer group">
                  <div
                    className={`${
                      selectedFeedback === element.title
                        ? "border-[6px] border-black"
                        : "border-[1px] border-gray-400"
                    } w-5 h-5 rounded-full group-hover:bg-gray-200`}
                  />
                  <div>{element.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Feedback section when Review option is selected */}
        {/* <div className="mt-7 px-6">
          <div className="mt-5">Sorry to hear that! What was the problem?</div>
          <div className="mt-4"></div>
        </div> */}
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-5 h-12 w-96 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-400 hover:scale-105"
        >
          Share with Temu
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
