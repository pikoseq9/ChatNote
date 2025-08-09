import { client } from "@/lib/mongodb";

export async function GET() {
  try {
    if (!client.isConnected?.()) {
      await client.connect();
    }
    await client.db("admin").command({ ping: 1 });
    return new Response("MongoDB is connected and alive!");
  } catch (error) {
    console.error(error);
    return new Response("Failed to connect to MongoDB");
  }
}
