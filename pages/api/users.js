import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);

  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if the email already exists in the database
    const allUsers = await db
      .collection("users")
      .find({ role: "talent" })
      .toArray();

    if (!allUsers) {
      res.status(400).json({ error: "Talents not found " });
    } else {
      res
        .status(200)
        .json({ data: allUsers, message: "Talents retrieved from database" });
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
