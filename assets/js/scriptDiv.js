document.addEventListener('DOMContentLoaded', (event) => {
   
    const divAzul = document.getElementById('divAzul');
    const divRojo = document.getElementById('divRojo');
    const divVerde = document.getElementById('divVerde');
    const divAmarillo = document.getElementById('divAmarillo');

  
    divAzul.addEventListener('click', () => {
        divAzul.style.backgroundColor = 'black';
    });

    divRojo.addEventListener('click', () => {
        divRojo.style.backgroundColor = 'black';
    });

    divVerde.addEventListener('click', () => {
        divVerde.style.backgroundColor = 'black';
    });

    divAmarillo.addEventListener('click', () => {
        divAmarillo.style.backgroundColor = 'black';
    });
});
