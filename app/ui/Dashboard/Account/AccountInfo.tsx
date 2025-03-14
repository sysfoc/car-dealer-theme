"use client"
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import AccountReview from "./AccountReview";
import { useSelector } from "react-redux";
import { AppRootState } from "@/store";
import { User } from "firebase/auth";

function AccountInfo() {
 const currentUser = useSelector((state: AppRootState) => state.user.currentUser) as User | null;
 const displayName = currentUser?.displayName || "Guest User";
  const photoURL = currentUser?.photoURL || "/images/ProfilePic.png";

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-4 ">
        <Image
          alt="Profile Picture"
          src={photoURL}
          width={100}
          height={100}
          className="w-16 h-16 object-cover rounded-full pointer-events-none my-auto"
        />
        <div className="flex flex-col w-52">
          <button className="flex items-center text-lg gap-2 font-semibold w-fit">
            <div>{displayName}</div>
            <FaExternalLinkAlt className="text-gray-600" size={12} />
          </button>
          <div className="flex justify-between items-center font-semibold text-center text-sm">
            <div>
              {
              /* <div>{currentUser.totalReviews}</div> yahan pr current user k reviews
              any henn lekin abhi current user k object ma sirf name , pic or mail ha. 
              Bad ma dekh lennn  gy isy. Abhi dummy data dal dety hennn
              */}
              <div>0 </div>
              <div className="text-xs font-normal text-gray-600">
                Total reviews
              </div>
            </div>
            <div className="h-4/6 border-r-[1px] border-black"></div>
            <div>
            {
              /* <div>{currentUser.totalLikes}</div> yahan pr current user k Likes
              any henn lekin abhi current user k object ma sirf name , pic or mail ha. 
              Bad ma dekh lennn  gy isy. Abhi dummy data dal dety hennn
              */}
              <div>0</div>
              <div className="text-xs font-normal text-gray-600">Helpfuls</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs font-semibold flex items-center mt-4 text-green-600">
        <IoIosUnlock size={20} />
        Your information and privacy will be kept secure and uncompromised.
      </div>
      {/* separation */}
      <div className="w-full my-4 border-b-[1px]"></div>
      <div className="flex-1">
        <AccountReview />
      </div>
    </div>
  );
}

export default AccountInfo;
