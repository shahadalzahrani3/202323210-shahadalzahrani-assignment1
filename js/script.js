// ==========================
// Dark / Light Mode
// ==========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }

});


// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your message has been received.";

  contactForm.reset();

});
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to my portfolio.";
}