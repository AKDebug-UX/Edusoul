import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if the email already exists in the database
    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    // If the user does not exist, check if the name exists
    const userByName = await db
      .collection("users")
      .findOne({ name: req.body.fullName });

    if (userByName) {
      // If the name exists, update the user by name
      await db.collection("users").updateOne(
        { name: req.body.fullName },
        {
          $set: {
            email: req.body.email,
            role: req.body.role,
            // Add other fields to update as needed
          },
        }
      );
      return res
        .status(200)
        .json({ message: "User updated successfully by name" });
    }

    // Check if any required field is missing
    const requiredFields = [
      "fullName",
      "password",
      "email",
      "mobilePhone",
      "role",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // If the user does not exist by email or name, create a new user object with the provided data
    const newUser = {
      name: req.body.fullName,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.mobilePhone,
      role: req.body.role,
      // Add other fields as needed
    };

    // Insert the new user into the database
    await db.collection("users").insertOne(newUser);

    res
      .status(200)
      .json({ message: "User registered or updated successfully" });
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
