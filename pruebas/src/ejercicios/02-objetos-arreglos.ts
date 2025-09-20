let caracteristicas: string[] = ["Bajita", "Inteligente"];

// Con la interfaz se define el tipo de dato que tendrá cada característica de la persona.
interface PersonaInterface {
    nombre: string;
    edad: number;
    caracteristicas?: string[]; // Con el ? indica que esa propiedad es opcional, es decir, puede o no venir en el objeto
}

const persona: PersonaInterface = {
    nombre: "Tatiana",
    edad: 22,
    caracteristicas,
}


export {};