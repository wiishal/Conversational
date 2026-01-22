import axios from "axios";

export async function getEmailAnalysis(UserEmailWriting: string) {
  try {
    const responce = await axios.post("/api/email/analyze", UserEmailWriting);
    console.log("Service received response:", responce);
    return responce.data;
  } catch (error) {
    throw error;
  }
}
export async function getEmailTasks(level: number) {
  try {
    const responce = await axios.get(`/api/email/tasks?level=${level}`);

    return responce.data;
  } catch (error) {
    throw error;
  }
}

export async function updateEmailLevel() {
  try {
    const responce = await axios.post(`/api/email/tasks/updateLevel`);
    return responce.data;
  } catch (error) {
    throw error;
  }
}

