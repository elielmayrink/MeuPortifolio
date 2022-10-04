import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { windDirectionFunction } from "~/util";
import { getWeaderData } from "~/features/climaTempo/api";
import { WeatherData } from "~/features/climaTempo/types";
import {
  CloudSun,
  Signpost,
  ThermometerCold,
  ThermometerHot,
  ThermometerSimple,
  Wind,
} from "phosphor-react";
import { HomeIcon } from "@heroicons/react/24/solid";

export const loader: LoaderFunction = async () => {
  const { coord, clouds, wind, main, sys, name } = await getWeaderData();

  return { coord, clouds, wind, main, sys, name };
};
export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const city = formData.get("city");
  // @ts-ignore
  return redirect(`climatempo/${city}/info`);
};

export default function climatempo() {
  const { coord, clouds, wind, main, sys, name } = useLoaderData<WeatherData>();
  let location = useLocation();
  // @ts-ignore
  const windDirection = windDirectionFunction(wind.deg);
  return (
    <div className="w-full relative flex flex-col items-center px-10 py-10 bg-[#22212C] text-[#837E9F] h-full rounded-md">
      <h1 className="text-2xl mb-5 font-bold">Clima Tempo</h1>
      <div className="w-full relative max-w-[952px] px-8 py-8 bg-[#302F3D] rounded-xl flex flex-col items-center">
        <Link
          className="absolute top-[-50px] right-3 translate-x-1/2 text-[#837E9F]"
          to="/"
        >
          <HomeIcon width={30} />
        </Link>
        {location.pathname !== "/climatempo" ? (
          <Outlet />
        ) : (
          <>
            <div className="w-full flex justify-between mb-8">
              <div>
                <h2 className="text-xl">Country: {sys.country}</h2>
              </div>
              <div>
                <h2 className="text-xl">City: {name}</h2>
              </div>
            </div>
            <div className="w-full px-8">
              <ul>
                <li className="flex mb-4 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    {main.temp <= 20 ? (
                      <ThermometerCold size={38} weight="duotone" />
                    ) : (
                      <ThermometerHot size={38} weight="duotone" />
                    )}
                  </div>
                  Temp: {main.temp}º
                </li>
                <li className="flex mb-4 w-full space-x-10 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    <ThermometerSimple size={38} weight="duotone" />
                  </div>
                  Max: {main.temp_max}º
                </li>
                <li className="flex mb-4 w-full space-x-10 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    <ThermometerSimple size={38} weight="duotone" />
                  </div>
                  min: {main.temp_min}º
                </li>
                <li className="flex mb-4 w-full space-x-10 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    <CloudSun size={38} weight="duotone" />
                  </div>
                  Clouds: {clouds.all}%
                </li>
                <li className="flex mb-4 w-full space-x-10 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    <Wind size={38} weight="duotone" />
                  </div>
                  Wind Speed: {wind.speed}
                </li>
                <li className="flex mb-4 w-full space-x-10 items-center">
                  <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
                    <Signpost size={38} weight="duotone" />
                  </div>
                  Wind Direction: {windDirection}
                </li>
              </ul>
            </div>
          </>
        )}

        <div className="mt-8 w-full">
          <Form
            method="post"
            action={`/climatempo`}
            className="flex flex-col items-start mb-6 w-full"
          >
            <div className="flex flex-col mb-3 w-full">
              <input
                placeholder="Escreva aqui sua Cidade"
                className="rounded-xl w-full h-14"
                type="text"
                name="city"
                id="city"
                minLength={3}
              />
            </div>
            <button
              className="w-full bg-[#22212C] py-4 rounded-xl"
              type="submit"
            >
              Adicionar tarefa
            </button>
          </Form>
        </div>
      </div>
    </div>
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
