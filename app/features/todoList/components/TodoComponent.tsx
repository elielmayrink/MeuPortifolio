import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Todo } from "@prisma/client";
import { Form, Link } from "@remix-run/react";

export interface TodoProps {
  todo: Todo;
}
export default function TodoComponent(props: TodoProps) {
  return (
    <li
      className="flex bg-[#22212C] w-full py-3 px-4 rounded-xl mb-2 justify-between"
      key={props.todo.id}
    >
      <Form
        className="flex w-full justify-between"
        method="post"
        action={`${props.todo.id}/delete`}
      >
        <div className="flex items-center gap-2">
          <Link
            className="flex items-center gap-2"
            to={`${props.todo.id}/feito`}
          >
            <input
              type="checkbox"
              checked={props.todo.checked}
              onChange={() => null}
            />
            <span
              title={props.todo.description}
              className={
                props.todo.checked
                  ? "text-lg text-[#837E9F] line-through"
                  : "text-lg text-[#837E9F]"
              }
            >
              {props.todo.todo}{" "}
            </span>
          </Link>
        </div>
        <div className="flex w-[100px] items-center justify-end gap-x-3">
          <Link to={`${props.todo.id}/edit`}>
            <PencilIcon width={20} />
          </Link>
          <button>
            <TrashIcon width={20} />
          </button>
        </div>
      </Form>
    </li>
  );
}
