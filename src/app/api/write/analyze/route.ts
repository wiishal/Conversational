import { AppError } from "@/lib/error/error";
import { runLLM } from "@/lib/LLMRouter";
import { buildWriteAnalysisPrompt } from "@/lib/prompts/buildWriteAnalysisPropmt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, writing } = body ?? {};

    console.log("Received for analysis:", { subject, writing });

    // 1️⃣ Input validation (client error)
    if (!subject || !writing) {
      throw new AppError(
        "Subject and writing are required",
        400,
        "INVALID_INPUT",
      );
    }

    const prompt = buildWriteAnalysisPrompt(subject, writing);

    const llmResult = await runLLM(prompt);
    console.log("LLM result:", llmResult.provider);

    const analysis = safeParseJSON(llmResult.text);

    return NextResponse.json(
      {
        success: true,
        llmProvider: llmResult.provider,
        analysis,
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}

function safeParseJSON(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    throw new AppError(
      "LLM returned invalid JSON",
      422,
      "INVALID_LLM_RESPONSE",
    );
  }
}

function handleApiError(error: any) {

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
        },
      },
      { status: error.status },
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Write analysis failed",
      },
    },
    { status: 500 },
  );
}
