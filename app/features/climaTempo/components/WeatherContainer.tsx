import { HomeIcon } from "@heroicons/react/24/solid";
import { Link, Outlet, useLocation } from "@remix-run/react";
import { WeatherData } from "../types";
import FormComponent from "./Form";
import LocationInfo from "./LocationInfo";
import WeatherInfo from "./WeatherInfo";

export default function WeatherContainer(props: WeatherData) {
  let location = useLocation();
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
            <LocationInfo sys={props.sys} name={props.name} />
            <div className="w-full px-8">
              <WeatherInfo
                clouds={props.clouds}
                main={props.main}
                wind={props.wind}
                windDirection={props.windDirection}
                coord={props.coord}
                sys={props.sys}
                name={""}
              />
            </div>
          </>
        )}

        <div className="mt-8 w-full">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
