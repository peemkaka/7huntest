import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemType } from "@/types/todoItem";

function TodoList({
  mainList,
  handleDeleteTodo,
  handleEditData,
  handleCompleteTodo,
}: {
  mainList: TodoItemType[];
  handleDeleteTodo: (id: number) => void;
  handleEditData: (item: TodoItemType) => void;
  handleCompleteTodo?: (id: number) => void;
}) {
  return (
    <div>
      {mainList?.map((item, index) => {
        return (
          <TodoItem
            handleEditData={handleEditData}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
