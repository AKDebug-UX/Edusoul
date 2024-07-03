import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = ["user", "text", "roomId"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }
    // If the user does not exist, create a new user object with the provided data
    const newRoom = {
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
    };

    // Insert the new user into the database
    const result = await db.collection("chats").insertOne(req.body);

    res.status(200).json({
      data: result.insertedId,
      message: "Chat sent successfully",
    });
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
