"use client";
import Appbar from "@/app/components/Appbar";
import { ReactNode } from "react";

interface ChildrenType{
  children:ReactNode
}
// New component for the subtle glow effect on the main keyword
const GlowingText = ({ children }:ChildrenType) => (
  <span 
    className="text-fuchsia-400 font-extrabold 
               relative inline-block 
               before:content-[''] before:absolute before:inset-0 before:bg-fuchsia-400 before:opacity-30 before:blur-sm before:transition-all before:duration-500
               hover:before:opacity-40"
  >
    {children}
  </span>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-x-hidden 
                    bg-neutral-950 p-4 sm:p-6 md:p-8 
                    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">
      
      <div className="lg:max-w-4xl w-full flex flex-col h-full min-h-screen items-center px-4">
        
        <Appbar />

        {/* Hero Section */}
        <div className="flex flex-col h-full items-center justify-center gap-6 md:gap-8 flex-grow py-16">
          
          {/* Headline (H1) */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight md:leading-snug text-white max-w-4xl">
            Elevate Your Communication with <GlowingText>AI-Powered</GlowingText> Conversations
          </h1>
          
          {/* Subheadline (H2) */}
          <h2 className="text-xl text-center font-medium text-gray-400 max-w-3xl pt-2"> 
            Practice real-world conversations, sharpen your{" "}
            <span className="text-yellow-400 font-semibold">articulation</span>,{" "}
            <span className="text-cyan-400 font-semibold">fluency</span>, and{" "}
            <span className="text-emerald-400 font-semibold">confidence</span>.
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-12 w-full max-w-sm sm:max-w-none">
            
            {/* Primary Button */}
            <a 
              role="button" 
              href="/discover" 
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-bold transition-all duration-300 
                         bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-600 
                         py-3 px-8 focus:ring-4 focus:ring-fuchsia-500/50"
            >
              Start Practicing Now
            </a>
            
            {/* Secondary Button */}
            <a 
              role="button" 
              href="/docs" 
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all duration-300 
                         border border-neutral-700 text-white bg-transparent hover:bg-neutral-800 
                         py-3 px-8 focus:ring-4 focus:ring-neutral-700/50"
            >
              Explore Features
            </a>
          </div>
        </div>
        
        {/* Subtle Separator/Scroll Indicator */}
        <div className="w-full flex justify-center py-8">
            <div className="relative h-1 w-24 bg-neutral-800 rounded-full">
                {/* Small, subtle glowing dot to indicate motion/scroll */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-fuchsia-500 animate-pulse opacity-70"></span>
            </div>
        </div>

      </div>
    </div>
  );
}
