"use client";
import { useUser } from "@clerk/nextjs";
import { ModeToggle } from "./toggle";

export default function DashboardUser() {
 const { user, isSignedIn } = useUser(); 
 

  return (
    <div className=" flex flex-row justify-between">
      <div className="border text-2xl">her is {user?.firstName}</div>
      <ModeToggle/>
    </div>
  );
}
