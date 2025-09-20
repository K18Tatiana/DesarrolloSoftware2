// Ejercicio implementar la interfaz para lo siguiente:

interface UsuarioInterface {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: {
        ciudad: string;
        pais: string;
    };
    saludar: () => void;
    actualizarEmail: (nuevoEmail: string) => void;
}
const usuario1: UsuarioInterface = {
    id: 1,
    nombre: 'Ana Pérez',
    email: 'ana@example.com',
    activo: true,
    roles: ['admin', 'editor'],
    direccion: {
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    saludar () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
}

console.log(usuario1);
usuario1.saludar();
usuario1.actualizarEmail('ana@gmail.com');
console.log(usuario1);

export {};