// Play/Pause button for the music section
const playPauseButton = document.getElementById('play-pause');
const audioPlayer = document.getElementById('audio-player');

// Toggle play/pause on the music button
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause Music";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play Music";
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

// Handle form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if form inputs are not empty
    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} shortly.`);
        
        // You can also log the message or send it to your server here
        console.log(`Message from: ${name}, Email: ${email}, Message: ${message}`);

        // Reset form after submission
        contactForm.reset();
    } else {
        alert("Please fill in all fields before submitting!");
    }
});

// Social Media Links - Open in New Tab
const facebookLink = document.querySelector("a[href='https://www.facebook.com/CousinsOfficial']");
const instagramLink = document.querySelector("a[href='https://www.instagram.com/CousinsOfficial']");
const youtubeLink = document.querySelector("a[href='https://www.youtube.com/CousinsOfficial']");

facebookLink.addEventListener('click', function (e) {
    window.open('https://www.facebook.com/CousinsOfficial', '_blank');
});

instagramLink.addEventListener('click', function (e) {
    window.open('https://www.instagram.com/CousinsOfficial', '_blank');
});

youtubeLink.addEventListener('click', function (e) {
    window.open('https://www.youtube.com/CousinsOfficial', '_blank');
});
