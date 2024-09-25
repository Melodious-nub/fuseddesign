const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
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

        // Extract form data and send the form using Formspree's API
        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                // Show the success message
                successMessage.style.display = "block";

                // Reset the form fields
                contactForm.reset();

                // Hide the success message after a few seconds
                setTimeout(function () {
                    successMessage.style.display = "none";
                }, 3000);
            } else {
                console.error('Form submission error');
            }
        }).catch(function (error) {
            console.error('Form submission failed:', error);
        });
    });
});