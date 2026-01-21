import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//update email level
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 401 },
    );
  }
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 },
      );
    }
    await prisma.userProgress.update({
      where: { userId: user.id },
      data: {
        emailLevel: {
          increment: 1,
        },
      },
    });
    return NextResponse.json(
      { success: true, message: "Email level updated" },
      { status: 200 },
    );
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
