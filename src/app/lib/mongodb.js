import { MONGO_DB_URI_ENV } from "./env";

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = MONGO_DB_URI_ENV;

export const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}


run().catch(console.dir);