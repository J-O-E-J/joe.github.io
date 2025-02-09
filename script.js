let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
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
    document.getElementById('animationContainer').style.display = 'block';
}

showSlide(0);
