import { NextResponse } from "next/server";
import { bookingsOverTime, metrics, topLocations, usageByCategory } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ metrics, bookingsOverTime, usageByCategory, topLocations });
}

