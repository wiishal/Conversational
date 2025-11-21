"use client";
import { useUser } from "@clerk/nextjs";
import RenderBots from "./discover/RenderBots";
import { useState } from "react";
import Warning from "./Warning";
import { Button } from "./ui/button";

export default function DiscoverComp() {
  const [warn, setWarn] = useState(true);

  return (
    <div className=" flex w-full h-full flex-col justify-between ">
      <div className=" ">
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
