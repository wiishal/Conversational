"use client";

import ChatInterface from "@/app/components/Chat";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams<{ bot: string }>();

  console.log(params);

  return (
    <div className="h-full w-full">
      <ChatInterface botId={params.bot} />
    </div>
  );
}
