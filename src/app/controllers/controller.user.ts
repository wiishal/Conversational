import { AxiosResponse } from "axios";
import { initializeChat, sendMsg } from "../services/service.user";

export async function initializeChatController(
  botId: string
): Promise<AxiosResponse | false> {
  try {
    const responce = await initializeChat(botId);
    if (!responce) {
      return false;
    }
    return responce;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function sendMsgController(
  botId: string,
  usermsg: string,
  conversationId: string
): Promise<AxiosResponse | false> {
  if (!conversationId) return false;
  try {
    const responce = await sendMsg(botId, usermsg, conversationId);
    if (!responce) {
      return false;
    }
    return responce;
  } catch (error) {
    console.log(error);
    return false;
  }
}
