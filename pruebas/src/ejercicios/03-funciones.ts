
/**
 * Suma dos números y retorna el resultado
 * @param a - El primer número a sumar
 * @param b - El segundo número a sumar
 * @returns El resultado de la suma de a + b
 * @example
 * ```typescript
 * const resultado = sumar(5, 3); // 8
 * ```
 */
function sumar(a: number, b: number): number {
    return a + b;
}

const result = sumar(3, 2)

console.log({result})

const sumar2 = (n1: number, n2: number): number => {
    return n1 + n2;
}

const resultado = sumar2(3, 2)
console.log({result, resultado});

function multiplicar(primerNumero: number, base: number = 4, segundoNumero?: number): number {
    return primerNumero * base
}

const res: number = multiplicar(7)
console.log({res});

/////////////--------------------------//////////////////

interface PersonajeInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const porcentajeVida = (personaje: PersonajeInterface, valor: number) => {
    personaje.vida += valor;
}

const persona1: PersonajeInterface = {
    nombre: 'Tatiana',
    vida: 100,
    mostrarDetalle() {
        console.log(`${this.nombre} tiene ${this.vida} de vida`);
    }
}

console.log(persona1);

porcentajeVida(persona1, 30);
console.log(persona1);

persona1.mostrarDetalle();








export {}