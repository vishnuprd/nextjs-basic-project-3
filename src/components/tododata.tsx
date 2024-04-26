"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function TodoData() {
  const [value, setValue] = React.useState("");


  const mutation = useMutation({
    mutationFn: async (newTodo) => {
      const data = await axios.post('https://dummyjson.com/products', newTodo);
      console.log("data", data);
    },
  });
  

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutate({ title: value });
      alert("Task created successfully");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  


  
  return (
    <div className="flex flex-col w-[500px] ml-[650px] mt-[100px] fixed">
      <Card>
        <CardHeader>
          <CardTitle>Task Name</CardTitle>
          <CardDescription>Create a new task</CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-[450px] h-[300px]  p-[20px] ">
            <form method="post">
            <div className="flex items-center space-x-2">
              <Input
                onChange={handleChange}
                Value={value}
                className="mt-[100px]"
                type="text"
                placeholder="Create your description here"
              />
            </div>
            </form>
            <CardFooter className="mt-[50px]">
            <Button onClick={() =>   mutation.mutate({ title: value })} className="ml-[125px]">Create</Button>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}