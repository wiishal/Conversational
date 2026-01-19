import axios from "axios";

export async function getAnalysis(userWriting: string) {
  try {
    const responce = await axios.post("/api/write/analyze",  userWriting );
    return responce.data;
  } catch (error) {
    throw error;
  }
}