import { bots } from "@/app/types/type";
import { JSX } from "react";

export default function BotCard({ bot }: { bot: bots }): JSX.Element {
  return (
    <div
      className="border rounded-lg h-48 w-64 flex flex-col justify-between p-5 bg-card hover:shadow-md transition-shadow duration-300 hover:border-blue-300"
      key={bot.id}
    >
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">{bot.name}</h2>
        <p className="text-sm text-neutral-400 line-clamp-3">{bot.description}</p>
      </div>
      <a
        href={`/discover/chat/${bot.id}`}
        className="mt-4 py-2 px-4 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-center flex items-center justify-center w-full"
      >
        Chat
      </a>
    </div>
  );
}
