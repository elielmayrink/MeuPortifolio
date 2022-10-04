import { Todo } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import TodoLayoutComponent from "~/features/todoList/components/TodoLayoutComoponent";
import { getTodos } from "~/features/todoList/todoList.api";
export const loader: LoaderFunction = async ({ params }) => {
  return {
    todos: await getTodos(),
  };
};

export interface LoaderData {
  todos: Todo[];
}
export default function () {
  const { todos } = useLoaderData<LoaderData>();
  const completedTasks = todos.filter((todo) => todo.checked);
  const [showAllTodos, setShowAllTodos] = useState(false);
  console.log(completedTasks);
  function verifyCompletdTasks() {
    if (completedTasks.length === 0) {
      setShowAllTodos(false);
    }
  }

  console.log("show", showAllTodos);
  // @ts-ignore
  return (
    <TodoLayoutComponent
      showAllTodos={showAllTodos}
      // @ts-ignore
      todos={todos}
      // @ts-ignore
      completedTasks={completedTasks}
      changeShowAllTodos={() => setShowAllTodos(!showAllTodos)}
    />
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
