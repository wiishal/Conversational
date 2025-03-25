import { Dispatch, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { getAnalysisController } from "../controllers/controller.bot";
import Loading from "./ui/Loading";
import { Message } from "../types/type";

export default function AnalysisChat({
  setAnalysisData,
  messages,
}: {
  setAnalysisData: Dispatch<any>;
  messages: Message[];
}) {
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      try {
        const response = await getAnalysisController(messages);
        if (!response) return alert("failed during getting analysis");
        setAnalysis(response.data.aiMsg.replace(/\*\s?/g, ""));
        setIsLoading(false);
      } catch (error) {
        setAnalysis("soething went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, []);

  return (
    <div
      className="w-1/3 h-full border rounded-lg shadow-md p-4 overflow-y-auto text-sm"
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="flex items-center text-lg font-bold mb-4 border-b pb-2">
          Conversation Analysis
        </h2>
        <Button
          variant="destructive"
          className=" mb-4 border-b pb-2 border p-2 text-sm"
          onClick={() => setAnalysisData(null)}
        >
          Close
        </Button>
      </div>
      {isLoading && <Loading />}
      {analysis}
    </div>
  );
}
