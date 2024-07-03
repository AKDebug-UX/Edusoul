import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);

  try {
    const client = await clientPromise;
    const db = client.db("Tricode");
    // Check if any required field is missing
    const requiredFields = ["email"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Check if the email already exists in the database
    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (!existingUser) {
      res.status(400).json({ error: "User does not exist in the database" });
    } else {
      res
        .status(200)
        .json({ data: existingUser, message: "User retrieved from database" });
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
