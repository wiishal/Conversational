import { getAnalysis } from "../services/services.write";
import { emailAnalysis, UserWriting } from "../types/type";

export async function getAnalysisController(userWriting: UserWriting) {
  const userWritingJson: string = JSON.stringify(userWriting);
  try {
    const data = await getAnalysis(userWritingJson);
    if (!data?.analysis) {
      return { success: false, message: data?.message || "No analysis found" };
    }
    return { success: true, analysis: data.analysis };
  } catch (error) {
    console.error("Error while getting analysis", error);
    return { success: false, message: "Failed to fetch analysis" };
  }
}

