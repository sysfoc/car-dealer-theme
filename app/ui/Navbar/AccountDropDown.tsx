import Image from "next/image";
import Link from "next/link";

export default function AccountDropDown() {
  return (
    <Link
      href="/"
      className="text-white hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/unknownProfile.jpg"
          alt="Account picture"
          width={40}
          height={40}
          quality={70}
          priority={true}
          style={{ objectFit: "contain" }} // Ensures the image covers the area without distortion
        />
      </div>
      <div className=" flex 1.5xl:hidden">
      <p >Orders <br/>& Account</p>
      </div>
      <div className="hidden 1.5xl:block">
        <p>Hello, User</p>
      <p className="font-bold" >Orders & Account</p>
      </div>
    </Link>
  );
}
