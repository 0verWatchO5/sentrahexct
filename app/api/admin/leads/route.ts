import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const VALID_STATUS = ["new", "in-progress", "closed"] as const;

export async function GET() {
  try {
    const db = await getDb();
    const leads = await db
      .collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .limit(300)
      .toArray();

    return NextResponse.json({ leads });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch leads." },
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
        { error: "Invalid lead update payload." },
        { status: 400 },
      );
    }

    const db = await getDb();
    await db.collection("leads").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } },
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to update lead status." },
      { status: 500 },
    );
  }
}
