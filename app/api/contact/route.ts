import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !subject || !message) {
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
    const result = await db.collection("leads").insertOne({
      type: "contact",
      name,
      email,
      subject,
      message,
      status: "new",
      source: "website-contact-form",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your message right now." },
      { status: 500 },
    );
  }
}
