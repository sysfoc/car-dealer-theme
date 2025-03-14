"use client";
import { useState } from "react";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { User } from "firebase/auth";
import { useSelector } from "react-redux";
import { AppRootState } from "@/store";
import SignInModal from "@/app/ui/Modal/signInModal";

export default function SwitchAccountModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentUser = useSelector(
    (state: AppRootState) => state.user.currentUser
  ) as User | null;

  if (!currentUser) return null;

  const [selectedEmail, setSelectedEmail] = useState<string>(
    currentUser?.email || ""
  );

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    const visible = name.slice(0, 4);
    return `${visible}***@${domain}`;
  };

  return (
    <div className="fixed top-80 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
      <div className="bg-white h-[450px] w-[500px] rounded-md p-6 shadow-xl border-[1px] border-gray-200 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-xl font-semibold text-center mb-3">
          Switch accounts
        </h2>

        <div className="flex items-center justify-center text-green-600 gap-2 mb-4 text-sm font-medium">
          <FaLock />
          <span>All data will be encrypted</span>
        </div>
        {isOpen && <SignInModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        <div className="space-y-3">
          <div
           // onClick={() => setSelectedEmail(currentUser?.email || "")}
           onClick={() => {
            setSelectedEmail(currentUser?.email || "");
            onClose();
          }}
            className={`flex items-center justify-between px-4 py-2 rounded-lg border cursor-pointer ${
              selectedEmail === currentUser.email
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={currentUser.photoURL || "/images/unknownProfile.jpg"}
                alt="Profile Pic"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium">{currentUser.displayName}</span>
                <span className="text-sm text-gray-500">
                  {maskEmail(currentUser.email || "")}
                </span>
              </div>
            </div>
            {selectedEmail === currentUser.email && (
              <FaCheck className="text-green-500" />
            )}
          </div>

          <div
            onClick={()=>setIsOpen(true)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50"
          >
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              <MdAdd size={20} />
            </div>
            <span className="font-medium">Add account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
