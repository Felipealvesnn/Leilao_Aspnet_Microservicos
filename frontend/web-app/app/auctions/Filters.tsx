import { useParamsStore } from "@/hooks/useParamsStore";
import { Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";
import { useShallow } from "zustand/shallow";
import { ButtonSelector } from "../components/ButtonSelector";

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: "Alphabetical",
    icon: AiOutlineSortAscending,
    value: "make",
  },
  {
    label: "Ending soon",
    icon: AiOutlineClockCircle,
    value: "endingSoon",
  },
  {
    label: "Recently added",
    icon: BsFillStopCircleFill,
    value: "new",
  },
];

const filterButtons = [
  {
    label: "Live auctions",
    icon: GiFlame,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: GiFinishLine,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BsStopwatchFill,
    value: "finished",
  },
];

export default function Filters() {
  const params = useParamsStore(
    useShallow((state) => ({
      pageSize: state.pageSize,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
      setParams: state.setParams,
    }))
  );

  const selectedFilterLabel =
    filterButtons.find((f) => f.value === params.filterBy)?.label ||
    "Choose filter";

  return (
    <div className="flex flex-wrap gap-4 justify-between items-center mb-4">
      {/* Filter by */}
      <div className="flex items-center">
        <span className="uppercase text-sm text-gray-500 mb-1 mr-2">
          Filter by
        </span>
        <Dropdown
          label={selectedFilterLabel}
          dismissOnClick={true}
          className="!bg-gray-800 text-white rounded-md shadow"
          renderTrigger={() => (
            <button
              aria-label="Filter options"
              className={`flex items-center px-4 py-2 rounded-md font-semibold transition-all duration-150 ease-in-out ${
                params.filterBy
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {selectedFilterLabel}
            </button>
          )}
        >
          {filterButtons.map(({ label, icon: Icon, value }) => {
            // const isSelected = params.filterBy === value;
            return (
              <DropdownItem
                key={value}
                onClick={() => params.setParams({ filterBy: value })}
                
              >
                <Icon className="h-4 w-4" />
                {label}
              </DropdownItem>
            );
          })}
        </Dropdown>
      </div>

      {/* Order by usando ButtonSelector */}
      <div className="flex items-center">
        <span className="uppercase text-sm text-gray-500 mr-2">
          Order by
        </span>
        <ButtonSelector
          options={orderButtons}
          selected={params.orderBy}
          onSelect={(value: string) => params.setParams({ orderBy: value })}
        />
      </div>

      {/* Page size usando ButtonSelector */}
      <div className="flex items-center">
        <span className="uppercase text-sm text-gray-500 mr-2">
          Page size
        </span>
        <ButtonSelector
          options={pageSizeButtons.map((v) => ({ label: String(v), value: v }))}
          selected={params.pageSize}
          onSelect={(value: number) => params.setParams({ pageSize: value })}
        />
      </div>
    </div>
  );
}
