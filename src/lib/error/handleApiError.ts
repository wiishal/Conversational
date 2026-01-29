import { NextResponse } from "next/server";
import { AppError } from "./error";

export function handleApiError(error: any, ) {
    console.log("triggerd",error)
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
        },
      },
      { status: error.status },
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "process failed",
      },
    },
    { status: 500 },
  );
}
