"use client";
import Appbar from "@/app/components/Appbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="lg:w-2/3 w-full flex flex-col h-screen items-center ">
        <Appbar />

        {/* Hero Section */}
        <div className="flex flex-col h-full items-center justify-center gap-10  ">

          <h1 className="text-5xl font-semibold text-center leading-tight text-neutral-200">
            Elevate Your English with AI-Powered Conversations
          </h1>
          <h2 className="text-lg text-center text-gray-300">
            Practice real-world conversations, sharpen your{" "}
            <span className="text-fuchsia-500 font-medium">articulation</span>,{" "}
            <span className="text-blue-500">fluency</span>, and{" "}
            <span className="text-yellow-500">confidence</span>.
          </h2>
          <div className="flex flex-row items-center justify-center gap-5 lg:pt-15 p-0">
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border text-black bg-white py-2 px-5">
              <a role="button" href="/discover">
                Get Started
              </a>
            </div>
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border text-white bg-grey py-2 px-5">
              <a role="button" href="/docs">
                Explore Features
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
