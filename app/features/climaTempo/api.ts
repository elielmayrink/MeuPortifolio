import { id } from "~/auth";

export async function getWeaderData(city: string = "joinville") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=metric`
  );
  const weather = await res.json();
  const { coord, clouds, wind, main, sys, name } = weather;
  return { coord, clouds, wind, main, sys, name };
}
