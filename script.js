let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';

    // Hide navigation buttons on the last slide
    if (currentSlide === slides.length - 1) {
        document.getElementById('navButtons').style.display = 'none';
    } else {
        document.getElementById('navButtons').style.display = 'block';
    }
}

// Ensure "Not Interested" always moves to the next slide only
function nextSlide() {
    if (currentSlide < slides.length - 2) {
        changeSlide(1);
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function sayNo() {
    document.getElementById('hiddenMessage').style.display = 'block';
    document.getElementById('yesButton').style.display = 'block';
    document.getElementById('noButton').style.display = 'none';
}

function showMessageSlide() {
    alert("Yay! You made the right choice! 💖");
    
    // Hide final slide & show message slide
    document.getElementById('finalSlide').style.display = 'none';
    document.getElementById('messageSlide').style.display = 'block';
}

function sendMessage() {
    let messageContent = document.getElementById('valentineMessage').value;
    if (messageContent.trim() === "") {
        alert("Please type a message before sending! 💌");
        return;
    }

    // Send email notification with message
    fetch("https://formsubmit.co/YOUR_UNIQUE_EMAIL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            subject: "Valentine's Message ❤️",
            message: "Someone just pressed 'I will be your Valentine'!\n\nMessage: " + messageContent,
            timestamp: new Date().toLocaleString()
        })
    })
    .then(response => {
        alert("Message sent successfully! 💌");
        console.log("Notification sent!");
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong. Try again.");
    });
}

showSlide(0);
