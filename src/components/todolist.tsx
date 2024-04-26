"use client";
import React from "react";
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
import Link from "next/link";

export default function TodoList() {
  const { data: todoData, isLoading, isError } = useQuery<any>({
    queryKey: ['todos'],
    queryFn: () => fetch("https://dummyjson.com/products").then(res => res.json())
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error...</div>;
  }

  return (
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
        </CardContent>
        <CardFooter>
          <Button className="ml-[125px]">Add Todo</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
