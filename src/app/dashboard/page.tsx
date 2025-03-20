"use client";
import { JSX } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import DashboardUser from "@/components/DashboardUser";
import Loading from "@/components/Loading";

export default function Dashboard(): JSX.Element {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  if (!isSignedIn)
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <SignIn />;
      </div>
    );

  return <DashboardUser />;
}
