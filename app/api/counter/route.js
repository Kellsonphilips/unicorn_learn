import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { action, counterId } = body;

    console.log(
      `${
        action === "increment" ? "Haha Yes" : "Opps No"
      } Counter ${counterId} ${action}ed`
    );
    // anything else you want to do with the body
    // save to database
    // Do something with the data
    // Call another API

    return NextResponse.json(
      {
        success: true,
        data: { action, counterId },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating counter:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
