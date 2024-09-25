const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Optionally, you can do an AJAX submission here if needed.
        // For this example, we'll just show the success message.

        // Show the success message
        successMessage.style.display = "block";

        // Reset the form fields
        contactForm.reset();

        // Optional: Hide the success message after a few seconds
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000);
    });
});
