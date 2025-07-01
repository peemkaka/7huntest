import { itemType } from "@/types/item";
import React from "react";
import ItemButton from "./ItemButton";

function Column({
  fruitList,
  vegetableList,
  handleReturnToMain,
}: {
  fruitList: itemType[];
  vegetableList: itemType[];
  handleReturnToMain: (item: itemType) => void;
}) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Fruits</h2>
        {fruitList.map((item, i) => (
          <ItemButton
            onClick={handleReturnToMain}
            key={i}
            item={item}
            className="bg-green-100 p-4 rounded shadow mb-2 flex flex-col "
          />
        ))}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Vegetables</h2>
        {vegetableList.map((item, i) => (
          <ItemButton
            onClick={handleReturnToMain}
            key={i}
            item={item}
            className="bg-orange-100 p-4 rounded shadow mb-2 flex flex-col "
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
