import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    return NextResponse.json({
      ok: true,
      message: "User registered successfully.",
      user: {
        email: payload.email,
        riskLevel: payload.riskLevel,
        riskScore: payload.riskScore,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    )
  }
}
