import { NextResponse } from "next/server";
import { bookings } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  const payload = await req.json();
  return NextResponse.json(
    {
      message: "Booking request accepted (mock).",
      booking: { id: `BK-${Math.floor(Math.random() * 100000)}`, ...payload },
    },
    { status: 201 }
  );
}

