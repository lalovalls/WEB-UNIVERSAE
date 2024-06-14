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

openPopup.onclick = function() {
    popup.style.display = 'block';
    showSlides(slideIndex);
}

closePopup.onclick = function() {
    popup.style.display = 'none';
}
function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}

function showSlides(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

document.querySelector('.prev').onclick = function() {
    changeSlide(1);
}

document.querySelector('.next').onclick = function() {
    changeSlide(-1);
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex);
}