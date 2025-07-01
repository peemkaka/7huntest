"use client";
import TodoForm from "@/components/todoUi/TodoForm";
import TodoList from "@/components/todoUi/TodoList";
import { TodoItemType } from "@/types/todoItem";
import React from "react";

const mockupItems = [
  {
    id: 1,
    title: "Sample Todo Item",
    completed: true,
  },
  {
    id: 2,
    title: "Sample Todo Ite",
    completed: false,
  },
  {
    id: 3,
    title: "Sample Todo It",
    completed: false,
  },
];

function todo() {
  const [mainList, setMainList] = React.useState<TodoItemType[]>(
    mockupItems || []
  );
  const [todoData, setTodoData] = React.useState<TodoItemType>({
    title: "",
    completed: false,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const handleAddTodo = () => {
    if (isEditMode) {
      // Update existing item
      const updatedItem = { ...todoData, completed: todoData.completed };
      setMainList((prevList) =>
        prevList.map((item) => (item.id === todoData.id ? updatedItem : item))
      );
      setTodoData({ title: "", completed: false });
      setIsEditMode(false);
    } else if (todoData.title.trim()) {
      setMainList((prevList) => [
        ...prevList,
        { ...todoData, id: prevList.length + 1, completed: false },
      ]);
      setTodoData({ title: "", completed: false });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData({ ...todoData, title: e.target.value });
  };

  const handleDeleteTodo = (id: number) => {
    setMainList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleEditData = (item: TodoItemType) => {
    setTodoData(item);
    setIsEditMode(true);
  };

  const handleCompleteTodo = (id: number) => {
    setMainList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md mx-auto shadow-md rounded-lg p-6">
        <h3 className="text-xl text-center font-bold mb-3">Todo List</h3>
        <TodoForm
          handleAddTodo={handleAddTodo}
          isEditMode={isEditMode}
          handleInputChange={handleInputChange}
          todoData={todoData}
        />
        <TodoList
          handleCompleteTodo={handleCompleteTodo}
          handleEditData={handleEditData}
          handleDeleteTodo={handleDeleteTodo}
          mainList={mainList}
        />
      </div>
    </div>
  );
}

export default todo;
