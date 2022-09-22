import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createTodo } from "~/features/todoList/todoList.api";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const todo = formData.get("todo");
  const description = formData.get("description");

  if (
    typeof todo !== "string" ||
    typeof description !== "string" ||
    todo === "" ||
    description === ""
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

  const newTodo = { todo, description };

  await createTodo(newTodo);

  return redirect(`todolist`);
};
export default function newtodo() {
  return (
    <>
      <Form method="post" className="flex flex-col items-start mb-6">
        <div className="flex flex-col mb-3">
          <label className="mb-2" htmlFor="todo">
            Tarefa
          </label>
          <input
            placeholder="Escreva aqui sua tarefa"
            className="rounded-xl"
            type="text"
            name="todo"
            id="todo"
            minLength={5}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="description">
            Descrição
          </label>
          <input
            placeholder="Escreva a descrição"
            className="rounded-xl"
            type="text"
            name="description"
            id="description"
            minLength={10}
          />
        </div>
        <button
          className="w-full bg-[#22212C] py-4 rounded-xl mt-6"
          type="submit"
        >
          Adicionar tarefa
        </button>
      </Form>
    </>
  );
}
