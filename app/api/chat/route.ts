import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the Data Mentor Labs AI assistant. You help visitors learn about our services and answer their questions.

About Data Mentor Labs:
- We are a technology agency specializing in AI bot creation, web development, data analytics, and cloud technology.
- We help businesses grow through smart AI tools, modern websites, and data-driven strategies.
- Our services include: AI Bots Creation, Web Development, Data Analytics, and Consulting.
- We have completed 50+ projects, served 30+ happy clients, have 15+ team members, and 3+ years of experience.

Guidelines:
- Be friendly, concise, and helpful.
- If someone asks about pricing or specific project details, suggest they reach out via our contact form or email.
- Keep responses short (2-3 sentences max) unless the user asks for detail.
- Do not make up information about the company that isn't provided above.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    console.error("[Chat API] GROK_API_KEY is not set");
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3-mini-fast",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Chat API] Grok returned ${response.status}: ${errorText}`);
      return NextResponse.json(
        { error: "Failed to get response", details: errorText },
        { status: response.status },
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[Chat API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
