"use client";
import { JSX } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import Loading from "@/app/components/ui/Loading";
import RenderTextArea from "../components/RenderTextArea";
import RenderEmailTextArea from "../components/RenderEmailTextArea";
import { useSearchParams } from "next/navigation";
interface email{
    subject:string,
    userWritings:string
}
export default function EmailPage(): JSX.Element {
  const searchParams = useSearchParams();
  const level = Number(searchParams.get("level") || "1");
//   const { isSignedIn, isLoaded } = useUser();

//   if (!isLoaded) return <Loading />;

//   if (!isSignedIn)
//     return (
//       <div className="flex h-full w-full justify-center items-center">
//         <SignIn routing="hash" />
//       </div>
//     );

  return <RenderEmailTextArea  level={level}/>;
}
