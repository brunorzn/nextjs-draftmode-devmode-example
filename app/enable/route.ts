import { NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET() {
  const draftModeInstance = await draftMode();
  if (draftModeInstance.isEnabled) {
    return NextResponse.json({ message: "Draft mode is already enabled" });
  }
  await draftModeInstance.enable();
  return NextResponse.json({ message: "Draft mode enabled" });
}
