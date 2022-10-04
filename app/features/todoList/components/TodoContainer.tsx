import { PlusIcon } from "@heroicons/react/24/solid";
import { Todo } from "@prisma/client";
import { Link, Outlet } from "@remix-run/react";
import TodoComponent from "./TodoComponent";

export interface TodoContainerProps {
  todos: Todo[];
  completedTasks: Todo[];
  showAllTodos: boolean;
  changeShowAllTodos: () => void;
}

export default function TodoContainer(props: TodoContainerProps) {
  return (
    <div className="w-full relative max-w-[952px] px-8 py-8 bg-[#302F3D] rounded-xl flex flex-col items-center">
      <Link
        title="Click para uma nova tarefa"
        className="absolute top-6 right-6"
        to="newtodo"
      >
        <PlusIcon width={25} />
      </Link>
      <div className="">
        <h1 className="text-2xl font-semibold">Tarefas diárias</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="w-full flex flex-col items-start mt-6 relative">
        <ul className="w-full flex flex-col relative overflow-hidden">
          {props.todos.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              showAllTodos={props.showAllTodos}
            />
          ))}
        </ul>
      </div>
      <button
        onClick={props.changeShowAllTodos}
        className="absolute bottom-2 right-[33px]"
      >
        Ver todas as tarefas
      </button>
    </div>
  );
}
