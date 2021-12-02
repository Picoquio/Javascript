
let cantidad = prompt('Acaba de seleccionar: PAPEL HIGIÉNICO ULTRA SOFT (pack 4 rollos). Por favor elija la cantidad deseada:');

while (cantidad > 3) {
   cantidad = prompt('El DNU 918/2022 limita la cantidad máxima a comprar de papel higiénico a 3 unidades mensuales. Sea obediente y elija una cantidad menor:')
};

let cuotas = prompt('Por favor, elija en cuántas cuotas quiere pagar su PAPEL HIGIÉNICO ULTRA SOFT (1 a 6)');


const suma = (a, b) => a + b;
const impuestoPatriotico = x => x * 0.82;


let precioPapel = 180;

//Usé el switch para subir el precio a medida que se piden más cuotas (ajuste inflacionario)
switch (cuotas) {
    case "1":
        precioPapel = 180;
        break;
    case "2":
        precioPapel = precioPapel * 1.08;
        break;
    case "3":
        precioPapel = precioPapel * 1.12;
        break;
    case "4":
        precioPapel = precioPapel * 1.16;
        break;
    case "5":
        precioPapel = precioPapel * 1.20;
        break;
    case "6":
        precioPapel = precioPapel * 1.24;
        break;
}

let qCuotas = parseInt(cuotas);
let precioFinal = (suma (precioPapel, impuestoPatriotico(precioPapel)) / qCuotas)

if (qCuotas === 1) {
    alert('El precio total es: ' + precioFinal.toFixed(2)  + ' pesos')
}
else {
    let valorCuota = precioFinal * cantidad; // declaro variable para toFixear mas comodamente inmediatamente después
    alert('Usted pagará ' + qCuotas + ' cuotas de ' + valorCuota.toFixed(2) * cantidad + ' pesos.')
}




