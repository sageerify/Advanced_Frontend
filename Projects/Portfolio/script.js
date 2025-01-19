document.getElementById("contactForm")?.addEventListener("submit", function(event){
    EventTarget.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messages").value;

    alert( `Thank you for your message, ${name}! We will get back to you at ${email}.`);


});
function showProjectDetails(projectName){
    alert(`More details about ${ProjectName} will be avaible soon!`);

}
function validateContactForm(){
    const email = document.getElementById("email").value;
    if(!email.include("@")){
        alert("Please enter a valid email address.");
        return false;
    }
    return false
}
