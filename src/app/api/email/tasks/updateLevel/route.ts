import { AppError } from "@/lib/error/error";
import { handleApiError } from "@/lib/error/handleApiError";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//update email level
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    throw new AppError("User not found", 401, "USER_NOT_FOUND");
  }
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) {
      throw new AppError("User not found", 401, "USER_NOT_FOUND");
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
   return handleApiError(error);
  }
}
