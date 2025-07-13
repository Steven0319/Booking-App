//otra forma de detener la propagation es con delegation
const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if (e.target.classList.contains('info')) {
        console.log('Diste click en info');
    }
    if (e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});