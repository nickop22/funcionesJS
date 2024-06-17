/* ejercicio de onClick cambio de color con funcion */
const ele1 = document.getElementById('ele1')

function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}

ele1.addEventListener('click', () => {
    pintar(ele1, 'yellow')
});


