import Image from "next/image";
import Link from "next/link"


const LanguageDropDownButton = () => {
  return (
    <Link
      href="/"
      className="text-white h-10 text-xs font-bold hover:bg-blue-500 px-1 py-2 rounded-3xl items-center flex gap-1"
    >
      <div className=" w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/pakistanFlag.png"
          alt="Account picture"
          width={32}
          height={32}
          quality={100}
          priority={true}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      EN
    </Link>
  )
}

export default LanguageDropDownButton