import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";
import { SlTag } from "react-icons/sl";

type MessageSection = "home" | "promotion" | "order";
interface MessagesHomeCardProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<MessageSection>>;
}

const MessagesHomeCard: React.FC<MessagesHomeCardProps> = ({
  setCurrentSection,
}) => {
  return (
    <div className="h-full">
      {/* Promotion */}
      <button
        className="hover:bg-gray-200 w-full"
        onClick={() => {
          setCurrentSection("promotion");
        }}
      >
        <div className="flex p-3 select-none">
          <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
            <SlTag size={22} />
          </div>
          <div className="ml-3 h-12 flex flex-col items-start justify-center gap-2 flex-grow ">
            <p className="text-sm font-semibold">Promotions</p>
            <p className="text-xs text-gray-500">
              Don&apos;t miss out on exclusive promotions.
            </p>
          </div>
        </div>
      </button>
      <div className="w-4/5 ml-auto border-b-[1px] border-gray-300"></div>
      {/* Order & Shipping */}
      <button
        className="hover:bg-gray-200 w-full"
        onClick={() => {
          setCurrentSection("order");
        }}
      >
        <div className="flex p-3 select-none">
          <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
            <MdOutlineRequestPage size={25} />
          </div>
          <div className="ml-3 h-12 flex flex-col items-start justify-center gap-2 flex-grow ">
            <p className="text-sm font-semibold">Orders & Shipping</p>
            <p className="text-xs text-gray-500">Keep up with your orders.</p>
          </div>
        </div>
      </button>
      <div className="w-full ml-auto border-b-4 border-gray-100"></div>

      {/* Chat history */}
      {/* No Chat history */}
      <div className="h-[calc(90vh-201px)] flex flex-col justify-center items-center">
        <div className="w-32 h-32  text-gray-300 flex items-center justify-center">
          <IoChatbubblesOutline size={80} />
        </div>
        <p className="text-base font-semibold">No chat history yet</p>
      </div>
    </div>
  );
};

export default MessagesHomeCard;
