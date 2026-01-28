export function buildEmailAnalysisPrompt(
  subject: string,
  writing: string,
) {
  return `
You are a professional business email evaluator for a platform called WriteWise.

Task:
Evaluate the user's email based on the subject and email body.

Evaluation rules:
1. Clarity score (1–100): clarity and ease of understanding.
2. Structure score (1–100): organization (greeting, body, closing).
3. Tone match: classify the tone using ONE of these values only:
   - Professional
   - Neutral
   - Friendly
   - Formal
   - Informal
   - Apologetic
   - Assertive
4. Feedback: 1–2 concise sentences with clear improvement suggestions.
5. Do NOT rewrite the email.
6. Do NOT explain the scores.
7. Output MUST be valid JSON only.
8. Do NOT include markdown or extra text.

Return exactly this JSON structure:
{
  "clarityScore": number,
  "structureScore": number,
  "toneMatch": string,
  "feedback": string
}

User Input:
Email Subject: "${subject}"
Email Body: "${writing}"
`;
}
