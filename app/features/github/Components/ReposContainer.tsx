import { PropsWithChildren } from "react";

export default function ReposContainer(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-x-[60px] gap-y-10">
      {props.children}
    </div>
  );
}
