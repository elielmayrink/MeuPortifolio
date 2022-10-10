import { Sys } from "../types";

export interface LocationInfoProps {
  sys: Sys;
  name: string;
}
export default function LocationInfo(props: LocationInfoProps) {
  return (
    <div className="w-full flex justify-between mb-8">
      <div>
        <h2 className="text-xl">Country: {props.sys.country}</h2>
      </div>
      <div>
        <h2 className="text-xl">City: {props.name}</h2>
      </div>
    </div>
  );
}
