import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const VALID_STATUS = [
  "submitted",
  "reviewing",
  "quoted",
  "approved",
  "rejected",
  "closed",
] as const;

export async function GET() {
  try {
    const db = await getDb();
    const serviceRequests = await db
      .collection("serviceRequests")
      .find({})
      .sort({ createdAt: -1 })
      .limit(300)
      .toArray();

    return NextResponse.json({ serviceRequests });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch service requests." },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const id = String(body?.id || "").trim();
    const status = String(body?.status || "").trim();

    if (!id || !VALID_STATUS.includes(status as (typeof VALID_STATUS)[number])) {
      return NextResponse.json(
        { error: "Invalid service request update payload." },
        { status: 400 },
      );
    }

    const db = await getDb();
    await db.collection("serviceRequests").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } },
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to update service request status." },
      { status: 500 },
    );
  }
}
