import { FaCheck } from "react-icons/fa";

type negativeFeedbackReasonsType = {
  title: string;
  desc: string;
  options: string[];
  details: string;
  selectedOption: string[];
};


const NegativeFeedbackSelection: React.FC<{
  title: string;
  buttonList: negativeFeedbackReasonsType[];
  selectedFeedbacks: negativeFeedbackReasonsType[];
  setSelectedFeedbacks: React.Dispatch<
    React.SetStateAction<negativeFeedbackReasonsType[]>
  >;
}> = ({ title ,buttonList, selectedFeedbacks, setSelectedFeedbacks }) => {
  return (
    <div>
      {/* Feedback Selection Menu */}
      <div className="text-left h-[200px] text-xs flex flex-col justify-center">
        <p className="text-sm mb-3">
          {title}
        </p>
        <div>
          {buttonList.map((element) => (
            <button
              onClick={() => {
                setSelectedFeedbacks((prev) =>
                  selectedFeedbacks.find((ele) => ele.title === element.title)
                    ? selectedFeedbacks.filter(
                        (ele) => ele.title !== element.title
                      )
                    : [...prev, element]
                );
              }}
              className={`${
                selectedFeedbacks.find((ele) => ele.title === element.title)
                  ? "border-black"
                  : "border-gray-300"
              } font-medium px-4 py-2 m-1 border-[1px] rounded-[4px] bg-white hover:scale-[1.01] box-shadow-hover relative`}
              key={element.title}
            >
              <FaCheck
                className={`${
                  selectedFeedbacks.find((ele) => ele.title === element.title)
                    ? "flex"
                    : "hidden"
                } absolute bg-black p-1 w-[14px] h-[14px] rounded-sm top-0 left-0 text-white`}
              />
              {element.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NegativeFeedbackSelection;
