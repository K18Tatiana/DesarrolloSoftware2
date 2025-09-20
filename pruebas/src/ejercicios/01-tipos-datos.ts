let nombre: string | boolean = 'Tatiana';
// | permite que la variable pueda ser de un tipo o de otro.

nombre = true;

let porcentaje: number | 'ALTO' = 10;
// Con | también se puede definir exactamente el valor que puede tener la variable.
porcentaje = 'ALTO';

const edad = 3;
// edad = 6; // Esto genera un error de tipo.

console.log(nombre);
console.log({nombre, edad});

/*
var gustos: string = '';
var gustos: string = 2;

let prueba:string = '';
let prueba:number = '';
*/

export {};

// Siempre agregar export {} al final de un archivo de tipo datos para que no se genere un error de tipo. 
// Esto es porque en Angular se maneja por modulos.