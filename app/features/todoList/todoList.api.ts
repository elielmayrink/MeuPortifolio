import { Todo } from "@prisma/client";
import { db } from "~/utils/db.server";

interface Data {
  todo: string;
  description: string;
}

export async function getTodos(): Promise<Todo[]> {
  const todos = await db.todo.findMany();
  return todos;
}

export async function getTodo(id: string) {
  return await db.todo.findUnique({ where: { id } });
}

export async function createTodo(data: Todo): Promise<Todo> {
  return await db.todo.create({ data });
}

export async function editTodo(id: string, data: Data) {
  return await db.todo.update({
    where: { id },
    data,
  });
}

export async function completeTodo(id: string) {
  const todo = await db.todo.findUnique({ where: { id } });

  await db.todo.update({
    where: { id },
    data: {
      id: todo?.id,
      updatedAt: todo?.updatedAt,
      createdAt: todo?.createdAt,
      todo: todo?.todo,
      description: todo?.description,
      checked: !todo?.checked,
    },
  });
}

export async function deleteTodo(id: string) {
  return await db.todo.delete({ where: { id } });
}
