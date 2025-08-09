import { getCollection } from "../db/mongodb";

export async function getApiKey(apiKeyId) {
  const collection = getCollection("ApiKey");
  const result = await collection.findOne({ apiKeyId });
  if (!result.acknowledged) {
    throw new Error("Problem with database");
  }
  return result.apiKey;
}

export async function SaveApiKey(apiKey) {
  const collection = getCollection("ApiKey");
  const result = await collection.insertOne({ apiKey });
  if (!result.acknowledged) {
    throw new Error("Problem with database");
  }
  return result.insertedId;
}

export async function deleteApiKey(apiKeyId) {
  const collection = getCollection("ApiKey");
  const result = await collection.deleteOne({ apiKey });
  if (!result.acknowledged) {
    throw new Error("Problem with database");
  }
}
