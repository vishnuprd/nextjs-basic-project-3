"use client";
import Image from "next/image";
import TodoList from "../components/todolist.tsx";
import TodoData from "../components/tododata.tsx";
import React, { useState } from "react";

export default function Home() {
  const [newTasks, setNewTasks] = React.useState([]); 
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask();
    alert("Task Created");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTask = () => {
    console.log("Adding task:", value);
    const newTask = {
      id: Date.now(),
      title: value, 
    };
    console.log("New task:", newTask);
    setNewTasks([...newTasks, newTask]); 
    console.log("Updated tasks:", newTasks);
    setValue("");
  };

  return (
    <>
      <TodoData handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      <TodoList handleAddTask={handleAddTask} newTasks={newTasks} />
    </>
  );
}
