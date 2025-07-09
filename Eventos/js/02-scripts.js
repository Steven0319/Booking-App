const nav = document.querySelector('.navegacion');
nav.addEventListener('mouseenter', () => {
    console.log('Entraste al area de la barra de navegacion');
    nav.style.backgroundColor = 'black';
});
nav.addEventListener('mouseout', () => {
    console.log('Saliste del area de la barra de navegacion');
});

nav.addEventListener('mousedown', () => {
    console.log('Presionaste el click en la barra de navegacion');
});

nav.addEventListener('mouseup', () => {
    console.log('Soltaste el click en la barra de navegacion');
});

nav.addEventListener('click', () => {
    console.log('Hiciste click');
});

nav.addEventListener('dblclick', () => {
    console.log('Diste doble click');
});