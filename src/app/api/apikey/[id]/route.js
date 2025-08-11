import { deleteApiKey, getApiKey } from "@/lib/services/apiKeyService";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function GET(request, { params }) {
  const { id } = await params;
  console.log(id);
  if (!id) {
    return NextResponse.json({ error: "Missing API key ID" }, { status: 400 });
  }
  const apiKey = await getApiKey(id);
  if (apiKey === null) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
  return NextResponse.json({ data: apiKey }, { status: 200 });
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Missing API key ID" },
        { status: 400 }
      );
    }
    const isDeleted = await deleteApiKey(id);
    if (!isDeleted) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Deleted Succesfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: `Error ${e}` }, { status: 500 });
  }
}
