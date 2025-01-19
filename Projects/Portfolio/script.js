document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
});

function showProjectDetails(projectName) {
    alert(`More details about ${projectName} will be available soon!`);
}

function validateContactForm() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}