import { NextRequest, NextResponse } from "next/server";
import { llm } from "@/app/services/services.bot";
import { AnalysisSYSTEMPrompt } from "@/app/util/prompt";

export async function POST(req: NextRequest) {
  try {
    const { chat } = await req.json();

    // Construct the final input prompt
    const formattedPrompt = `${AnalysisSYSTEMPrompt}\n\ chat: ${chat}`;

    // Directly call the LLM
    const response = await llm.invoke(formattedPrompt);
    return NextResponse.json({ aiMsg: response.content });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
