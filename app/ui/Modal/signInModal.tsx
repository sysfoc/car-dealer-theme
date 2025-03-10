import { useState } from "react";
import {
  FaFacebook,
  FaApple,
  FaMobileAlt,
  FaTimes,
  FaLock,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed top-80 shadow-lg inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="font-semibold text-xl text-center">Sign in / Register</h2>
        <div className="flex justify-center items-center text-green-600">
          <FaLock fontSize={12} className="mr-1"/> 
          <p className="text-center text-xs my-2 flex items-center justify-center">
            All data will be encrypted
          </p>
          </div>

        <div className="flex justify-between my-4 text-center text-sm">
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-pink-50 rounded-full p-2">
            <FaShippingFast size={20} />
            </div>
            <p className="text-black font-semibold">Free shipping</p>
            <p className="text-xs">Incredible</p>
          </div>
          <div className="flex-1 border-l border-gray-300 flex flex-col items-center">
          <div className="bg-pink-50 rounded-full p-2">
            <FaUndoAlt size={20} />
            </div>
            <p className="text-black font-semibold">Free returns</p>
            <p className="text-xs">Up to 90 days</p>
          </div>
        </div>

        <p className="text-sm font-semibold">Please enter your email address</p>
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button className="w-full rounded-full bg-orange-500 text-white py-2 mt-4 hover:bg-orange-600">
          Continue
        </button>

        <p className="text-center text-xs mt-2 underline">
          Trouble signing in?
        </p>

        <p className="text-center text-sm text-gray-700 mt-7 mb-2">
          Or continue with other ways
        </p>

        <div className="flex justify-center items-center gap-4 text-white text-lg">
          <button className="bg-white hover:scale-105 transition-all">
            <FcGoogle fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all">
            <FaFacebook className="text-blue-600" fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all">
            <FaApple className="text-black" fontSize={30} />
          </button>
          <button className="hover:scale-105 transition-all">
            <FaMobileAlt className="text-gray-700" fontSize={30} />
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our{" "}
          <span className="text-blue-500">Terms of Use</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
