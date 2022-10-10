import {
  CloudSun,
  Signpost,
  ThermometerCold,
  ThermometerHot,
  ThermometerSimple,
  Wind,
} from "phosphor-react";
import { WeatherData } from "../types";
export default function WeatherInfo(props: WeatherData) {
  return (
    <ul>
      <li className="flex mb-4 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          {props.main.temp <= 20 ? (
            <ThermometerCold size={38} weight="duotone" />
          ) : (
            <ThermometerHot size={38} weight="duotone" />
          )}
        </div>
        Temp: {props.main.temp}º
      </li>
      <li className="flex mb-4 w-full space-x-10 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          <ThermometerSimple size={38} weight="duotone" />
        </div>
        Max: {props.main.temp_max}º
      </li>
      <li className="flex mb-4 w-full space-x-10 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          <ThermometerSimple size={38} weight="duotone" />
        </div>
        min: {props.main.temp_min}º
      </li>
      <li className="flex mb-4 w-full space-x-10 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          <CloudSun size={38} weight="duotone" />
        </div>
        Clouds: {props.clouds.all}%
      </li>
      <li className="flex mb-4 w-full space-x-10 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          <Wind size={38} weight="duotone" />
        </div>
        Wind Speed: {props.wind.speed}
      </li>
      <li className="flex mb-4 w-full space-x-10 items-center">
        <div className="w-12 h-12 bg-[#22212c] rounded-md flex items-center justify-center mr-8 animate-[wiggle_1.5s_ease-in-out]">
          <Signpost size={38} weight="duotone" />
        </div>
        Wind Direction: {props.windDirection}
      </li>
    </ul>
  );
}
