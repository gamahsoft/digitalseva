import { NextResponse } from "next/server";
import { contactPayloadFromJson, sendContactEmail } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const payload = contactPayloadFromJson(await request.json());
    const result = await sendContactEmail(payload);

    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while sending your demo request. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
