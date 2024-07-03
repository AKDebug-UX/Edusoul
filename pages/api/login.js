import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = ["password", "email"];
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
      return res.status(400).json({ error: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(existingUser.password, 10);

    // Verify the password using bcrypt
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      hashedPassword
    );

    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Password is valid, return user data (excluding the password)
    const { password, ...userData } = existingUser;
    return res.status(200).json(userData);
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
