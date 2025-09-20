import { mostrarInformacionDuenio, mostrarInformacionMascota } from "./usando-interfaces";
import { type MascotaInterface, type DuenioInterface } from "./interfaces";

const mascotas: MascotaInterface[] = [
    {
        nombre: 'Max',
        tipo: 'Perro',
        raza: 'Beagle',
        edad: 5,
    },
    {
        nombre: 'Luna',
        tipo: 'Gato',
        raza: 'Siames',
        edad: 3,
    }
]

const duenio: DuenioInterface = {
    nombre: 'Tatiana',
    edad: 22,
    mascotas: mascotas
}

console.log("------ Informacion del dueño ------");
const infoDuenio = mostrarInformacionDuenio(duenio);
console.log(infoDuenio);

console.log("------ Informacion de la mascota ------");
const [infoMascota1, infoMascota2] = mascotas.map(mascota => mostrarInformacionMascota(mascota));

console.log("Mascota 1: ", infoMascota1);
console.log("Mascota 2: ", infoMascota2);

