export async function getWeaderData(city: string = "joinville") {
  const id = "84899add57d6eb8da6cf1646ffb35f97";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=metric`
  );
  const weather = await res.json();
  const { coord, clouds, wind, main, sys, name } = weather;
  return { coord, clouds, wind, main, sys, name };
}
