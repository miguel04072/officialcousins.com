// Handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Optionally, you can send the form data to your email or server here.
    // For this example, we'll log the form data to the console:
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Log the data to console (for testing purposes)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // You can send the form data to an email or a server using AJAX, fetch, etc.
    // Example (This is for illustration and won't actually send emails):
    /*
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(data => {
        console.log('Form submitted successfully:', data);
    }).catch(error => {
        console.error('Error submitting form:', error);
    });
    */
});
