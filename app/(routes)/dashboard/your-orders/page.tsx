import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function SearchSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Top Navigation & Search Section in One Line */}
      <div className="flex justify-between items-center border-b pb-2 text-gray-700 text-sm font-medium">
        <div className="flex gap-4">
          <Link href="/dashboard/your-orders/all" className="cursor-pointer hover:text-blue-500">All Orders</Link>
          <Link href="/dashboard/your-orders/processing" className="cursor-pointer hover:text-blue-500">Processing</Link>
          <Link href="/dashboard/your-orders/shipped" className="cursor-pointer hover:text-blue-500">Shipped</Link>
          <Link href="/dashboard/your-orders/delivered" className="cursor-pointer hover:text-blue-500">Delivered</Link>
          <Link href="/dashboard/your-orders/returns" className="cursor-pointer hover:text-blue-500">Returns</Link>
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
      
      {/* Content Section */}
      <div className="mt-28 flex flex-col items-center justify-center text-center text-gray-500">
      <HiOutlineClipboardDocumentList fontSize={100} />
       <span>You do not have any orders.</span> 
      </div>
    </div>
  );
}
