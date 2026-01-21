"use client";

import { useEffect } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/components/ui/Loading";
import RenderEmailTextArea from "./RenderEmailTextArea";
import { logUserIdController } from "../controllers/controller.user";

export default function EmailClient() {
  const searchParams = useSearchParams();
  const level = Number(searchParams.get("level") || "1");

  const { isLoaded, isSignedIn, user } = useUser();

  const logUserIdfunc = async () => {
    const res = await logUserIdController();
    if (!res.success) {
      console.log("User sync failed:", res.message);
      return;
    }
    console.log("User synced");
  };
  useEffect(() => {
    if (!isSignedIn) return;
    logUserIdfunc();
  }, [isSignedIn, user]);

  if (!isLoaded) return <Loading />;

  if (!isSignedIn && level > 1) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <SignIn routing="hash" />
      </div>
    );
  }

  return <RenderEmailTextArea level={level} />;
}
