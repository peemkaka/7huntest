'use client'
import React from 'react'
import { Item } from '@/types/todo';
import ItemButton from './ItemButton';

type Props ={
    items:Item[];
    onClick:(item:Item)=>void;
}

function TodoList({items,onClick}:Props) {
  return (
    <div className='p-4 border rounded w-full'>
        <h2 className='text-lg font-bold mb-4'>Todo List</h2>
        {items.map((item)=>(
            <ItemButton key={item.id} item={item} onClick={onClick}/>   
        ))}
    </div>
  )
}

export default TodoList