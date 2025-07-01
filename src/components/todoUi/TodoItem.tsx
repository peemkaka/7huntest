import { TodoItemType } from "@/types/todoItem";
import React from "react";

function TodoItem({
  item,
  handleDeleteTodo,
  handleEditData,
  handleCompleteTodo,
}: {
  item?: TodoItemType;
  handleDeleteTodo: (id: number) => void;
  handleEditData: (item: TodoItemType) => void;
  handleCompleteTodo?: (id: number) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md mb-4">
      {item && (
        <div className="flex flex-row justify-between w-full items-center">
          <h3 className="text-lg font-semibold">
            {item.completed ? (
              <button
                onClick={() => handleCompleteTodo?.(item.id || 0)}
                className="cursor-pointer"
              >
                [complete]
              </button>
            ) : (
              <button
                onClick={() => handleCompleteTodo?.(item.id || 0)}
                className="cursor-pointer"
              >
                [ ]
              </button>
            )}
          </h3>
          <h3 className="text-lg font-semibold">
            {item.id} {item.title}
          </h3>
          <div className="flex space-x-2 text-sm items-center">
            <button
              onClick={() => handleEditData(item)}
              className="cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (item.id) handleDeleteTodo(item.id);
              }}
              className="cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
