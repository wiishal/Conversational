import { ebotType, etag } from "./enum";

export interface bots {
  id: string;
  name: string;
  description: string;
  tag: etag;
  type: ebotType;
  avatarColor?: string; // Optional prop for visual variety
}
export interface botsData {
  communication: bots[];
  interview: bots[];
  personality: bots[];
  mythology: bots[];
}