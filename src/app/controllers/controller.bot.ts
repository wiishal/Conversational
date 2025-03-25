import { getAnalysis, getBots } from "../services/service.user";
import { Message } from "../types/type";


export async function getBotController() {
  try {
    const res = await getBots();

    if (!res) {
      alert("failed to fetch");
      return [];
    }

    return res.data.bots;
  } catch (error) {
    alert("error during fetching bots");
    console.error(error);
    return [];
  }
}

export async function getAnalysisController(chat:Message[]) {
  try {
    const responce = await getAnalysis(chat)
    if(!responce) return false
    return responce
  } catch (error) {
    console.error("Error while getting analysis",error)
    return false
  }
}
