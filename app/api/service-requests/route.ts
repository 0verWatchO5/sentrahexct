import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  try {
    const db = await getDb();
    const requests = await db
      .collection("serviceRequests")
      .find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch service requests." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const company = String(body?.company || "").trim();
    const serviceType = String(body?.serviceType || "").trim();
    const budgetRange = String(body?.budgetRange || "").trim();
    const timeline = String(body?.timeline || "").trim();
    const details = String(body?.details || "").trim();

    if (!name || !email || !serviceType || !details) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("serviceRequests").insertOne({
      name,
      email,
      company,
      serviceType,
      budgetRange,
      timeline,
      details,
      status: "submitted",
      source: "website-service-request",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit request right now." },
      { status: 500 },
    );
  }
}
