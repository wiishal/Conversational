
import { fetchUserProgress, logUserId } from "../services/service.user";

//log user 
export async function logUserIdController() {
  try {
    const data = await logUserId();
    if (!data?.success) {
      return { success: false, message: "User ID logging failed" };
    }
    return { success: true, message: "User ID logged successfully" };
  } catch (error) {
    console.error("Error while logging user ID", error);
    return { success: false, message: "Failed to log user ID" };
  }
}
// fetchUserProgress
export async function fetchUserProgressController() {
  try {
    const data = await fetchUserProgress();
    if (!data?.userProgress) {
      return { success: false, message: "No user progress found" };
    }
    return { success: true, userProgress: data.userProgress };
  } catch (error) {
    console.error("Error while getting user progress", error);
    return { success: false, message: "Failed to fetch user progress" };
  }
}
