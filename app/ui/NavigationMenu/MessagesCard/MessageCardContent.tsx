import MessagesHomeCard from "./MessagesHomeCard";
import MessagesOrderCard from "./MessagesOrderCard";
import MessagesPromotionCard from "./MessagesPromotionCard";

type MessageSection = "home" | "promotion" | "order";

interface MessageCardContentProps {
    currentSection: MessageSection;
    setCurrentSection: React.Dispatch<React.SetStateAction<MessageSection>>;
}

const MessageCardContent: React.FC<MessageCardContentProps> = ({currentSection, setCurrentSection}) => {

  return (
    <div className="h-[calc(90vh-52px)] w-full">
      {/* When at Home */}
      <div className={`${currentSection==='home'? 'block': 'hidden'}`}>
        <MessagesHomeCard setCurrentSection={setCurrentSection} />
      </div>

      {/* When at Promotions Section */}
      <div className={`${currentSection==='promotion'? 'block': 'hidden'}`}>
        <MessagesPromotionCard />
      </div>

      {/* When at Orders and shopping cards */}
      <div className={`${currentSection==='order'? 'block': 'hidden'}`}>
        <MessagesOrderCard />
      </div>
    </div>
  );
};

export default MessageCardContent;
