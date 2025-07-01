'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { initialItems } from "@/utils/data"
import { Item } from '@/types/todo';
import TodoList from '@/components/7hunterUi/TodoList';
import TypeColumn from '@/components/7hunterUi/TypeColumn';

export default function Home() {
  const [mainList, setMainList] = useState<Item[]>(initialItems);
  const [fruitList, setFruitList] = useState<Item[]>([]);
  const [vegetableList, setVegetableList] = useState<Item[]>([]);
  const timeouts = useRef<{ [id: string]: NodeJS.Timeout }>({});

  const baseDelay = 5000; 
  const delayIncrement = 1000; 

  const handleMoveToType = (item: Item) => {
    setMainList((prev) => prev.filter((i) => i.id !== item.id));
  
    const isFruit = item.type === "Fruit";
    const targetList = isFruit ? fruitList : vegetableList;
  
    const setTargetList = isFruit ? setFruitList : setVegetableList;
  
    setTargetList((prev) => [...prev, item]);
  
    const delay = baseDelay + targetList.length * delayIncrement;
  
    timeouts.current[item.id] = setTimeout(() => {
      setTargetList((prev) => prev.filter((i) => i.id !== item.id));
      setMainList((prev) => [...prev, item]);
    }, delay);
  };

  const handleReturnToMain = (item: Item) => {
    clearTimeout(timeouts.current[item.id]);

    if (item.type === "Fruit") {
      setFruitList((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setVegetableList((prev) => prev.filter((i) => i.id !== item.id));
    }
    setMainList((prev) => [...prev, item]);
  }

  return (
    <main className='flex flex-row pt-[16px]'>
      <TodoList onClick={handleMoveToType} items={mainList} />
      <div className='flex flex-row gap-4 w-full pl-4'>
        <TypeColumn type="Fruit" items={fruitList} onClick={handleReturnToMain} />
        <TypeColumn type="Vegetable" items={vegetableList} onClick={handleReturnToMain} />
      </div>
    </main>
  );
}
