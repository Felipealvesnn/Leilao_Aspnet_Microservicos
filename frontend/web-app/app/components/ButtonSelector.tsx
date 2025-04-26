import { Button, ButtonGroup } from "flowbite-react";
import React from "react";

interface ButtonSelectorProps<T extends string | number> {
  options: {
    label: string;
    value: T;
    icon?: React.ElementType;
  }[];
  selected: T;
  onSelect: (value: T) => void;
}

export function ButtonSelector<T extends string | number>({
  options,
  selected,
  onSelect,
}: ButtonSelectorProps<T>) {
  return (
    <ButtonGroup>
      {options.map(({ label, value, icon: Icon }) => {
        const isSelected = selected === value;
        return (
          <Button
            key={String(value)}
            onClick={() => onSelect(value)}
            className={`flex items-center gap-2 border  font-semibold transition-all duration-150 ease-in-out
              ${isSelected
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-800 text-white border-transparent hover:bg-gray-700 hover:text-white"}
            `}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
