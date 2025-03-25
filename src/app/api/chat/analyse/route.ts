import { NextRequest, NextResponse } from "next/server";
import { llm } from "@/app/services/services.bot";
import { AnalysisSYSTEMPrompt } from "@/app/util/prompt";

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    // Construct the final input prompt
    const formattedPrompt = `${AnalysisSYSTEMPrompt}\n\nHuman: ${input}`;

    // Directly call the LLM
    const response = await llm.invoke(formattedPrompt);

    console.log(response);
    return NextResponse.json({ aiMsg: response });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
