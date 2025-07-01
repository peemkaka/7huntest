import { itemType } from "@/types/item";
import React from "react";
type ItemButtonProps = {
  item: itemType;
  className?: string;
  onClick: (item: itemType) => void;
};

function ItemButton({ item, className, onClick }: ItemButtonProps) {
  return (
    <div className="flex flex-col gap-6 justify-center p-4">
      <button
        onClick={() => onClick(item)}
        className={
          className
            ? className
            : "bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        }
      >
        {item.name}
      </button>
    </div>
  );
}

export default ItemButton;
