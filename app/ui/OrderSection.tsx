import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const orderTypes = ["all", "processing", "shipped", "delivered", "returns"];

type OrderSectionProps = {
  orderType: (typeof orderTypes)[number];
};

export default function OrderSection({ orderType }: OrderSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center border-b pb-2 text-gray-700 text-sm font-medium">
        <div className="flex gap-4">
          {orderTypes.map((type) => (
            <Link
              key={type}
              href={`/dashboard/your-orders/${type}`}
              className={`cursor-pointer hover:text-blue-500 ${
                type === orderType ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Link>
          ))}
        </div>
        <div className="flex items-center border px-4 py-2 bg-white rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Item name / Order ID / Tracking No."
            className="w-[300px] focus:ring-0 outline-none border-none bg-transparent text-gray-700"
          />
          <FaSearch className="text-gray-500" size={18} />
        </div>
      </div>
      <div className="mt-28 flex flex-col items-center justify-center text-center text-gray-500">
        <HiOutlineClipboardDocumentList fontSize={100} />
        <span>No {orderType} orders found.</span>
      </div>
    </div>
  );
}
