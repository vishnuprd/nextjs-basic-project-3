"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoData({ handleSubmit,}) {
  const [value, setValue] = useState("");
  const [newTasks, setNewTasks] = React.useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
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
            <form onSubmit={handleSubmit}>
              <div className="flex items-center space-x-2">
                <Input
                  onChange={handleChange}
                  value={value}
                  className="mt-[100px]"
                  type="text"
                  placeholder="Create your description here"
                />
              </div>
              <CardFooter className="mt-[50px]">
                <Button type="submit" className="ml-[125px]">
                  Create
                </Button>
              </CardFooter>
            </form>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
