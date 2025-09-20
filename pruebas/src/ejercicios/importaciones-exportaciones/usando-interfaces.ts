import { type DuenioInterface, type MascotaInterface } from "./interfaces";

function mostrarInformacionDuenio(duenio: DuenioInterface) : string {
    const { nombre, edad, mascotas } = duenio;
    const mascotasString = mascotas.map(mascota => mascota.nombre).join(', ');
    return `${nombre} tiene ${edad} años y tiene ${mascotas.length} mascotas: ${mascotasString}`;
}

function mostrarInformacionMascota(mascota: MascotaInterface) : string {
    const { nombre, tipo, raza, edad } = mascota;
    return `${nombre} es un/a ${tipo}, es de la raza ${raza}, tiene ${edad} años`;
}

export {mostrarInformacionDuenio, mostrarInformacionMascota };