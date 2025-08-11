import { SaveApiKey } from "@/lib/services/apiKeyService";
import { SaveApiKeySchema } from "@/lib/validation/apiKeySchema";
import { NextResponse } from "next/server";
import { json } from "zod";

export async function POST(request) {
  const body = await request.json();
  const parsed = SaveApiKeySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
  try {
    const apiKeyId = await SaveApiKey(parsed.data.apiKey);
    return NextResponse.json(
      { message: `Succesfully Saved ApiKey with ID: ${apiKeyId}` },
      { status: 201 }
    );
  } catch (exception) {
    return NextResponse.json({ error: `Error: ${exception}` }, { status: 500 });
  }
}
