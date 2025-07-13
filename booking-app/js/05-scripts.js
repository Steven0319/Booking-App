//eventos de scroll
window.addEventListener('scroll', () => {
    console.log('scrolling...');
    const scrollPX = window.scrollY;
    console.log(scrollPX);
});

//detectar un elemento cuando se llegue con scroll
const premium = document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect();
console.log(ubicacion);

if(ubicacion.top < 100) {
    console.log('El elemento ya esta visible');
} else {
    console.log('Aun no, da mas scroll');
}