# Bem vindo ao meu Portifólio!

## Descrição do projéto

O projeto criado em Remix e tailwindCss, consiste em apresentar a minha identidade e conhecimentos como frontend dev jr
tendo uma listagem de repositórios do github com chamadas http da api do mesmo.
Também anexado ao portifólio, sera desenvolvido alguns projetos paralelos com a intenção de praticar o desenvolvimento e conhecimento nessa stack,
esse projetos estaram listados no card a esqueda chamado "outher projects".

obs => "os prjetos paralelos serão acrecentados a medida em que forem desenvolvidos"

## Development

Para iniciar o projeto em Remix:

instalar as depenencias

```sh
npm install
```

iniciar o servidor

```sh
npm run dev
```

obs "será necessário criar um arquivo na pasta app por nome auth.js com uma variavel de altorisação de uso da api do github"

```js
export const auth = {
  headers: {
    accept: "application/json.github.v3+json",
    Authorization: "token Token gerado nas configs do github ",
  },
};
```

Para funcionamento do Todolist "projeto Paralelo":

criara o db.dev e o .env

```sh
npx prisma db push
```

## Atribuições

Os conhcimentos necessários para o desenvolvimento desse projet, foram adquiridos atravez:
Leitura de doc das tecs "Tailwindcss e remix"
Canal do youtube "Fabio Vedovelli"
Layout inspirado em um desafio da plataforma "Rocketseat"
