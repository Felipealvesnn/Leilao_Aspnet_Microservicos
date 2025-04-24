import React from "react";
import { FaSearch } from "react-icons/fa";
// import { Button } from "flowbite-react";

export default function Search() {
  return (
    <div
      className="flex w-[50%] items-center
    boder-2 rounded-full py-2 shadow-sm
    "
    >
      <input
        type="text"
        className="flex-grow pl-5 bg-transparent
        focus:outline-none
        border-transparent
        focus:border-transparent
        focus:ring-0
        text-sm text-gray-700
        "
        placeholder="Search"
      ></input>
      <button>
        <FaSearch
          size={34}
          className="bg-red-400
        text-white rounded-full p-2 cursor-pointer mx-2

        "
        />
      </button>
    </div>
  );
}
