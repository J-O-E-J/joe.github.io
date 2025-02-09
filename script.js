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

// Ensure "Not Interested" always moves to the next slide
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

function sayYes() {
    alert("Yay! You made the right choice! 💖");
}

showSlide(0);
