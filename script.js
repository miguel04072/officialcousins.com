document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hide the contact form
    document.querySelector('.contact-form').style.display = 'none';

    // Show thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for reaching out to us!';
    thankYouMessage.style.fontSize = '1.5rem';
    thankYouMessage.style.fontWeight = 'bold';
    thankYouMessage.style.color = '#5c4932'; // Dark brown color
    thankYouMessage.style.marginTop = '20px';
    document.querySelector('section.contact-form').appendChild(thankYouMessage);

    // Send email (simulated)
    const emailDetails = {
        to: 'cousins.official.net@gmail.com',
        subject: 'New Contact Form Submission',
        body: `Name: ${document.getElementById('name').value}\nEmail: ${document.getElementById('email').value}\nMessage: ${document.getElementById('message').value}`
    };
    console.log('Simulated email sent:', emailDetails);

    // Clear form fields
    document.getElementById('contactForm').reset();
});
