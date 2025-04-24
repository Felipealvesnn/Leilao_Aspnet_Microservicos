import { useParamsStore } from "@/hooks/useParamsStore";
import { Button, ButtonGroup } from "flowbite-react";
import React from "react";
import { useShallow } from "zustand/shallow";



const pageSizeButtons = [4, 8, 12];

export default function Filters() {
  const params = useParamsStore(
    useShallow((state) => ({
      pageSize: state.pageSize,
      setParams: state.setParams,
    }))
  );
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">
          Page size
          </span>
          <ButtonGroup  >
            {pageSizeButtons.map((value, i) => (
              <Button
                key={i}
                onClick={() =>params.setParams({ pageSize: value })}
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
