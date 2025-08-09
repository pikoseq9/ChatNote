import * as z from "zod";

export const SaveApiKeySchema = z.object({
  apiKey: z.string(),
});
