import { JSX } from "react";
import { ModeToggle } from "./ui/toggle";

export default function Appbar(): JSX.Element {
  return (
    <div className="flex lg:flex-row flex-col lg:w-full w-3/4 lg:m-5 m-5 align-middle lg:justify-between justify-center gap-5 font-medium text-neutral-300 capitalize">
      <h1 className="text-center">Conversational</h1>
      <ul className="flex flex-row justify-center gap-5 ">
        <li>
          <a href="/docs">docs</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </ul>
    </div>
  );
}
