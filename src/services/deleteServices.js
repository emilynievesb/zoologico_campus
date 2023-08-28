import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";

const eliminarTipoAlimentacionService = async (id) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.eliminarTipoAlimentacion(id);
};

const eliminarAnimalService = async (id) => {
    const animal = new Animales();
    return await animal.eliminarAnimal(id);
};

export {
    eliminarTipoAlimentacionService,
    eliminarAnimalService
}