import { JSX } from "react";

export default function FeatureCard({
  title,
  details,
}: {
  title: string;
  details: string;
}): JSX.Element {
  return (
    <div className="border h-60 w-80 flex flex-col items-center justify-center hover:border-blue-800 transition-all e">
      <div className="flex h-1/2 items-center border-amber-500">
        <p className="text-2xl font-medium text-center m-2 capitalize">
          {title}
        </p>
      </div>
      <div className=" h-1/2 border-blue-500 flex items-start">
        <p className="m-2 text-center">{details}</p>
      </div>
    </div>
  );
}
