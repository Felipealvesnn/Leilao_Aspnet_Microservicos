import { useParamsStore } from "@/hooks/useParamsStore";
import { Button, ButtonGroup, Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";
import { useShallow } from "zustand/shallow";

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
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex  items-center">
        <span className="uppercase text-sm text-gray-500 mb-1 mr-2">
          Filter by
        </span>
        <Dropdown
          label={
            filterButtons.find((f) => f.value === params.filterBy)?.label ||
            "Choose filter"
          }
          dismissOnClick={true}
          className="!bg-gray-800 text-white rounded-md shadow"
          renderTrigger={() => (
            <button
              className={`flex items-center px-4 py-2 rounded-md font-semibold ${
                params.filterBy
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {filterButtons.find((f) => f.value === params.filterBy)?.label ||
                "Choose filter"}
            </button>
          )}
        >
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <DropdownItem
              key={value}
              onClick={() => params.setParams({ filterBy: value })}
              className={`flex items-center gap-2 ${
                params.filterBy === value
                  ? "bg-red-100 text-red-600 font-semibold"
                  : ""
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order by</span>
        <ButtonGroup>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => params.setParams({ orderBy: value })}
              color={`${params.orderBy === value ? "red" : "gray"}`}
            >
              <Icon className="mr-3 h-4 w-4" />
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <ButtonGroup>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => params.setParams({ pageSize: value })}
              color={`${params.pageSize === value ? "red" : "gray"}`}
              className="focus:ring-0"
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
