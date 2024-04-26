import Image from "next/image";
import TodoList from "../components/todolist.tsx";
import TodoData from "../components/tododata.tsx";
export default function Home() {
  return (
   <>
   <TodoList/>
   <TodoData/>
   </>
  );
}
