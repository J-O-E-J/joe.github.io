let currentSlide = -1; // -1 to start from intro
const slides = document.querySelectorAll('.slide');

function startSlides() {
    document.getElementById("introSlide").style.display = "none"; // Hide intro slide
    currentSlide = 0; // Start from the first custom message slide
    slides[currentSlide].style.display = "block"; // Show first custom slide
    document.getElementById("navButtons").style.display = "block"; // Show navigation buttons
}

function showSlide(n) {
    if (currentSlide !== -1) {
        slides[currentSlide].style.display = 'none';
    }
    
    currentSlide = n;
    slides[currentSlide].style.display = 'block';

    // Show navigation only for the 4 custom message slides
    if (currentSlide >= 0 && currentSlide <= 3) {
        document.getElementById('navButtons').style.display = 'block';
    } else {
        document.getElementById('navButtons').style.display = 'none';
    }
}

function nextSlide() {
    if (currentSlide < 3) {  // Only for the 4 custom message slides
        changeSlide(1);
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function showFinalOption() {
    slides[currentSlide].style.display = 'none';
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

    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeidCbncZzq9nVd0aM-BGHlXx-AoLlywseCNRNPBE173mZ-jw/formResponse"";
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

// Ensure only intro slide is visible on load
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
document.getElementById("introSlide").style.display = "flex"; // Show intro slide by default


    
