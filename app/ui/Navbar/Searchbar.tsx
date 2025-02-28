"use client";
import { useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

export default function Searchbar({ isHomePage }: { isHomePage: boolean }) {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (!searchValue) return;

    console.log("Searching for: " + searchValue);
    setSearchValue("");
  };
  return (
    <div
      className={`w-full h-full border-2 ${
        isHomePage ? "border-white" : "border-black"
      } hover:bg-gray-200 bg-white overflow-hidden rounded-full px-[1px] flex justify-between items-center relative`}
    >
      <input
        type="text"
        onChange={changeValue}
        className="h-full flex-grow p-3 bg-transparent focus:outline-none focus:bg-white text-xs font-semibold"
        placeholder="Search a product"
        value={searchValue}
        ref={inputRef}
      />
      <div
        className="
        flex items-center
        absolute
        right-[1px]"
      >
        {/* Clear button */}
        {searchValue.length > 0 && (
          <button
            className="mx-1 text-white rounded-full bg-gray-300 hover:bg-gray-500 h-4 w-4"
            onClick={() => {
              setSearchValue("");
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          >
            <RxCross2 size={12} className="mx-auto" />
          </button>
        )}
        {/* Search button */}
        <button
          onClick={handleSearch}
          className="
        bg-black hover:bg-gray-700 
        text-white 
        flex justify-center items-center rounded-full
        w-[34px] h-[34px]"
        >
          <ImSearch />
        </button>
      </div>
    </div>
  );
}
