"use client";
import { useUser } from "@clerk/nextjs";

export default function ProcessUser() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return <p>Please sign in.</p>;

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <p className="font-medium">This Page-built is in progress.</p>
    </div>
  );
}
