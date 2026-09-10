import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const newLead = await db
      .insert(leads)
      .values({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        leadType: body.leadType || "general",
        property: body.property || null,
        location: body.location || null,
        source: body.source || null,
        campaign: body.campaign || null,
        message: body.message || null,
      })
      .returning();

    return NextResponse.json(
      { success: true, lead: newLead[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
