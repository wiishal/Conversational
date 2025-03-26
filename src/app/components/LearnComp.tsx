"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import RenderBotLearn from "./learn/RenderBotLearn";

export default function LearnComp() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return <SignIn routing="hash" />;
  return (
    <div className=" flex flex-col justify-between ">
      <div className="flex flex-row justify-between w-full">
        <div className=" text-2xl font-medium">Practice here 🎯</div>
      </div>
      <div className="pt-5">
        <p className="text-xl font-medium mt-2">
          Improve your speaking, listening, and confidence through interactive
          lessons and real-world practice.
        </p>
      </div>
      <div className=" mt-10"></div>
      <RenderBotLearn />
    </div>
  );
}
