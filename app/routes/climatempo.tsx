import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { windDirectionFunction } from "~/util";
import { getWeaderData } from "~/features/climaTempo/api";
import { WeatherData } from "~/features/climaTempo/types";
import { HomeIcon } from "@heroicons/react/24/solid";
import WeatherInfo from "~/features/climaTempo/components/WeatherInfo";
import FormComponent from "~/features/climaTempo/components/Form";
import LocationInfo from "~/features/climaTempo/components/LocationInfo";
import WeatherContainer from "~/features/climaTempo/components/WeatherContainer";

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
  // @ts-ignore
  const windDirection = windDirectionFunction(wind.deg);
  return (
    <WeatherContainer
      windDirection={windDirection}
      coord={coord}
      main={main}
      wind={wind}
      clouds={clouds}
      sys={sys}
      name={name}
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
