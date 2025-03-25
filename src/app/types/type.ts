import { ebotType, etag } from "./enum";

export interface bots {
  id: string;
  name: string;
  description: string;
  tag: etag;
  type: ebotType;
  avatarColor?: string;
}
export interface BotsData {
  communication: bots[];
  interview: bots[];
  personality: bots[];
  mythology: bots[];
}

export interface Message {
  role: "user" | "assistant";
  content: string;
}
