document.getElementById('logo-link').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.querySelector('.container');
    container.style.display = 'flex';
});

let slideIndex = 0;
const slides = document.querySelectorAll('.popup-slides img');
const popup = document.getElementById('popupCarrusel');
const openPopup = document.getElementById('openPopup');
const closePopup = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


openPopup.onclick = function() {
    popup.style.display = 'block';
    showSlides(slideIndex);
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}
function showSlides(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}
prevButton.onclick = function() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}
nextButton.onclick = function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}
