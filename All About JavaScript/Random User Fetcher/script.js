// Detect the current page
const currentPage = window.location.pathname.split("/").pop(); 

// Functionality for the main page (index.html)
if (currentPage === "index.html" || currentPage === "") {
  let allUsers = [];
  const base_url = "https://randomuser.me/api/?results=20";

  window.onload = function () {
    document.getElementById("fetch-users-btn").addEventListener("click", () => {
      fetchUsers();
    });

    document.getElementById("female-link").addEventListener("click", () => {
      fetchUsersByGender("female");
    });

    document.getElementById("male-link").addEventListener("click", () => {
      fetchUsersByGender("male");
    });
  };

  async function fetchUsers() {
    try {
      const response = await fetch(base_url);
      if (response.ok) {
        const data = await response.json();
        allUsers = data.results;
        displayUserCards(allUsers);
        document.getElementById("gender-links").style.display = "block";
        document.getElementById("fetch-users-btn").style.display = "none";
        document.getElementById("users-container").style.display = "flex";
      } else {
        console.log("Failed to fetch users");
      }
    } catch (error) {
      console.log("Error fetching users", error);
    }
  }

  async function fetchUsersByGender(gender) {
    try {
      const response = await fetch(`${base_url}&gender=${gender}`);
      if (response.ok) {
        const data = await response.json();
        const users = data.results;
        displayUserCards(users);
      } else {
        console.log(`Failed to fetch ${gender} users`);
      }
    } catch (error) {
      console.log(`Error fetching ${gender} users`, error);
    }
  }

  function displayUserCards(users) {
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = "";
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" />
        <h4>${user.name.first} ${user.name.last}</h4>
        <button onclick="viewUserDetails('${encodeURIComponent(JSON.stringify(user))}')">View Details</button>
      `;
      usersContainer.appendChild(card);
    });
  }

  window.viewUserDetails = function (user) {
    localStorage.setItem("selectedUser", user);
    window.location.href = "userDetail.html";
  };
}

// Functionality for the detail page (userDetail.html)
if (currentPage === "userDetail.html") {
  window.onload = function () {
    const userDetailsContainer = document.getElementById("user-details");
    const user = JSON.parse(decodeURIComponent(localStorage.getItem("selectedUser")));

    if (user) {
      userDetailsContainer.innerHTML = `
        <div class="user-card">
          <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Location: ${user.location.city}, ${user.location.country}</p>
        </div>
      `;
    } else {
      userDetailsContainer.innerHTML = "<p>User details not found.</p>";
    }
  };

  window.goBack = function () {
    window.location.href = "index.html";
  };
}
