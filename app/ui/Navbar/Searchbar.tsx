'use client'
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if(!searchValue) return;

    console.log("Searching for: " + searchValue);
    setSearchValue('')
  };
  return (
    <div className="w-full h-full  bg-white overflow-hidden rounded-full px-1 flex justify-between items-center relative">
      <input
        type="text"
        onChange={changeValue}
        className="h-full min-w-0 flex-grow p-3 bg-transparent focus:outline-none focus:bg-white"
        placeholder="Search a product"
        value={searchValue}
      />
      <button
        onClick={handleSearch}
        className="bg-black hover:bg-gray-700 text-white rounded-full w-9 h-9"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
