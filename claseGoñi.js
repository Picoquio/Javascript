
// For
for (let i = 1; i < 5; i++) {

    let numero = parseInt(prompt('Ingresa un número'));

    let acumulado = 0

    acumulado = acumulado + numero;

    alert('La sumatoria acumulada de los números ingresados es: ' + acumulado);

}


// Do while
do {
   var trapped = prompt('Estás atrapado en un do-while. Para salir necesitás ingresar algo abstracto pero muy útil; cualquier ejemplar de todos ellos');
   // utilizado el 'var' en lugar de 'let' para que el while pueda acceder al contenido de la variable
} while (isNaN(trapped));
