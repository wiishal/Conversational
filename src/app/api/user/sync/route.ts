import { AppError } from "@/lib/error/error";
import { handleApiError } from "@/lib/error/handleApiError";
import { prisma } from "@/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//register user if not exists
export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    throw new AppError("User not found", 401, "USER_NOT_FOUND");
  }

  const user = await currentUser();
  if (!user) {
    throw new AppError("User not found", 401, "USER_NOT_FOUND");
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
    handleApiError(error);
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
      throw new AppError("User not found", 401, "USER_NOT_FOUND");
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
   return handleApiError(error);
  }
}
