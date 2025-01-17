let base_url = "https://jsonplaceholder.typicode.com/posts";

window.onload = function () {
    const postID = new URLSearchParams(window.location.search);
    const detailId = postID.get("id");

    if (detailId) {
        singlePost(detailId);
    } else {
        document.getElementById("fetch_posts").addEventListener("click", () => {
            fetchPosts();
        });
    }
};


async function singlePost(id) {
    try {
        const response = await fetch(`${base_url}/${id}`);
        if (response.ok) {
            const singleData = await response.json();
            const singleDataPost = document.getElementById("post_detail");
            singleDataPost.innerHTML = `
        <h2>Post ID: ${singleData.id}</h2>
        <h3>User ID: ${singleData.userId}</h3>
        <h5>${singleData.title}</h5>
        <p>${singleData.body}</p>
      `;
        } else {
            console.error("Failed to fetch single post.");
        }
    } catch (error) {
        console.error("Error fetching single post:", error);
    }
}

async function fetchPosts() {
    const errorMessage = document.getElementById("error");
    const spinner = document.getElementById("spinner");
    const postContainer = document.getElementById("post_container");
    postContainer.innerHTML = ""; // Clear previous posts
    spinner.classList.remove("d-none"); // Show spinner

    try {
        const response = await fetch(base_url);
        if (response.ok) {
            const data = await response.json();

            data.forEach((item) => {
                let card = document.createElement("div");
                card.className = "cards col-md-4";
                card.id = `post-${item.id}`;
                card.innerHTML = `
          <div>
            <h2>Post ID: ${item.id}</h2>
            <h3>User ID: ${item.userId}</h3>
            <h5>${item.title}</h5>
            <p>${item.body}</p>
            <button class="btn btn-info" onclick="viewSinglePost(${item.id})">View Post</button>
            <button class="btn btn-danger" onclick="deletePost(${item.id})">Delete Post</button>
          </div>
        `;
                postContainer.appendChild(card);
            });
        } else {
            console.error("Failed to fetch posts.");
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        errorMessage.innerText= error.message;
    } finally {
        spinner.classList.add("d-none"); // Hide spinner
    }
}

function deletePost(id) {
    const postElement = document.getElementById(`post-${id}`);
    if (postElement) {
        postElement.remove();
    }
}

function viewSinglePost(id) {
    window.location.href = `postDetail.html?id=${id}`;
}


document.getElementById("back_to_home").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  
