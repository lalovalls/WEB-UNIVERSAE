let slideIndex = 0;
const slides = document.querySelectorAll('.popup-slides img');
const popup = document.getElementById('popupCarrusel');
const openPopup = document.getElementById('openPopup');
const closePopup = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Mostrar popup y la imagen inicial al abrir
openPopup.onclick = function() {
    popup.style.display = 'block';
    showSlides(slideIndex);
}

// Cerrar popup al hacer clic en el botón de cerrar
closePopup.onclick = function() {
    popup.style.display = 'none';
}

// Cerrar popup si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Función para cambiar al slide especificado
function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}

// Función para mostrar el slide actual
function showSlides(n) {
    // Ocultar todas las imágenes
    slides.forEach(slide => slide.style.display = 'none');
    // Mostrar la imagen en el índice n
    slides[n].style.display = 'block';
}

// Evento para el botón Previo
prevButton.onclick = function() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
}

// Evento para el botón Siguiente
nextButton.onclick = function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}
