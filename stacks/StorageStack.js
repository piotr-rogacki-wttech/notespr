import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  
  const bucket = new Bucket(stack, "Uploadspr");

  // Create the DynamoDB table
  const table = new Table(stack, "Notespr", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}