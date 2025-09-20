interface MascotaInterface {
    nombre: string;
    tipo: string;
    raza: string;
    edad: number;
}

interface DuenioInterface {
    nombre: string;
    edad: number;
    mascotas: MascotaInterface[];
}

export type { MascotaInterface, DuenioInterface };