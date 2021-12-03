/**
 * @challenge: incorporación de funciones
 * 
 * @version: 4.0.2
 * @author: Juan M. Goñi.
 * @fecha: 02/12/2021.
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v2.0.0 - Segunda entrega
 *  - v4.0.0 - Cuarta entrega
 *  - v4.0.1 - Cuarta entrega: agregado límite efectivo al número de cuotas elegible
 *  - v4.0.2 - Cuarta entrega: entrega complementaria.
 *  - v4.0.3 - Errores corregidos en la entrega complementaria
 */




let cantidad = prompt('Acaba de seleccionar: PAPEL HIGIÉNICO ULTRA SOFT (pack 4 rollos). Por favor elija la cantidad deseada:');

while (cantidad > 3) {
   cantidad = prompt('El DNU 918/2022 limita la cantidad máxima a comprar de papel higiénico a 3 unidades mensuales. Sea obediente y elija una cantidad menor:')
};

let cuotas = prompt('Por favor, elija en cuántas cuotas quiere pagar su PAPEL HIGIÉNICO ULTRA SOFT (1 a 6)');


const suma = (a, b) => a + b;
const impuestoPatriotico = x => x * 0.82;


let precioProducto = 180;

//Usé el switch para subir el precio a medida que se piden más cuotas (ajuste inflacionario)
switch (cuotas) {
    case "1":
        precioProducto = 180;
        break;
    case "2":
        precioProducto = precioProducto * 1.08;
        break;
    case "3":
        precioProducto = precioProducto * 1.12;
        break;
    case "4":
        precioProducto = precioProducto * 1.16;
        break;
    case "5":
        precioProducto = precioProducto * 1.20;
        break;
    case "6":
        precioProducto = precioProducto * 1.24;
        break;
}
let qCuotas = parseInt(cuotas);

while (qCuotas > 6) {
  let txt = prompt('Ingrese un número válido de cuotas');
  qCuotas = parseInt(txt)
}

let precioFinal = (suma (precioProducto, impuestoPatriotico(precioProducto)) / qCuotas)
let valorCuota = precioFinal * cantidad; 


if (qCuotas == 1) {
    alert('El precio total es: ' + precioFinal.toFixed(2)  + ' pesos')
}
else {
    
    alert('Usted pagará ' + qCuotas + ' cuotas de ' + valorCuota.toFixed(2) * cantidad + ' pesos.')
}



// Consigna complementaria (tres funciones)

function ipAcumulado () {
    return (82 * (precioProducto * cantidad) / 100)

}
 function precioSinIp() {
    return (valorCuota * cantidad)

}
function detallado (x, y) {
    alert('El precio final de su producto se compone de dos elementos principales. El precio de rentabilidad (PR) y el Impuesto Patriótico (IP). El PR toatl de su compra es de ' + x.toFixed(2) + '. Mientras que el IP total es de ' + y.toFixed(2) + ".")

}

detallado (precioProducto, ipAcumulado())
