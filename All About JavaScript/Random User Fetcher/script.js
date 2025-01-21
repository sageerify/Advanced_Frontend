let allUsers = [];
let maleUsers = [];
let femaleUsers = [];
const base_url = "https://randomuser.me/api/?results=20"; // Default URL for fetching 20 users
window.onload = function() {
  document.getElementById("fetch-users-btn").addEventListener("click", () => {
    fetchUsers();
  });
  // Set up event listeners for gender-specific links
  document.getElementById("female-link").addEventListener("click", () => {
    fetchUsersByGender("female");
  });
  document.getElementById("male-link").addEventListener("click", () => {
    fetchUsersByGender("male");
  });
};
// Fetch users (default, no gender)
async function fetchUsers() {
  try {
    const response = await fetch(base_url);
    if (response.ok) {
      const data = await response.json();
      allUsers = data.results;
      // Show all users by default
      displayUserCards(allUsers);
      // Display gender filter links
      document.getElementById("gender-links").style.display = "block";
      // Hide the fetch button after data is fetched
      document.getElementById("fetch-users-btn").style.display = "none";
      document.getElementById("users-container").style.display = "flex";
    } else {
      console.log("Failed to fetch users");
    }
  } catch (error) {
    console.log("Error fetching users", error);
  }
}
// Fetch users by gender (male or female)
async function fetchUsersByGender(gender) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`);
    if (response.ok) {
      const data = await response.json();
      const users = data.results;
      // Show filtered users by gender
      displayUserCards(users);
    } else {
      console.log(`Failed to fetch ${gender} users`);
    }
  } catch (error) {
    console.log(`Error fetching ${gender} users`, error);
  }
}
// Function to display user cards
function displayUserCards(users) {
  const usersContainer = document.getElementById("users-container");
  usersContainer.innerHTML = ""; // Clear previous content
  users.forEach(user => {
    const card = document.createElement("div"); // Dynamically inject user data
    card.className = "user-card";
    card.id = user.id.value;
    card.innerHTML = `
      <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" />
      <h4>${user.name.first} ${user.name.last}</h4>
    `;
    usersContainer.appendChild(card);
  });
}