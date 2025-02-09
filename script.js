let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';

    // Hide navigation buttons after the 4th slide
    if (currentSlide >= 4) {
        document.getElementById('navButtons').style.display = 'none';
    } else {
        document.getElementById('navButtons').style.display = 'block';
    }
}

// Ensure "Nah" always moves to the next slide only
function nextSlide() {
    if (currentSlide < slides.length - 4) {
        changeSlide(1);
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function showFinalOption() {
    document.getElementById('valentineQuestion').style.display = 'none';
    document.getElementById('finalYesSlide').style.display = 'block';
}

function showMessageSlide() {
    document.getElementById('finalYesSlide').style.display = 'none';
    document.getElementById('messageSlide').style.display = 'block';
}

function sendMessage() {
    let messageContent = document.getElementById('valentineMessage').value;
    if (messageContent.trim() === "") {
        alert("Please type a message before sending! 💌");
        return;
    }

    // Replace with your Google Apps Script Web App URL
    let googleScriptURL = "https://script.google.com/macros/s/AKfycbxUgq2LKxNi2o2DpzKnLrz_SjTfIp6uK1dk4u8jOGOJPRzNT-Z5nebCAe8tv4g48qUa/exec";

    fetch(googleScriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageContent })
    })
    .then(response => response.text())
    .then(result => {
        alert("Message saved successfully! ✅ Check Google Sheets.");
    })
    .catch(error => {
        console.error("Error saving message:", error);
        alert("Oops! Something went wrong. Try again.");
    });
}
showSlide(0);
