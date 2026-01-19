"use client";
import Appbar from "@/app/components/Appbar";
import { ReactNode } from "react";

interface ChildrenType {
  children: ReactNode;
}

const GlowingText = ({ children }: ChildrenType) => (
  <span className="text-fuchsia-400 font-extrabold relative inline-block">
    <span className="relative z-10">{children}</span>
    <span 
      className="absolute inset-0 bg-fuchsia-400 opacity-20 blur-md rounded-full scale-110 pointer-events-none" 
      aria-hidden="true"
    />
  </span>
);

const FeatureCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="flex flex-col gap-4 p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-md hover:border-neutral-700 transition-all duration-300 group">
    <h4 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">{title}</h4>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{children}</p>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-x-hidden bg-neutral-950 p-4 sm:p-6 md:p-8 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">
      <div className="lg:max-w-5xl w-full flex flex-col items-center px-4">
        <Appbar />

        <section className="flex flex-col items-center justify-center gap-10 py-32 md:py-40">
          <div className="space-y-6 flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug text-white max-w-4xl tracking-tight">
              Improve Communication Through{" "}
              <GlowingText>Writing Practice</GlowingText>
            </h1>

            <h2 className="text-xl font-medium text-gray-400 max-w-2xl leading-relaxed">
              Writing trains your mind to think clearly, organize ideas, and express
              thoughts with confidence.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full max-w-sm sm:max-w-none">
            <a
              href="/quickwriting"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-base font-bold transition-all duration-300 bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20 hover:bg-fuchsia-600 hover:-translate-y-1 py-3.5 px-10"
            >
              Start Writing Practice
            </a>

            <a
              href="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-base font-medium transition-all duration-300 border border-neutral-800 text-white bg-neutral-900/20 hover:bg-neutral-800 py-3.5 px-10"
            >
              How AI Evaluates Writing
            </a>
          </div>
        </section>

        {/* SECTION 2 – THE WHY & HOW */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full py-24 border-t border-neutral-900/50">
          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Why Writing Matters
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Writing is more than recording ideas. It forces you to slow down,
                structure thoughts, and choose precise words. This process improves
                grammar, vocabulary, and clarity — the same skills used in speaking
                and listening.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Studies show that writing strengthens memory and logical thinking in
                ways that passive reading or listening cannot.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
             <FeatureCard title="Logical Structure">
                Writing helps organize thoughts before expressing them, making spoken explanations clearer and easier to understand.
             </FeatureCard>
             <FeatureCard title="Emotional Intelligence">
                Reflective writing increases emotional awareness, helping you communicate calmly and reduce misunderstandings.
             </FeatureCard>
          </div>
        </section>

        {/* SECTION 3 – APP FEATURES */}
        <section className="flex flex-col items-center gap-16 py-24 w-full">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              How This App Helps You
            </h3>
            <p className="text-gray-400 max-w-2xl">
              A streamlined environment designed to help you bridge the gap between thinking and speaking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <FeatureCard title="Real-world Scenarios">
              Practice emails, essays, reflections, and interview answers in a safe rehearsal space.
            </FeatureCard>
            <FeatureCard title="AI Analysis">
              Get evaluated on clarity, structure, tone, and grammar with actionable suggestions.
            </FeatureCard>
            <FeatureCard title="Confidence Building">
              As your writing improves, you&apos;ll naturally feel more comfortable expressing ideas aloud.
            </FeatureCard>
          </div>
        </section>

        {/* FOOTER INDICATOR */}
        <footer className="w-full flex flex-col items-center justify-center py-20 gap-8">
          <div className="relative h-1 w-24 bg-neutral-900 rounded-full">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-fuchsia-500 animate-pulse opacity-50 shadow-[0_0_15px_rgba(217,70,239,0.5)]"></span>
          </div>
        </footer>
      </div>
    </div>
  );
}