import { IoMailOutline, IoShareOutline } from "react-icons/io5";
import { FaFacebook, FaPinterestP } from "react-icons/fa";
import { FaLink, FaXTwitter } from "react-icons/fa6";

interface ShareModalProps {
  reviewId: number;
  showShareModal: number | null;
  setShowShareModal: (id: number | null) => void;
  onCopySuccess: () => void;
}

export default function ShareModal({
  reviewId,
  showShareModal,
  onCopySuccess,
  setShowShareModal,
}: ShareModalProps) {
  const productLink = `Item ID: ${reviewId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(productLink);
    onCopySuccess();
  };

  return (
    <div className="relative">
      <span
        className="flex items-center gap-1 cursor-pointer text-black"
        onMouseEnter={() => setShowShareModal(reviewId)}
        onMouseLeave={() => setShowShareModal(null)}
      >
        <IoShareOutline fontSize={20} /> Share
      </span>
      {showShareModal === reviewId && (
        <div
          className="absolute bottom-5 left-0 bg-white shadow-md border-[1px] border-gray-400 rounded-md p-3 w-56"
          onMouseEnter={() => setShowShareModal(reviewId)}
          onMouseLeave={() => setShowShareModal(null)}
        >
          <p className="text-gray-700 text-sm text-center font-semibold mb-1">
            Share to
          </p>
          <div className="flex items-center justify-between px-10 mb-2">
            <span className="text-gray-500 text-sm">{productLink}</span>
            <span
              className="cursor-pointer border text-gray-500 border-gray-500 rounded-full text-xs py-[1px] px-2"
              onClick={handleCopy}
            >
              copy
            </span>
          </div>
          <div className="flex justify-center gap-2">
            <IoMailOutline
              fontSize={20}
              className="text-white bg-blue-600 cursor-pointer p-1 rounded-full"
            />
            <FaFacebook className="text-blue-600 cursor-pointer text-xl rounded-full" />
            <FaXTwitter
              fontSize={20}
              className="text-white p-1 bg-black cursor-pointer rounded-full"
            />
            <FaPinterestP
              fontSize={20}
              className="text-white bg-red-600 p-1 cursor-pointer rounded-full"
            />
            <FaLink
              fontSize={20}
              className="text-gray-700 p-1 cursor-pointer text-xl border border-gray-500 rounded-full"
              onClick={handleCopy}
            />
          </div>
        </div>
      )}
    </div>
  );
}
