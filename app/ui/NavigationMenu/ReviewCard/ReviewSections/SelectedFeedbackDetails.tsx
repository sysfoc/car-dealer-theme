import { FaCheck } from "react-icons/fa";
import TextareaFeedbackCard from "./TextareaFeedbackCard";

type negativeFeedbackReasonsType = {
  title: string;
  desc: string;
  options: string[];
  details: string;
  selectedOption: string[];
};

const SelectedFeedbackDetails: React.FC<{
  selectedFeedback: negativeFeedbackReasonsType;
  setSelectedFeedback: React.Dispatch<
    React.SetStateAction<negativeFeedbackReasonsType[]>
  >;
}> = ({ selectedFeedback, setSelectedFeedback }) => {
  return (
    <div>
      {/* Feedback Selection Menu */}
      <div className="text-left h-fit mt-3 text-xs flex flex-col justify-center">
        <div className="text-sm font-semibold mb-2">
          {selectedFeedback.title}
        </div>
        <div className="text-xs mb-2">{selectedFeedback.desc}</div>
        <div>
          {selectedFeedback.options.map((element) => (
            <button
              onClick={() => {
                setSelectedFeedback((prev) => {
                  const updatedFeedback = prev.map((feedback) =>
                    feedback.title === selectedFeedback.title
                      ? {
                          ...feedback,
                          selectedOption: feedback.selectedOption.includes(
                            element
                          )
                            ? feedback.selectedOption.filter(
                                (opt) => opt !== element
                              )
                            : [...feedback.selectedOption, element],
                        }
                      : feedback
                  );
                  return updatedFeedback;
                });
              }}
              className={`
                ${
                  selectedFeedback.selectedOption.includes(element)
                    ? "border-black"
                    : "border-gray-300"
                }
               font-medium px-4 py-2 m-1 border-[1px] rounded-[4px] bg-white hover:scale-[1.01] box-shadow-hover relative`}
              key={element}
            >
              <FaCheck
                className={`
                  ${
                    selectedFeedback.selectedOption.includes(element)
                      ? "flex"
                      : "hidden"
                  }
                 absolute flex bg-black p-1 w-[14px] h-[14px] rounded-sm top-0 left-0 text-white`}
              />
              {element}
            </button>
          ))}
        </div>
        <TextareaFeedbackCard
          string={selectedFeedback.details}
          setString={(value) => {
            setSelectedFeedback((prev) => {
              const updatedFeedback = prev.find(
                (ele) => ele.title === selectedFeedback.title
              );
              if (updatedFeedback) updatedFeedback.details = value;
              return [...prev];
            });
          }}
        />
      </div>
    </div>
  );
};

export default SelectedFeedbackDetails;
