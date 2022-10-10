import { Form } from "@remix-run/react";
export default function FormComponent() {
  return (
    <Form
      method="post"
      action={`/climatempo`}
      className="flex flex-col items-start mb-6 w-full"
    >
      <div className="flex flex-col mb-3 w-full">
        <input
          placeholder="Pesquise aqui sua Cidade"
          className="rounded-xl w-full h-14"
          type="text"
          name="city"
          id="city"
          minLength={3}
        />
      </div>
      <button className="w-full bg-[#22212C] py-4 rounded-xl" type="submit">
        Pesquisar
      </button>
    </Form>
  );
}
