import { JSX } from "react";

export default function Appbar(): JSX.Element {
  return (
    <div className=" flex flex-row lg:w-full w-3/4 p-5 align-middle justify-between  gap-5 font-medium text-neutral-300 capitalize">
      <h1 className="text-center">
        <a href="/">Conversational</a>
      </h1>
      <ul className=" ">
        <li>
          <a href="/docs">docs</a>
        </li>
      </ul>
    </div>
  );
}
