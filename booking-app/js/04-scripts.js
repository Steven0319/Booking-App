//eventos de formulario
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('El formulario se envio');
    console.log(e);
    console.log(e.target);
    console.log(e.target.action);
    console.log(e.target.method);
    //mucha informacion valiosa
});