import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ebotType } from "../types/enum";
import { botarr } from "../util/bots";
import { BotsData } from "../types/type";

export const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0.7,
    maxRetries: 2,
    apiKey: process.env.GOOGLE_API_KEY,
  });

export function organizeBotsByType(): BotsData {
  const organized: BotsData = {
    interview: [],
    personality: [],
    mythology: [],
    communication: [],
  };

  botarr.forEach((bot) => {
    switch (bot.type) {
      case ebotType.interviewer:
        organized.interview.push(bot);
        break;
      case ebotType.personality:
        organized.personality.push(bot);
        break;
      case ebotType.mythology:
        organized.mythology.push(bot);
        break;
      case ebotType.communication:
        organized.communication.push(bot);
        break;
    }
  });

  return organized;
}

