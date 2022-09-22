import { ActionArgs, redirect } from "@remix-run/node";
import { deleteTodo } from "~/features/todoList/todoList.api";

export async function action({ params }: ActionArgs): Promise<Response> {
  // @ts-ignore
  const id = params.todoid;
  // @ts-ignore

  deleteTodo(id);

  return redirect(`todolist`);
}
