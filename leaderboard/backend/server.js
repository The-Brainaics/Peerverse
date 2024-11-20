const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "leaderboardDB";

app.use(express.static("public"));

app.get("/api/leaderboard", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");

    // Fetch leaderboard data sorted by performanceScore
    const users = await collection
      .find()
      .sort({ performanceScore: -1 })
      .toArray();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching leaderboard data.");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});mongod

