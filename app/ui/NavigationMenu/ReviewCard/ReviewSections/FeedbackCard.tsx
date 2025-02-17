import { useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import TextareaFeedbackCard from "./TextareaFeedbackCard";
import NegativeFeedbackSelection from "./NegativeFeedbackSelection";
import SelectedFeedbackDetails from "./SelectedFeedbackDetails";

type currentVisibility = "messages" | "review" | "none";
type feedbackTypes = "" | "Very poor" | "Poor" | "Fair" | "Good" | "Excellent";

type negativeFeedbackReasonsType = {
  title: string;
  desc: string;
  options: string[];
  details: string;
  selectedOption: string[];
};

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
    details: "",
    selectedOption: [],
  },
  {
    title: "Promotions",
    desc: "What was the problem with our coupon/promotions?",
    options: [
      "The coupon amount was too small",
      "Don't know how to use my received coupons",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Site Search",
    desc: "Why weren't you able to find products the you liked?",
    options: [
      "Didn't like any of the items",
      "Results were irrelevant",
      "Too few items",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Size Chart",
    desc: "What was the specific problem?",
    options: [
      "Can't find the size guide",
      "Can't find the size the model was wearing",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Shopping cart",
    desc: "What was the specific problem?",
    options: [
      "Couldn't delete multiple items together",
      "Limitations on adding items",
      "My shopping cart loads too slowly",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Checkout",
    desc: "What's your prefered payment method?",
    options: [
      "Card",
      "Paypal",
      "Klarna",
      "Afterpay",
      "Apple Pay",
      "Google Pay",
      "Affirm",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Delivery",
    desc: "What was the problem you experienced with our delivery service?",
    options: [
      "Too slow",
      "Hard to find tracking information",
      "No updates",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Returns",
    desc: "What was the reason of your return(s)?",
    options: [
      "Quality issue",
      "Missing item",
      "Inaccurate description",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Customer service",
    desc: "What area of our customer service were you dissatisfied with?",
    options: [
      "Slow reply",
      "No reply",
      "Couldn't find Customer service",
      "Can't solve the problem",
      "Couldn't understand my questions",
      "Other",
    ],
    details: "",
    selectedOption: [],
  },
  {
    title: "Other",
    desc: "Can you describe the problem?",
    options: [],
    details: "",
    selectedOption: [],
  },
];

type FeedbackCardProps = {
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTab: React.Dispatch<React.SetStateAction<currentVisibility>>;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  setIsFormSubmitted,
  setCurrentTab,
}) => {
  const [reviewString, setReviewString] = useState<{
    Good: string;
    Excellent: string;
  }>({ Good: "", Excellent: "" });
  const [selectedFeedback, setSelectedFeedback] = useState<feedbackTypes>("");
  const [isFeedbackNotEmpty, setIsFeedbackNotEmpty] = useState(false);

  const [selectedFairFeedbacks, setSelectedFairFeedbacks] = useState<
    negativeFeedbackReasonsType[]
  >([]);
  const [selectedPoorFeedbacks, setSelectedPoorFeedbacks] = useState<
    negativeFeedbackReasonsType[]
  >([]);
  const [selectedVeryPoorFeedbacks, setSelectedVeryPoorFeedbacks] = useState<
    negativeFeedbackReasonsType[]
  >([]);

  const handleSubmitFeedback = () => {
    if (selectedFeedback === "") {
      setIsFeedbackNotEmpty(true);
    } else {
      setIsFormSubmitted(true);
      // Put Backend Logic Here for Feedback Submission
      console.log(
        reviewString,
        selectedFairFeedbacks.map((feedback) => ({
          title: feedback.title,
          selectedOptions: feedback.selectedOption,
          details: feedback.details,
        })),
        selectedPoorFeedbacks.map((feedback) => ({
          title: feedback.title,
          selectedOptions: feedback.selectedOption,
          details: feedback.details,
        })),
        selectedVeryPoorFeedbacks.map((feedback) => ({
          title: feedback.title,
          selectedOptions: feedback.selectedOption,
          details: feedback.details,
        }))
      );
    }
  };

  return (
    <div className="relative w-[640px] max-h-[640px] bg-white box-shadow overflow-y-auto rounded-md py-9 flex flex-col items-center text-center">
      {/* Close Button */}
      <button
        onClick={() => setCurrentTab("none")}
        className="absolute right-1 top-1 hover:bg-gray-200 rounded-full p-1"
      >
        <IoMdClose size={30} />
      </button>

      {/* Feedback Section */}
      <section className="max-h-[450px] w-full overflow-y-auto custom-scrollbar-vertical">
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
            className={`mt-3 px-6 bg-gray-100 w-[560px] rounded-lg mx-auto  transition-all flex flex-col justify-center`}
          >
            {/* For Excellent Reviews */}
            {selectedFeedback === "Excellent" && (
              <TextareaFeedbackCard
                string={reviewString.Excellent}
                setString={(value: string) =>
                  setReviewString((prev) => ({ ...prev, Excellent: value }))
                }
              />
            )}
            {/* For Good Reviews */}
            {selectedFeedback === "Good" && (
              <TextareaFeedbackCard
                string={reviewString.Good}
                setString={(value: string) =>
                  setReviewString((prev) => ({ ...prev, Good: value }))
                }
              />
            )}
            {/* For Fair Reviews */}
            {selectedFeedback === "Fair" && (
              <div>
                <NegativeFeedbackSelection
                  title={"Sorry to hear that! What was the problem?"}
                  buttonList={negativeFeedbackReasons}
                  selectedFeedbacks={selectedFairFeedbacks}
                  setSelectedFeedbacks={setSelectedFairFeedbacks}
                />
                {selectedFairFeedbacks.length > 0 && (
                  <div>
                    <div className="w-full border-b-[1px]"></div>
                    {/* Selected Fair Reviews Details */}
                    {[...selectedFairFeedbacks].reverse().map((feedback) => (
                      <SelectedFeedbackDetails
                        key={feedback.title}
                        selectedFeedback={feedback}
                        setSelectedFeedback={setSelectedFairFeedbacks}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* For Poor Reviews */}
            {selectedFeedback === "Poor" && (
              <div>
                <NegativeFeedbackSelection
                  title={"Sorry to hear that! What was the problem?"}
                  buttonList={negativeFeedbackReasons}
                  selectedFeedbacks={selectedPoorFeedbacks}
                  setSelectedFeedbacks={setSelectedPoorFeedbacks}
                />
                {selectedPoorFeedbacks.length > 0 && (
                  <div>
                    <div className="w-full border-b-[1px]"></div>
                    {/* Selected Poor Reviews Details */}
                    {[...selectedPoorFeedbacks].reverse().map((feedback) => (
                      <SelectedFeedbackDetails
                        key={feedback.title}
                        selectedFeedback={feedback}
                        setSelectedFeedback={setSelectedPoorFeedbacks}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* For Very Poor Reviews */}
            {selectedFeedback === "Very poor" && (
              <div>
                <NegativeFeedbackSelection
                  title={"Sorry to hear that! What was the problem?"}
                  buttonList={negativeFeedbackReasons}
                  selectedFeedbacks={selectedVeryPoorFeedbacks}
                  setSelectedFeedbacks={setSelectedVeryPoorFeedbacks}
                />
                {selectedVeryPoorFeedbacks.length > 0 && (
                  <div>
                    <div className="w-full border-b-[1px]"></div>
                    {/* Selected Very Poor Reviews Details */}
                    {[...selectedVeryPoorFeedbacks].reverse().map((feedback) => (
                      <SelectedFeedbackDetails
                        key={feedback.title}
                        selectedFeedback={feedback}
                        setSelectedFeedback={setSelectedVeryPoorFeedbacks}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

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
