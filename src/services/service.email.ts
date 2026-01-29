import axios from "axios";
import { EmailAnalysisPayload } from "../types/type";

export async function getEmailAnalysis(UserEmailWriting: EmailAnalysisPayload) {
  try {
    const responce = await axios.post("/api/email/analyze", UserEmailWriting);
    console.log("Service received response:");
    return responce.data;
  } catch (error:any) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
}

export async function getEmailTasks(level: number) {
  try {
    const responce = await axios.get(`/api/email/tasks?level=${level}`);
    return responce.data;
  } catch (error:any) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
}

export async function updateEmailLevel() {
  try {
    const responce = await axios.post(`/api/email/tasks/updateLevel`);
    return responce.data;
  } catch (error:any) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
}
