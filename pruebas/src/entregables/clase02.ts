// Ejercicio: Sistema de Comidas con Modificación y Notificación

interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida = {
    nombre: 'Pizza',
    calorias: 800,
    esVegana: false
}

const ensalada: Comida = {
    nombre: 'Ensalada',
    calorias: 150,
    esVegana: true
}

const hamburguesa: Comida = {
    nombre: 'Hamburguesa',
    calorias: 600,
    esVegana: false
}

class ComidaService {
    constructor(
        public comida: Comida
    ) {}

    mostrarInfo(comida: Comida) {
        const { nombre, calorias, esVegana } = comida;
        console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana? ${esVegana}`);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        const { nombre, esVegana } = comida;
        const comidaModificada: Comida = {
            nombre,
            calorias: nuevasCalorias,
            esVegana
        }
        return comidaModificada;
    }
}

class NotificadorComida {
    constructor(
        public comida: ComidaService
    ) {}

    notificar(comida: Comida) {
        console.log('Notificando comida...');
        this.comida.mostrarInfo(comida);
    }
}

const comidaServicePizza = new ComidaService(pizza);
const notificadorComidaPizza = new NotificadorComida(comidaServicePizza);
notificadorComidaPizza.notificar(pizza);

const comidaServiceEnsalada = new ComidaService(ensalada);
const notificadorComidaEnsalada = new NotificadorComida(comidaServiceEnsalada);
notificadorComidaEnsalada.notificar(ensalada);

const comidaServiceHamburguesa = new ComidaService(hamburguesa);
const notificadorComidaHamburguesa = new NotificadorComida(comidaServiceHamburguesa);
notificadorComidaHamburguesa.notificar(hamburguesa);

const comidaModificada = comidaServicePizza.modificarCalorias(pizza, 500);
const {comida: nuevaPizza} = new ComidaService(comidaModificada);
notificadorComidaPizza.notificar(nuevaPizza);

