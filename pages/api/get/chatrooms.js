import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if the email already exists in the database
    const chatrooms = await db.collection("chatrooms").find().toArray();

    if (!chatrooms) {
      res.status(400).json({ error: "No chatroom in the database" });
    } else {
      res
        .status(200)
        .json({
          data: chatrooms,
          message: "chatrooms retrieved from database",
        });
    }
  } catch (error) {
    console.error("API Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
