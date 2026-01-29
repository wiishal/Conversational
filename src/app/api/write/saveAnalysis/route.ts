import { NextRequest, NextResponse } from "next/server";
import { AppError } from "@/lib/error/error";
import { handleApiError } from "@/lib/error/handleApiError";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body)
  try {
    if (!body) {
      throw new AppError("Error while getting Body", 401, "INVALID_INPUT");
    }

    return NextResponse.json(
      {
        success:true,
        message: "success",
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
