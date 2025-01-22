// Detect the current page
const currentPage = window.location.pathname.split("/").pop(); 

// Functionality for the main page (index.html)
if (currentPage === "index.html" || currentPage === "") {
  let allUsers = []; // Store fetched users
  const base_url = "https://randomuser.me/api/?results=20"; // Base API URL

  window.onload = function () {
    // Attach event to "Fetch Users" button
    document.getElementById("fetch-users-btn").addEventListener("click", () => {
      fetchUsers();
    });

    // Attach event to "Female" filter link
    document.getElementById("female-link").addEventListener("click", () => {
      fetchUsersByGender("female");
    });

    // Attach event to "Male" filter link
    document.getElementById("male-link").addEventListener("click", () => {
      fetchUsersByGender("male");
    });
  };

  // Fetch users from the API
  async function fetchUsers() {
    try {
      const response = await fetch(base_url); // Call API to get users
      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        allUsers = data.results; // Store users data
        displayUserCards(allUsers); // Display users
        document.getElementById("gender-links").style.display = "block"; // Show gender filter links
        document.getElementById("fetch-users-btn").style.display = "none"; // Hide "Fetch Users" button
        document.getElementById("users-container").style.display = "flex"; // Show users container
      } else {
        console.log("Failed to fetch users"); // Log fetch failure
      }
    } catch (error) {
      console.log("Error fetching users", error); // Log fetch error
    }
  }

  // Fetch users filtered by gender
  async function fetchUsersByGender(gender) {
    try {
      const response = await fetch(`${base_url}&gender=${gender}`); // Call API with gender filter
      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        const users = data.results; // Get filtered users
        displayUserCards(users); // Display filtered users
      } else {
        console.log(`Failed to fetch ${gender} users`); // Log failure
      }
    } catch (error) {
      console.log(`Error fetching ${gender} users`, error); // Log error
    }
  }

  // Display user cards in the container
  function displayUserCards(users) {
    const usersContainer = document.getElementById("users-container"); // Get container
    usersContainer.innerHTML = ""; // Clear previous cards
    users.forEach(user => {
      const card = document.createElement("div"); // Create card element
      card.className = "user-card"; // Set card class
      card.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" />
        <h4>${user.name.first} ${user.name.last}</h4>
        <button onclick="viewUserDetails('${encodeURIComponent(JSON.stringify(user))}')">View Details</button>
      `; // Add user details to card
      usersContainer.appendChild(card); // Add card to container
    });
  }

  // Store user details and navigate to detail page
  window.viewUserDetails = function (user) {
    localStorage.setItem("selectedUser", user); // Save user to localStorage
    window.location.href = "userDetail.html"; // Navigate to detail page
  };
}

// Functionality for the detail page (userDetail.html)
if (currentPage === "userDetail.html") {
  window.onload = function () {
    const userDetailsContainer = document.getElementById("user-details"); // Get details container
    const user = JSON.parse(decodeURIComponent(localStorage.getItem("selectedUser"))); // Retrieve user from localStorage

    if (user) {
      userDetailsContainer.innerHTML = `
        <div class="user-card">
          <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Location: ${user.location.city}, ${user.location.country}</p>
        </div>
      `; // Display user details
    } else {
      userDetailsContainer.innerHTML = "<p>User details not found.</p>"; // Show error if no user
    }
  };

  // Navigate back to the main page
  window.goBack = function () {
    window.location.href = "index.html"; // Redirect to main page
  };
}
