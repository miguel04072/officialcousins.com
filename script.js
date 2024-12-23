// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Create and display the thank you message
        const thankYouMessage = document.createElement("div");
        thankYouMessage.innerHTML = `
            <h3>Thank you for reaching out!</h3>
            <p>We appreciate your message and will get back to you as soon as possible.</p>
        `;
        thankYouMessage.style.textAlign = "center";
        thankYouMessage.style.marginTop = "20px";
        thankYouMessage.style.color = "#805110";

        // Replace the form with the thank you message
        form.parentNode.replaceChild(thankYouMessage, form);
    });
});
