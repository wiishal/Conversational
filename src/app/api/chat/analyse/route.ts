import { NextRequest, NextResponse } from "next/server";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";
import { ConversationChain } from "langchain/chains";
import { llm } from "@/app/services/services.bot";
import { AnalysisSYSTEMPrompt } from "@/app/util/prompt";

const promptTemplate = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(AnalysisSYSTEMPrompt),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

export async function POST(req: NextRequest) {
  try {
    const chat = await req.json();

    const chain = new ConversationChain({
      llm,
      prompt: promptTemplate,
    });

    const response = await chain.invoke({
      input: `${chat}`,
    });
    const aiMsg = response.response || response.output || response.text;

    return NextResponse.json({
      aiMsg,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
