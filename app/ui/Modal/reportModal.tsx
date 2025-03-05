import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ReportModalProps {
  onClose: () => void;
}

export default function ReportModal({ onClose }: ReportModalProps) {
  const [reportType, setReportType] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[540px] max-w-full">
        <div className="flex justify-end">
          <IoClose
            size={35}
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center pb-3 mb-4 text-xl font-semibold">
          <span>Report this Item</span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">*Report Type</label>
          <select
            className="w-full border rounded-md py-2 outline-none hover:border-black px-3 text-sm"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="" hidden>
              Select
            </option>
            <option>There is a problem with my order</option>
            <option>Copyright and trademark</option>
            <option>Item or content is offensive</option>
            <option>Prohibited or restricted items</option>
            <option>Product information is missing or inaccurate</option>
            <option>Threat or public safety</option>
            <option>Issues other than those listed above</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            *Detail Reason
          </label>
          <div className="w-full border rounded-md p-3 text-sm h-28 relative">
            <textarea
              className="w-full h-full outline-none resize-none"
              placeholder="Please add more details to help us process your report faster. 30 character minimum. Please do not enter personal information."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={1000}
            ></textarea>
            <div className="absolute bottom-2 right-3 text-xs text-gray-500">
              {details.length}/1000
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-orange-600 font-semibold text-white py-3 px-32
           transition hover:scale-105 text-sm rounded-full"
            disabled={details.length < 30 || !reportType}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
