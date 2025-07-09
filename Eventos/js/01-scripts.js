let elemento = document;
console.log(elemento);

const header = document.getElementsByClassName("header");
console.log(header);

const formulario = document.getElementById('formulario')
console.log(formulario);

const tarjeta = document.querySelector('.card');
console.log(tarjeta);

const tarjetas = document.querySelectorAll('.card');
console.log(tarjetas);

//la sintaxis siempre sera document.addEventListener
//DOMContentLoaded 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Se cargo la pagina completamente');
});