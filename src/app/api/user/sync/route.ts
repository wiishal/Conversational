import { prisma } from "@/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//register user if not exists
export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 401 },
    );
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 },
    );
  }

  try {
    await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
        progress: {
          create: {},
        },
      },
    });

    return NextResponse.json(
      { success: true, message: "User ID logged" },
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

//fetch user progress
export async function GET() {
  const { userId } = await auth();

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId || "" },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 },
      );
    }

    const userProgress = await prisma.userProgress.findUnique({
      where: { userId: user.id },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User ID logged",
        userProgress: userProgress,
      },
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
