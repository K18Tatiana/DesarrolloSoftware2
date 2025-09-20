/*
export class Persona {
    public nombre: string;
    public direccion: string;

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
*/

export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'Sin dirección'
    ) {

    }
}

const persona = new Persona('Tatiana Vega');
console.log(persona);

/*
export class Trabajador extends Persona {
    constructor(
        public nombre: string,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {
        super(nombre);
    }
}
*/

/*
export class Trabajador {
    public persona: Persona;
    constructor(
        public nombre: string,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {
        this.persona = new Persona(nombre)
    }
}
*/

export class Trabajador {
    constructor(
        public persona: Persona,
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ) {}
}

const personaUno = new Persona('Tatiana Vega');
const trabajador: Trabajador = new Trabajador(personaUno, 'Desarrollador', 'Unillanos', 'Calle 456');

console.log(trabajador);