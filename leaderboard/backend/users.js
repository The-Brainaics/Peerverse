use leaderboardDB;

db.users.insertMany([
  { name: "Alice", performanceScore: 95, reviews: "Excellent!" },
  { name: "Bob", performanceScore: 90, reviews: "Great work!" },
  { name: "Charlie", performanceScore: 85, reviews: "Good effort." }
]);
