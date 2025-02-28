import { TbPageBreak } from "react-icons/tb";
import OrangeButton from "../../OrangeButton";

function AccountReview() {
  return (
    <div className="w-full h-full text-gray-400 flex flex-col gap-2 items-center justify-center">
      <TbPageBreak size={90} />
      <div className="font-semibold text-black mt-1">Review is empty</div>
      <div className="text-sm w-[420px] text-center font-medium">
        You have no completed reviews or the reviews have been deleted.
      </div>
      <button className="w-64 h-11">
        <OrangeButton>
          <div>Go to your reviews</div>
        </OrangeButton>
      </button>
    </div>
  );
}

export default AccountReview;
