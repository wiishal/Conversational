import axios from "axios";

export async function initializeChat(botId: string) {
  try {
    const responce = await axios.post(`/api/chat/${botId}`, {
      message: "start",
    });
    if (!responce) return false;
    return responce;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function sendMsg(
  botId: string,
  usermsg: string,
  conversationId: string
) {
  try {
    const responce = await axios.post(`/api/chat/${botId}`, {
      message: usermsg,
      conversationId: conversationId,
    });
    if (!responce) return false;
    return responce;
  } catch (error) {
    console.error(error);
    return false;
  }
}
