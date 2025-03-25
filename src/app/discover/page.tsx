"use client";
import { JSX } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import DiscoverComp from "@/app/components/DiscoverComp";
import Loading from "@/app/components/ui/Loading";

export default function Dashboard(): JSX.Element {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  

  if (!isSignedIn)
    return (
      <div className="flex h-full w-full justify-center items-center">
        <SignIn routing="hash" />
      </div>
    );

  return <DiscoverComp />;
}
