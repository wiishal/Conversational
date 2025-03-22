import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";
import { botarr } from "@/app/util/bots";

const conversationMemories = new Map();

export async function POST(
  req: NextRequest,
  context: { params: { bot: string } }
) {
  const params = await Promise.resolve(context.params);
  const botId = params.bot;

  const { message, conversationId } = await req.json();

  const botData = botarr.find((b) => b.id === botId);
  if (!botData) {
    return NextResponse.json({ error: "Bot not found" }, { status: 404 });
  }

  // Create or retrieve conversation memory
  let memory;
  let currentConversationId = conversationId;

  if (
    !currentConversationId ||
    !conversationMemories.has(currentConversationId)
  ) {
    // Create a new conversation with Buffer Memory
    memory = new BufferMemory();
    const newConversationId = Date.now().toString();
    conversationMemories.set(newConversationId, memory);
    currentConversationId = newConversationId;

    // Return conversation ID if this is the first message
    if (!conversationId) {
      return NextResponse.json({
        conversationId: currentConversationId,
        aiMsg: `Hello! I'm ${botData.name}. How can I help you today?`,
      });
    }
  } else {
    memory = conversationMemories.get(currentConversationId);
  }

  // Setup LLM
  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0.7,
    maxRetries: 2,
    apiKey: process.env.GOOGLE_API_KEY,
  });

  try {
    // Create a proper prompt template
    const promptTemplate = ChatPromptTemplate.fromMessages([
      SystemMessagePromptTemplate.fromTemplate(
        `You are ${botData.name}. ${botData.description}
         You are having a conversation with a human.
         Be helpful, friendly, and conversational in your responses.`
      ),
      HumanMessagePromptTemplate.fromTemplate("{input}"),
    ]);

    // Create conversation chain with memory
    const chain = new ConversationChain({
      llm,
      memory,
      prompt: promptTemplate,
    });

    // Process the message with the conversation chain
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
