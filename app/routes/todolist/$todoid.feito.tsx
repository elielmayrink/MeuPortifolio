import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { completeTodo } from "~/features/todoList/todoList.api";

export const loader: LoaderFunction = async ({ params }) => {
  await completeTodo(params.todoid!);
  return redirect("todolist");
};
