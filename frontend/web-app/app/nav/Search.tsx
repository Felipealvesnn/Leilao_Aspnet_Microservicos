"use client";
import { useParamsStore } from "@/hooks/useParamsStore";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useShallow } from "zustand/shallow";
// import { Button } from "flowbite-react";

export default function Search() {
  const params = useParamsStore(
    useShallow((state) => ({
      searchTerm: state.searchTerm,
      setParams: state.setParams,
    }))
  );

  return (
    <div
      className="flex w-[50%] items-center
    boder-2 rounded-full py-2 shadow-sm
    "
    >
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            params.setParams({ searchTerm: params.searchTerm });
          }
        }}
        value={params.searchTerm}
        onChange={(e) => params.setParams({ searchTerm: e.target.value })}
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
      <button
        onClick={() => params.setParams({ searchTerm: params.searchTerm })}
      >
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
