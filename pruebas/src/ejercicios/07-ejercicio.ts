// Crea una función genérica llamada crearCaja<T> que reciba un valor de cualquier tipo y lo devuelva dentro de un objeto con la propiedad contenido.

interface ReturnEnvolve<T> {
    contenido: T
}

function crearCaja<T>(valor: T): ReturnEnvolve<T> {
    return { contenido: valor }
}

let caja1 = crearCaja(5);
let caja2 = crearCaja('pizza');
let caja3 = crearCaja({comida: 'hamburguesa', calorias: 600});

console.log(caja1);
console.log(caja2);
console.log(caja3);