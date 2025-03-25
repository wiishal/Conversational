"use client";
import { useUser } from "@clerk/nextjs";
import RenderBots from "./discover/RenderBots";

export default function DiscoverComp() {
  const { user, isSignedIn } = useUser();

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
    </div>
  );
}
