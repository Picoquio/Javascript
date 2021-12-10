/**
 * @challenge: incorporación de funciones
 * 
 * @version: 4.1.0
 * @author: Juan M. Goñi.
 * @fecha: 09/12/2021.
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v2.0.0 - Segunda entrega
 *  - v4.0.0 - Cuarta entrega
 *  - v4.0.1 - Cuarta entrega: agregado límite efectivo al número de cuotas elegible
 *  - v4.0.2 - Cuarta entrega: entrega complementaria.
 *  - v4.0.3 - Errores corregidos en la entrega complementaria
 *  - v4.1.0 - Agregado objeto/class
 *  - v4.2.0 - Agregado array
 */


/*Se me ha pedido que encapsulara el código en funciones. El proceso de entrega de papel higiénico
 está todo interrelacionado. Por eso no supe bien cómo meter funciones en el medio, y decidí por meterlo todo en una sola funcion, llamada 'paelHigienico'*/
function papelHigienico (){
    let cantidad = prompt('Acaba de seleccionar: PAPEL HIGIÉNICO ULTRA SOFT (pack 4 rollos). Por favor elija la cantidad deseada:');

    while (cantidad > 3) {
    cantidad = prompt('El DNU 918/2022 limita la cantidad máxima a comprar de papel higiénico a 3 unidades mensuales. Sea obediente y elija una cantidad menor:')
    };

    let cuotas = prompt('Por favor, elija en cuántas cuotas quiere pagar su PAPEL HIGIÉNICO ULTRA SOFT (1 a 6)');


    const suma = (a, b) => a + b;
    const impuestoPatriotico = x => x * 0.82;


    let precioProducto = 180;

    /*Usé el switch para subir el precio a medida que se piden más cuotas (ajuste inflacionario). Por alguna razón no están cerrando los valores mientras antes sí lo hacían.
    Esto será arreglado en una futura entrega*/
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
}
papelHigienico();

// Agregando objetos - class

class Cliente {
    constructor(nombre, domicilio, dni) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.dni = dni; 
    }
    compra () {
        alert(`Gracias por su compra, ${this.nombre}. Los bienes serán entregados en ${this.domicilio} dentro de los próximos ocho meses. El dinero será descontado automáticamente de su crédito social.`)
    }
}

//variables cuyo contenido será pasado a la instancia 
let info = alert('Para proceder con la entrega le estaremos pidiendo unos datos personales');
let nombrecillo = prompt('Ingrese su nombre y apellido')
let adress = prompt('Ingrese su domicilio');
let documento = prompt('Ingrese su DNI');

//declaración y llamada
const cliente1 = new Cliente(nombrecillo, adress, documento);
cliente1.compra(); 


class Producto {

    constructor(rubro, nombre, precio) {
        this.rubro = rubro;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//función creadora y 'cargadora' del array que se usará en la función siguiente
function cargarDataRegalos(){
    let donacion = [];
    const producto1 = new Producto('alimento', 'salchicha', 200);
    const producto2 = new Producto('higiene', 'gilette', 150);
    const producto3 = new Producto('libreria', 'resma', 400);
    const producto4 = new Producto('alimento', 'alfajor', 200);
    const producto5 = new Producto('higiene', 'shampoo', 300);
    const producto6 = new Producto('libreria', 'lapicera', 90);
    const producto7 = new Producto('alimento', 'tortilla comprada en el semáforo', 50);
    const producto8 = new Producto('higiene', 'jabón', 160);
    const producto9 = new Producto('libreria', 'sacapuntas', 85);
    donacion.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9);
    return donacion;
}


//function donde los usuarios eligen una donación
function regalo () {

    const donacion = cargarDataRegalos();
    let elegi = prompt('¡Buenas noticias! Nuestro benévolo lider imprimió dinero y puso a disposición de la población una donación a través de esta plataforma. Puede elegir entre tres rubros: ingrese 1 para elegir alimentos; 2 para artículos de higiene y 3 para artículos de librería');
    while (elegi > 3) {
        elegi = prompt('Por favor, ingrese una opción correcta')
    }

    if (elegi == 1) {
        let alimentos = donacion.filter(producto => producto.rubro.includes("alimento"));
        let resultado = 'Te ganaste: ';
        for (let i = 0; i < alimentos.length; i++) {
            resultado += alimentos[i].nombre + ' + ';
        }
        resultado = resultado.slice(0,resultado.length-2);
        alert(resultado);
    }

    if (elegi == 2) {
        let higienicos = donacion.filter(producto => producto.rubro.includes("higiene"));
        let resultado = 'Te ganaste: ';
        for (let i = 0; i < higienicos.length; i++) {
            resultado += higienicos[i].nombre + ' + ';
        }
        resultado = resultado.slice(0,resultado.length-2);
        alert(resultado);
    }

    if (elegi == 3) {
        let libr = donacion.filter(producto => producto.rubro.includes("libreria"));
        let resultado = 'Te ganaste: ';
        for (let i = 0; i < libr.length; i++) {
            resultado += libr[i].nombre + ' + ';
        }
        resultado = resultado.slice(0,resultado.length-2);
        alert(resultado);
    }
}

regalo();
