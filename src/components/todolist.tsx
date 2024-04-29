"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function TodoList({ handleAddTask, newTasks, }) {
  const addNewTask = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: "bmw",
      })
    })
    .then(res => res.json())
    .then(console.log);
  };

  const { data: todoData, isLoading, isError,isFetching } = useQuery<any>({
    queryKey: ['todos'],
    queryFn: () => fetch("https://dummyjson.com/products").then(res => res.json())
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error...</div>;
  }

  if (isFetching) {
    return <div>fetching</div>;
  }

  console.log(isLoading, isError, isFetching)
  return (
    <>
    <div className="flex flex-col w-[500px] ml-[50px] mt-[100px] fixed">
      <Card>
        <CardHeader>
          <CardTitle>TODO List</CardTitle>
          <CardDescription>Built To-Do List With Next.js</CardDescription>
        </CardHeader>
        <CardContent>
          {todoData.products.slice(0, 5).map((product, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox />
              {product.title}
            </div>
          ))}
         {newTasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2">
            <Checkbox />
            {task.title}
          </div>
         ))}

        </CardContent>
        <CardFooter>
          <Button  className="ml-[125px]">
            Add Todo
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  );
}
