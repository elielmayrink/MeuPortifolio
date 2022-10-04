import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useActionData, useCatch, useLoaderData } from "@remix-run/react";
import {
  CloudSun,
  Signpost,
  ThermometerCold,
  ThermometerHot,
  ThermometerSimple,
  Wind,
} from "phosphor-react";
import { getWeaderData } from "~/features/climaTempo/api";
import { WeatherData } from "~/features/climaTempo/types";
import { windDirectionFunction } from "~/util";

export const loader: LoaderFunction = async ({ params }) => {
  const city = params.city;
  const { coord, clouds, wind, main, sys, name } = await getWeaderData(city);

  return { coord, clouds, wind, main, sys, name };
};

export default function Info() {
  const { coord, clouds, wind, main, sys, name } = useLoaderData<WeatherData>();
  const windDirection = windDirectionFunction(wind.deg);
  return (
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
