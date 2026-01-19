import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subject, writing } = await req.json();
    console.log("Received for analysis:", { subject, writing });

    if (!subject || !writing) {
      return NextResponse.json(
        { success: false, message: "Missing input" },
        { status: 400 }
      );
    }

    const analysis = {
      clarityScore: 6,
      structureScore: 6,
      feedback:
        "Your writing is clear, but try to organize ideas better.",
    };

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Write analysis failed" },
      { status: 500 }
    );
  }
}


