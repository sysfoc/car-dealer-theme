import Image from "next/image";
import Link from "next/link";

export default function AccountDropDown() {
  return (
    <Link
      href="/"
      as='account-details'
      className="text-white h-10 text-xs font-bold hover:bg-blue-500 pl-1 pr-3 py-2 rounded-3xl items-center flex gap-1"
    >
      <div className=" w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/unknownProfile.jpg"
          alt="Account picture"
          width={30}
          height={30}
          quality={80}
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" flex 1.5xl:hidden">
        <p>
          Orders &<br />Account
        </p>
      </div>
      <div className="hidden 1.5xl:block">
        <p>Hello, User</p>
        <p className="font-bold">Orders & Account</p>
      </div>
    </Link>
  );
}
