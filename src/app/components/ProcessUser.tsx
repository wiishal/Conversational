"use client";
import { useUser } from "@clerk/nextjs";

export default function ProcessUser() {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) return <p>Please sign in.</p>;

  return (
    <div className="h-full w-full">this is process page {user.firstName}</div>
  );
}
