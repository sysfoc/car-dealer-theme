"use client";
import { userType } from "@/app/lib/definitions";
import { AppRootState } from "@/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function AccountSetting() {
  const currentUser: userType = useSelector(
    (state: AppRootState) => state.user
  );
  return (
    <section className="w-full h-full">
      {/* Profile picture */}
      <div>
        <Image
          alt="Profile Picture"
          src={currentUser.profilePicture}
          width={100}
          height={100}
          className="w-16 h-16 object-cover rounded-full pointer-events-none my-auto"
        />
      </div>
    </section>
  );
}
