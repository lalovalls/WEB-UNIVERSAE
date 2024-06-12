document.getElementById('logo-link').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.querySelector('.container');
    container.style.display = 'flex';
});
