export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Isabel',
    hijos: ['Tatiana', 'Karen']
}

const pasajero2: Pasajero = {
    nombre: 'David'
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.length ?? 0;
    console.log(cantidadHijos);
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

// || OR, toma el undefined, el null, el false, el 0, el '' como false
const valorPrueba = 0 || 10

// ?? NULLISH, solo toma el undefined y el null como false
const valorPrueba2 = 0 ?? 10

console.log({valorPrueba, valorPrueba2});

