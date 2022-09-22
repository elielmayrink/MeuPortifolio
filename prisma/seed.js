const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTodos().map((todo) => {
      return db.todo.create({ data: todo });
    })
  );
}

seed();

function getTodos() {
  return [
    {
      todo: "Devocional",
      description:
        "Fazer devocional após deixar as crianças na escola, antes da reunião diaria dos devs",
    },
    {
      todo: "Reunião diaria dos devs",
      description:
        "Reunião para alinhamento de afazeres do dia e mençao do que fez no dia anterior",
    },
  ];
}
