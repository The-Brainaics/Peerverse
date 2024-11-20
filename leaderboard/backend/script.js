document.addEventListener("DOMContentLoaded", () => {
    const leaderboardTable = document.querySelector("#leaderboard tbody");
  
    // Fetch data from the backend
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        leaderboardTable.innerHTML = data
          .map((user, index) => {
            return `
              <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.performanceScore}</td>
                <td>${user.reviews}</td>
              </tr>
            `;
          })
          .join("");
      })
      .catch((error) => console.error("Error fetching leaderboard data:", error));
  });
  