//eventos del teclado
//cuando el usuario escribe algo
//tenemos nuestro input del formulario

const search = document.querySelector('.busqueda');
search.addEventListener('input', () => {
    console.log('escribiendo...');
});

search.addEventListener('keydown', () => {
    console.log('presionando una tecla...');
});

search.addEventListener('keyup', () => {
    console.log('soltaste la tecla...');
});

search.addEventListener('blur', () => {
    console.log('blur en el input');
});

search.addEventListener('copy', () => {
    console.log('copiaste el texto');
});

search.addEventListener('paste', () => {
    console.log('pegaste el texto');
});

search.addEventListener('cut', () => {
    console.log('cortaste el texto');
});

search.addEventListener('input', (e) => {
    //console.log(e);
    //console.log(e.type);
    //console.log(e.target);
    console.log(e.target.value);
});

function inputRead (e) {
    console.log(e.target.value);
};
search.addEventListener('input', inputRead);