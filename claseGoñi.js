// Variables:
let number = prompt('Introduzca una tecla cualquiera');


// Flujo:
if (number.length == 1) {
    alert('Su indice de masa corporal se encuentra dentro de los estándares saludables.');
}
else if (number.length > 1) {
    alert('Los dedos que usó para marcar son demasiado gordos. Para obtener una barra especial, oprima todos los botones con la palma de su mano.');
}
else {
    alert('Error: debe ingresar al menos un caracter. Por favor cargue nuevamente esta página.');
}