// Get the main div
let mainDiv = document.getElementById("main_div");

// Add class function
function addClass(button) {
    mainDiv.classList.remove("hidden");
    mainDiv.classList.add("change_color");
    button.style.backgroundColor = "grey";
}

// Toggle class function
function toggle(button) {
    mainDiv.classList.toggle("hidden");
    button.style.backgroundColor = "grey";
}

// Remove class function
function remove(button) {
    mainDiv.classList.remove("change_color");
    button.style.backgroundColor = "grey";
}

// Check if class exists function
function containClass(button) {
    if (mainDiv.classList.contains("change_color")) {
        alert("Class 'change_color' exists!");
    } else {
        alert("Class 'change_color' does not exist!");
    }
    button.style.backgroundColor = "grey";
}