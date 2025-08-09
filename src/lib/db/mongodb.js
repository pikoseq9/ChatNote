import { MONGO_DB_URI_ENV } from "./utils/env";

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = MONGO_DB_URI_ENV;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export function getCollection(collectionName) {
  return client.db("chatnote").collection(collectionName);
}
