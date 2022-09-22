import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import { editTodo, getTodo } from "~/features/todoList/todoList.api";

export const loader: LoaderFunction = async ({ params }) => {
  // @ts-ignore
  const todo = await getTodo(params.todoid);
  return {
    todo,
  };
};

export const action: ActionFunction = async ({ request, params }) => {
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

  await editTodo(params.todoid!, newTodo);

  return redirect(`todolist`);
};

export default function () {
  const { todo } = useLoaderData();
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
            defaultValue={todo.todo}
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
            defaultValue={todo.description}
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

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Eita Deu zica</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
