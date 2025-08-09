export async function GET(request, { params }) {
  const apiKeyId = params.id;
  console.log(apiKeyId);
  const apiKey = getApiKey(apiKeyId);
  return NextResponse.json({ error: "Success" }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const apiKeyId = params.id;
  console.log(apiKeyId);
  deleteApiKey(apiKeyId);
  return NextResponse.json({ error: "Deleted Succesfully" }, { status: 204 });
}
