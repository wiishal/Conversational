import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";
import { bots } from "../types/type";

export const AnalysisSYSTEMPrompt = `The prompt is a conversation between the user and you. Review the user's messages and rate them from 1 to 10.  
Note: Only review the user's messages, as you are the system.  
`;

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
