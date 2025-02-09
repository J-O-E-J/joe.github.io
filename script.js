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

function sayYes() {
    alert("Yay! Happy Valentine's Day!");
}

function sayNo() {
    document.getElementById('noMessage').style.display = 'block';
    document.querySelector('.slide button:nth-child(2)').style.display = 'none';
}

showSlide(0);
