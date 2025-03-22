import { JSX } from "react";
import Appbar from "../Appbar";

export default function LoginAlert(): JSX.Element {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl font-medium">Login to Continue </h1>
      <div className="border px-4 py-1 rounded-md bg-neutral-200 text-neutral-900 font-medium">
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
