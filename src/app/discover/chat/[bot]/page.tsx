"use client";

import ChatInterface from "@/app/components/Chat";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ bot: string }>();


  return (
    <div className="h-full w-full">
      <ChatInterface botId={params.bot} />
    </div>
  );
}
