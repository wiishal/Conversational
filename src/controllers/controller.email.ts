import { getEmailAnalysis, getEmailTasks, updateEmailLevel } from "../services/service.email";
import {  EmailAnalysisPayload, EmailTask, } from "../types/type";

export async function getEmailTasksController(level:number): Promise<{ success: boolean; tasks?: EmailTask[]; message: string }> {
  try {
    const responce = await getEmailTasks(level);
    if (!responce.success) {
      return { success: false, message: responce.error?.message || "No tasks found" };
    }
    return { success: true, tasks: responce.tasks, message: "Email subjects fetched successfully" };
  } catch (error) {
    console.error("Error while getting email tasks", error);
    return { success: false, message: "Failed to fetch email tasks" };
  }
}


export async function getEmailAnalysisController(userEmailWriting: EmailAnalysisPayload) {

  try {
    const responce = await getEmailAnalysis(userEmailWriting)
    console.log(responce)
    if (!responce.success) {
      return { success: false, message: responce.error?.message || "No analysis found" };
    }
    return { success: true, analysis: responce.analysis };
  } catch (error) {
    console.error("Error while getting analysis", error);
    return { success: false, message: "Failed to fetch analysis" };
  }
}



export async function updateEmailLevelController() {

  try {
    const responce= await updateEmailLevel()
    if (!responce.success) {
      return { success: false, message:responce.error?.message || "Failed to update email level" };
    }
    return { success: true, analysis: responce.analysis };
  } catch (error) {
    console.error("Error while getting analysis", error);
    return { success: false, message: "Failed to fetch analysis" };
  }
}