import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


//fetch email tasks based on level
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const level = Number(searchParams.get("level") ?? "1");

  console.log("Fetching email tasks for level:", level);
  try {
    const tasks = await prisma.emailTask.findMany({
      where: {
        level: level,
      },
    });
    return NextResponse.json({ success: true, tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 },
    );
  }
}


