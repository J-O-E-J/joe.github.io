let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function startSlides() {
    document.getElementById("introSlide").style.display = "none";
    showSlide(0);
    document.getElementById("navButtons").style.display = "block";
}

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

    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeidCbncZzq9nVd0aM-BGHlXx-AoLlywseCNRNPBE173mZ-jw/formResponse";
    let entryID = "entry.1143575870";

    let formData = new FormData();
    formData.append(entryID, messageContent);

    fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        alert("Message sent successfully! ✅ Check Google Sheets.");
    }).catch(error => {
        console.error("Error:", error);
        alert("Oops! Something went wrong.");
    });
}

showSlide(0);
