import { getBots } from "../services/services.bot";
import { ebotType } from "../types/enum";
import { botsData } from "../types/type";
import { botarr } from "../util/bots";

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
export function organizeBotsByType(): botsData {
  const organized: botsData = {
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
