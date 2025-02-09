let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
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

    // Set message value in hidden input field
    document.getElementById('emailMessage').value = messageContent;

    // Submit the hidden form
    document.getElementById('emailForm').submit();

    alert("Message sent successfully! 💌");
}
showSlide(0);
