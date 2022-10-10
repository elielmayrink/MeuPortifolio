import { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { getWeaderData } from "~/features/climaTempo/api";
import LocationInfo from "~/features/climaTempo/components/LocationInfo";
import WeatherInfo from "~/features/climaTempo/components/WeatherInfo";
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
      <LocationInfo sys={sys} name={name} />
      <div className="w-full px-8">
        <WeatherInfo
          clouds={clouds}
          main={main}
          wind={wind}
          windDirection={windDirection}
          coord={coord}
          sys={sys}
          name={""}
        />
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
