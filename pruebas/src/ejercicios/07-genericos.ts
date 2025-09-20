/*
{
    status: boolean:
    message: string;
    statusCode: number;
    result: [estados]
}
*/

/*
usuario = {
    nombre: string,
    apellido: string,
    edad: number
}

estados = {
    tipo: string,
    id: number
}
*/

function verTipo<T>(argument: T): T {
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: 'Mamifero',
    genero: 'Femenino',
    edad: 5
}

let prueba = verTipo('Tatiana');
let prueba2 = verTipo(true);
let prueba3 = verTipo(1);
let prueba4 = verTipo(vaca);
console.log(prueba.toUpperCase());
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);