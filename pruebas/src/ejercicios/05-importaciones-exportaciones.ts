import { type Producto, calcularImpuesto } from "./04-desestructurador";

const carrito: Producto[] = [
    {
        descripcion: 'Carro',
        precio: 3000
    },
    {
        descripcion: 'Moto',
        precio: 2000
    }
];

const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 0.19,
    productos: carrito,
    propina: 0
});

console.log("------ Importaciones y exportaciones ------");

console.log({total, totalImpuesto});

/*
Crear un archivo con 2 interfaces, otro archivo con una función que reciba por parámetro un objeto de tipo de una interfaz
y retorn un string con datos del objeto, y otro archivo que haga el llamado de la función
*/

export {};