import { getEmailAnalysis, getEmailTasks, updateEmailLevel } from "../services/service.email";
import {  EmailAnalysisPayload, EmailTask, } from "../types/type";

export async function getEmailTasksController(level:number): Promise<{ success: boolean; tasks?: EmailTask[]; message: string }> {
  try {
    const data = await getEmailTasks(level);
    console.log(data, "getEmailTasksController");
    if (!data?.tasks) {
      return { success: false, message: data.error?.message || "No tasks found" };
    }
    return { success: true, tasks: data.tasks, message: "Email subjects fetched successfully" };
  } catch (error) {
    console.error("Error while getting email tasks", error);
    return { success: false, message: "Failed to fetch email tasks" };
  }
}


export async function getEmailAnalysisController(userEmailWriting: EmailAnalysisPayload) {
    const userEmailWritingJson: string = JSON.stringify(userEmailWriting);

  try {
    const data = await getEmailAnalysis(userEmailWritingJson)
    if (!data?.analysis) {
      return { success: false, message: data?.error?.message || "No analysis found" };
    }
    return { success: true, analysis: data.analysis };
  } catch (error) {
    console.error("Error while getting analysis", error);
    return { success: false, message: "Failed to fetch analysis" };
  }
}



export async function updateEmailLevelController() {

  try {
    const data = await updateEmailLevel()
    if (!data?.success) {
      return { success: false, message:data?.error?.message || "Failed to update email level" };
    }
    return { success: true, analysis: data.analysis };
  } catch (error) {
    console.error("Error while getting analysis", error);
    return { success: false, message: "Failed to fetch analysis" };
  }
}