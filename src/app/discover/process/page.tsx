"use client";
import { JSX } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import Loading from "@/app/components/ui/Loading";
import ProcessUser from "@/app/components/ProcessUser";

export default function Process(): JSX.Element {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;

  if (!isSignedIn)
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <SignIn />;
      </div>
    );

  return <ProcessUser />;
}
