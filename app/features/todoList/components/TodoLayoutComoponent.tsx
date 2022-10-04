import { HomeIcon } from "@heroicons/react/24/outline";
import { Todo } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getTodos } from "../todoList.api";
import TodoContainer from "./TodoContainer";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    todos: await getTodos(),
  };
};

export interface TodoLayoutComoponentProps {
  todos: Todo[];
  completedTasks: Todo[];
  showAllTodos: boolean;
  changeShowAllTodos: () => void;
}
export default function TodoLayoutComponent(props: TodoLayoutComoponentProps) {
  return (
    <>
      <div className="w-full relative flex flex-col items-center px-10 py-10 bg-[#22212C] text-[#837E9F] h-full rounded-md">
        <Link
          className="absolute top-[-10px] left-1/2 translate-x-1/2 text-[#837E9F]"
          to="/"
        >
          <HomeIcon width={30} />
        </Link>
        {/* @ts-ignore */}
        <TodoContainer
          todos={props.todos}
          showAllTodos={props.showAllTodos}
          changeShowAllTodos={props.changeShowAllTodos}
          completedTasks={props.completedTasks}
        />
      </div>
    </>
  );
}
