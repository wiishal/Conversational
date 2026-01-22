import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, writing, audience, tone, purpose } = body;

    console.log("Received for email analysis:", body);
    console.log(body.subject , "subject from api")
    if (!subject || !writing) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 200 },
      );
    }

    const wordCount = writing.trim().split(/\s+/).length;

    if (wordCount < 0) {
      return NextResponse.json(
        { success: false, message: "Minimum 40 words required" },
        { status: 200 },
      );
    }

    // 🔮 AI analysis placeholder
    const analysis = {
      clarityScore: 7,
      structureScore: 6,
      toneMatch: tone ?? "Neutral",
      feedback: "Good effort. Try adding a proper greeting and closing.",
    };

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Analysis failed" },
      { status: 500 },
    );
  }
}
