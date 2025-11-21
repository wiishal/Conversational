import { NextRequest, NextResponse } from "next/server";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { botarr } from "@/app/util/bots";
import { llm } from "@/app/services/services.bot";
import { SystemPrompt } from "@/app/util/prompt";

const conversationMemories = new Map();



export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ bot: string }> }
) {
  const botId = (await params).bot;
 
  const { message, conversationId } = await req.json();

  const botData = botarr.find((b) => b.id === botId);
  if (!botData) {
    return NextResponse.json({ error: "Bot not found" }, { status: 404 });
  }

  let memory;
  let currentConversationId = conversationId;

  if (!currentConversationId || !conversationMemories.has(currentConversationId)) {
    memory = new BufferMemory();
    const newConversationId = Date.now().toString();
    conversationMemories.set(newConversationId, memory);
    currentConversationId = newConversationId;

    if (!conversationId) {
      return NextResponse.json({
        conversationId: currentConversationId,
        aiMsg: `Hello! I'm ${botData.name}. How can I help you today?`,
        bot: { name: botData.name, type: botData.type },
      });
    }
  } else {
    memory = conversationMemories.get(currentConversationId);
  }

  try {
    const promptTemplate = SystemPrompt(botData)

    const chain = new ConversationChain({
      llm,
      memory,
      prompt: promptTemplate,
    });

    const response = await chain.invoke({ input: message });
    const aiMsg = response.response || response.output || response.text;

    return NextResponse.json({
      conversationId: currentConversationId,
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
