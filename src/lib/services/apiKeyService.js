import { getCollection } from "../db/mongodb";
const { ObjectId } = require("mongodb");

export async function getApiKey(apiKeyId) {
  const collection = getCollection("ApiKey");
  const id = ObjectId.createFromHexString(apiKeyId);
  const result = await collection.findOne({ _id: id });

  if (result === null) return null;
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
  const id = ObjectId.createFromHexString(apiKeyId);

  const result = await collection.deleteOne({ _id: id });
  if (!result.acknowledged) {
    throw new Error("Problem with database");
  }
  if (result.deletedCount === 0) return false;
  return true;
}
