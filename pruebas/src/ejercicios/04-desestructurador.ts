interface Detalle {
    autor: string;
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

const reproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: 'Photograph',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2014
    }
}

const cancion = reproductorAudio.cancion;
const autor = reproductorAudio.detalle.autor;

console.log(cancion);
console.log(autor);

// Desestructuración de objetos
console.log('------ Desestructuración de objetos ------');

/* Forma larga
const { detalle: detalle2 } = reproductorAudio
const { autor: autor2, anio: anio2 } = detalle2
console.log(detalle2);
console.log(autor2, anio2);
*/

// Forma corta
const { volumen, cancion: nombreCancion, detalle: { autor: nombreAutor, anio } } = reproductorAudio;
console.log('Volumen: ', volumen);
console.log('Nombre de la canción: ', nombreCancion);
console.log('Nombre del autor: ', nombreAutor);
console.log('Año: ', anio);

// Desestructuración de arrays
const frutas = ['Manzanas', 'Fresas', 'Naranjas'];
console.log("------ Desestructuración de arrays ------");

console.log("Frutas: " + (frutas[3] || 'No hay frutas'));

// const [fruta1, fruta2, fruta3, fruta4 = 'No hay frutas'] = frutas;

// Al dejar solo una coma, se ignora el valor de dicha posición.
const [,, fruta3] = frutas;

console.log(fruta3);

// 
console.log('------ Ejercicio ------');

export interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: 'Poco X6 Pro',
    precio: 410
}
const computador: Producto = {
    descripcion: 'Acer Nitro 5',
    precio: 900
}

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.19;
const propina: number = 0.1;

interface ImpuestosOption {
    impuesto: number;
    productos: Producto[];
    propina: number;
}

export function calcularImpuesto(option: ImpuestosOption) : [number, number, number] {
    const {impuesto, productos} = option;
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    });
    const totalImpuesto = total * impuesto;
    const totalMasImpuesto = total + totalImpuesto;
    const totalPropina = Number((totalMasImpuesto * propina).toFixed(2));
    return [total, totalImpuesto, totalPropina];
}

const options: ImpuestosOption = {
    impuesto,
    productos: carrito,
    propina
}

// Sin desestructurar
/*
const resultadoCompra: number[] = calcularImpuesto(options);

console.log("Total: " + resultadoCompra[0]);
console.log("Total impuesto: " + resultadoCompra[1]);
console.log("Propina: " + resultadoCompra[2]);
*/

// Con desestructuración
const [totalCompra, totalImpuestoCompra, totalPropina] = calcularImpuesto(options);
console.log("Total: " + totalCompra);
console.log("Total impuesto: " + totalImpuestoCompra);
console.log("Propina: " + totalPropina);



export {};
