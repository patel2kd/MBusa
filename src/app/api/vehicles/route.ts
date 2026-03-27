import { NextRequest, NextResponse } from "next/server";
import { vehicles } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location");
  const status = request.nextUrl.searchParams.get("status");
  const data = vehicles.filter((v) => {
    const matchesLocation = location ? v.location === location : true;
    const matchesStatus = status ? v.status === status : true;
    return matchesLocation && matchesStatus;
  });
  return NextResponse.json(data);
}

