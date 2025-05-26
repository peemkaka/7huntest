'use client'
import React from 'react'
import { Item } from '@/types/todo'

type Props ={
    item:Item;
    onClick:(item:Item)=>void;
}

function ItemButton({item,onClick}:Props) {
  return (
    <button
        onClick={()=>onClick(item)}
        className='bg-white text-black px-4 py-2 rounded mb-2 w-full border-[1.5px] hover:bg-gray-200 cursor-pointer'
    >
        {item.name}
    </button>
  )
}

export default ItemButton