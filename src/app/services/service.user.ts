// const res = await axios.get("/api/user/sync",);

import axios from "axios";


export async function logUserId() {
  try {
    const res = await axios.post("/api/user/sync");
    return res.data;
  } catch (error) {
    throw error;
  }
}
export async function fetchUserProgress() {
  try {
    const res = await axios.get("/api/user/sync");
    return res.data;
  } catch (error) {
    throw error;
  }
}
