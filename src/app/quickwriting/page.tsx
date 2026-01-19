"use client";
import { JSX } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import Loading from "@/app/components/ui/Loading";
import RenderTextArea from "../components/RenderTextArea";
export default function Dashboard(): JSX.Element {
  // const { isSignedIn, isLoaded } = useUser();

  // if (!isLoaded) return <Loading />;

  // if (!isSignedIn)
  //   return (
  //     <div className="flex h-full w-full justify-center items-center">
  //       <SignIn routing="hash" />
  //     </div>
  //   );

  return <RenderTextArea />;
}
