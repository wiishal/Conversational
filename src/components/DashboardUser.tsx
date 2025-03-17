"use client";
import { useUser } from "@clerk/nextjs";

export default function DashboardUser() {
  const { user, isSignedIn } = useUser();
  
  if (!isSignedIn) return <p>Please sign in.</p>;

  return <div>Dashboard main for {user?.fullName || "Guest"}</div>;
}
