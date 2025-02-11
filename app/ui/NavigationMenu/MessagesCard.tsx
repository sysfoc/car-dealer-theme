import { IoCloseOutline } from "react-icons/io5";
import {
} from "react-icons/md";
import { RiMailSettingsLine } from "react-icons/ri";

interface MessageCardProps {
  setShowMessages: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessagesCard: React.FC<MessageCardProps> = ({ setShowMessages }) => {
  return (
    <div className="absolute w-[375px] h-[90vh] z-1 bg-white box-shadow rounded-md right-14 bottom-0">
      <div className="h-[51px] px-3 relative flex justify-center items-center">
        <p className="text-lg">Messages</p>
        <div className="absolute flex right-0 pr-3">
          <button className="rounded-full p-2 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
            <RiMailSettingsLine size={30} />
          </button>
          <button onClick={() => setShowMessages(false)} className="rounded-full p-2 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
            <IoCloseOutline size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesCard;
