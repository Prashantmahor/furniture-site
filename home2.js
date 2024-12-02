// Hero Slider Logic
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    const offset = index * -100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function autoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlide(); // Restart auto slide
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlide(); // Restart auto slide
});

// Start the slider
autoSlide();

// for the registration window

document.getElementById('Get-started').onclick = function() {
    document.getElementById('popup').style.display = 'flex';
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};

document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Registration form submitted!');
    document.getElementById('popup').style.display = 'none';
};
