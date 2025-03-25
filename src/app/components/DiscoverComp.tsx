"use client";
import { useUser } from "@clerk/nextjs";
import RenderBots from "./discover/RenderBots";
import { useState } from "react";
import Warning from "./Warning";
import { Button } from "./ui/button";

export default function DiscoverComp() {
  const { user } = useUser();
  const [warn, setWarn] = useState(true);

  return (
    <div className=" flex flex-col justify-between ">
      <div className="flex flex-row justify-between w-full">
        <div className=" text-2xl font-medium">Hey, {user?.firstName} 👋</div>
      </div>
      <div className="pt-5">
        <h1 className="text-2xl font-bold">
          Are you Looking for Conversation?
        </h1>
      </div>

      <div className=" mt-10">
        <RenderBots />
      </div>
      
      {warn && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg gap-3">
            <Warning />
            <Button
              className="w-fit"
              onClick={() => setWarn(false)}
              variant="secondary"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
