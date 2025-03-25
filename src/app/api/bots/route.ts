import { organizeBotsByType } from "@/app/services/services.bot";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categorizedBots = organizeBotsByType();
    return NextResponse.json({
      status: 200,
      bots: categorizedBots,
    });
  } catch (error) {
    console.error("Error fetching bots:", error);
    return NextResponse.json(
      {
        status: 500,
        error: "Failed to fetch bots",
      },
      { status: 500 }
    );
  }
}
