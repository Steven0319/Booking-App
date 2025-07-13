//event bubbling
const card = document.querySelector('.card');
card.addEventListener('click', (e) => {
    console.log('click en card');
    e.stopPropagation();
});
const info = document.querySelector('.info');
info.addEventListener('click', (e) => {
    console.log('click en info');
    e.stopPropagation();
});

const titulo = document.querySelector('.titulo');
titulo.addEventListener('click', (e) => {
    console.log('click en titulo');
    e.stopPropagation();
});