import { TodoItemType } from "@/types/todoItem";
import React from "react";

function TodoForm({
  handleInputChange,
  handleAddTodo,
  isEditMode,
  todoData,
}: {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  isEditMode: boolean;
  todoData: TodoItemType;
}) {
  return (
    <div className="flex flex-row mb-4 items-center ">
      <label className="block text-gray-700 text-sm font-bold mb-2 my-auto">
        New Todo:
      </label>
      <input
        type="text"
        onChange={handleInputChange}
        value={todoData.title}
        placeholder="Enter todo item"
        className="outline-none bg-gray-100 px-2 rounded-md mx-2"
      />
      <button onClick={handleAddTodo}>{isEditMode ? "update" : "Add"}</button>
    </div>
  );
}

export default TodoForm;
