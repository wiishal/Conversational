import { WritingAnalysis } from "../types/type";

export function AnalysisCard({ analysis }: { analysis: WritingAnalysis }) {
  return (
    <div className="border rounded-xl p-6 bg-accent space-y-4 shadow-sm">
      <h2 className="text-xl font-semibold">Writing Analysis</h2>

      <div className="grid grid-cols-3 gap-4">
        <ScoreBox label="Clarity" value={analysis.clarityScore} />
        <ScoreBox label="Structure" value={analysis.structureScore} />
        <ScoreBox label="Grammar" value={analysis.grammerScore} />
      </div>

      <div className="border-t pt-4">
        <p className="text-sm font-medium">Feedback</p>
        <p className="text-sm text-muted-foreground">
          {analysis.feedback}
        </p>
      </div>
    </div>
  );
}

function ScoreBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-4 border rounded-lg text-center">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold">{value}/10</p>
    </div>
  );
}
