import { runLLM } from "@/lib/LLMRouter";
import { buildEmailAnalysisPrompt } from "@/lib/prompts/buildEmailAnalysisPrompt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, writing, audience, tone, purpose } = body;

    if (!subject || !writing) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 200 },
      );
    }

    const wordCount = writing.trim().split(/\s+/).length;

    if (wordCount < 0) {
      return NextResponse.json(
        { success: false, message: "Minimum 40 words required" },
        { status: 200 },
      );
    }

    // // 🔮 AI analysis placeholder
    // const analysis = {
    //   clarityScore: 7,
    //   structureScore: 6,
    //   toneMatch: tone ?? "Neutral",
    //   feedback: "Good effort. Try adding a proper greeting and closing.",
    // };
    const prompt = buildEmailAnalysisPrompt(subject, writing);
    const llmResult = await runLLM(prompt);

    let analysis;
    try {
      analysis = JSON.parse(llmResult.text);
    } catch {
      analysis = {
        clarityScore: 0,
        structureScore: 0,
        toneMatch: "Neutral",
        feedback: "Unable to analyze writing. Please try again.",
      };
    }
    return NextResponse.json(
      {
        success: true,
        llmProvider: llmResult.provider,
        analysis,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Analysis failed" },
      { status: 500 },
    );
  }
}
