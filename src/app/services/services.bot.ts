import axios from "axios";

export async function getBots() {
  try {
    const res = await axios.get("api/bots");
    if (!res) return false;
    return res;
  } catch (error) {
    console.error(error)
    return false;
  }
}
