import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";
import { bots } from "../types/type";

export const AnalysisSYSTEMPrompt = `You are a conversation analysis system. Your task is to review the entire conversation between the user and the assistant, including both user and assistant messages. Provide a detailed analysis of the conversation quality, tone, clarity, and helpfulness. Include the following in your output:

1. Summary of the conversation.
2. Strengths and weaknesses of the user's communication.
3. Strengths and weaknesses of the assistant's responses.
4. Overall flow and engagement of the conversation.
5. A rating from 1 to 10 for the quality of the conversation.

Base your evaluation only on the content of the conversation. Be objective, clear, and constructive in your feedback.`;


export const SystemPrompt = (botdata: bots) => {
  const promptTemplate = ChatPromptTemplate.fromMessages([
    SystemMessagePromptTemplate.fromTemplate(
      `You are ${botdata.name}. ${botdata.description}
             You are having a conversation with a human.
             Be helpful, friendly, and conversational in your responses.
             note: make your responses small `
    ),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  return promptTemplate;
};
