import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";

const eliminarTipoAlimentacionService = async (id) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.eliminarTipoAlimentacion(id);
};

const eliminarAnimalService = async (id) => {
    const animal = new Animales();
    return await animal.eliminarAnimal(id);
};

const eliminarBoletasService = async (id) => {
    const boleta = new Boletas();
    return await boleta.eliminarBoletas(id);
};

export {
    eliminarTipoAlimentacionService,
    eliminarAnimalService,
    eliminarBoletasService
}