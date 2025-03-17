"use client";

import Appbar from "@/components/Appbar";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/featureCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="lg:w-2/3 w-full flex flex-col items-center gap-10">
        <Appbar />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-4 py-15 px-6">
          <h1 className="text-5xl font-semibold text-center leading-tight text-neutral-200">
            Elevate Your English with AI-Powered Conversations
          </h1>
          <h2 className="text-lg text-center text-gray-300">
            Practice real-world conversations, sharpen your{" "}
            <span className="text-fuchsia-500 font-medium">articulation</span>,{" "}
            <span className="text-blue-500">fluency</span>, and{" "}
            <span className="text-yellow-500">confidence</span>.
          </h2>
          <div className="flex flex-row items-center justify-center gap-5 pt-8">
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border text-black bg-white py-2 px-5">
              <a role="button" href="/dashboard">
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

        {/* Features Section */}
        <h1 className="text-3xl font-semibold text-center text-white">
          Key Features
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-5 text-white">
          <FeatureCard
            title="Enhanced Communication Skills"
            details="Engage in dynamic conversations and refine your professional communication abilities."
          />
          <FeatureCard
            title="Conversation Analytics"
            details="Get detailed insights on your speaking patterns and overall performance."
          />
          <FeatureCard
            title="AI Guidance & Suggestions"
            details="Receive real-time feedback and tips to improve your speech clarity and structure."
          />
        </div>
      </div>
    </div>
  );
}
