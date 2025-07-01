"use client";
import Column from "@/components/praticeUi/Column";
import ItemButton from "@/components/praticeUi/ItemButton";
import { itemType } from "@/types/item";
import { initialItems } from "@/utils/data";
import React from "react";

function page() {
  const [mainList, setMainList] = React.useState<itemType[]>(initialItems);
  const [fruitList, setFruitList] = React.useState<itemType[]>([]);
  const [vegetableList, setVegetableList] = React.useState<itemType[]>([]);

  const timeouts = React.useRef<{ [id: string]: NodeJS.Timeout }>({});
  const baseDelay = 5000; // Base delay in milliseconds
  const delayIncrement = 1000; // Incremental delay for each item in the list

  const handleMoveToType = (item: itemType) => {
    setMainList((prev) => prev.filter((i) => i.id !== item.id));
    const isFruit = item.type === "Fruit";
    const isVegetable = item.type === "Vegetable";
    if (isFruit) {
      setFruitList((prev) => [...prev, item]);
    } else if (isVegetable) {
      setVegetableList((prev) => [...prev, item]);
    }
    const delay = baseDelay + (isFruit ? fruitList.length : vegetableList.length) * delayIncrement;
    timeouts.current[item.id] = setTimeout(() => {
      if (isFruit) {
        setFruitList((prev) => prev.filter((i) => i.id !== item.id));
      } else if (isVegetable) {
        setVegetableList((prev) => prev.filter((i) => i.id !== item.id));
      }
      setMainList((prev) => [...prev, item]);
    }, delay);
  };

  const handleReturnToMain = (item: itemType) => {
    clearTimeout(timeouts.current[item.id]);
    if (item.type === "Fruit") {
      setFruitList((prev) => prev.filter((i) => i.id !== item.id));
    }
    if (item.type === "Vegetable") {
      setVegetableList((prev) => prev.filter((i) => i.id !== item.id));
    }
    setMainList((prev) => [...prev, item]);
  };
  return (
    <div className="flex flex-row justify-center min-h-screen">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-center">Main List</h2>
        {mainList.map((item, i) => {
          return (
            <ItemButton
              key={i}
              onClick={handleMoveToType}
              item={item}
            ></ItemButton>
          );
        })}
      </div>
      <div className="flex-1">
        <Column
          handleReturnToMain={handleReturnToMain}
          fruitList={fruitList}
          vegetableList={vegetableList}
        />
      </div>
    </div>
  );
}

export default page;
