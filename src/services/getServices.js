import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";

const obtenerTiposAlimentacionService = async () => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTiposAlimentacion();
};

const obtenerTipoAlimentacionService = async (tipoAlimentacionId) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTipoAlimentacion(tipoAlimentacionId);
};

const obtenerAnimalesService = async () => {
    const animal = new Animales();
    return await animal.obtenerAnimales();
};

const obtenerAnimalService = async (animalId) => {
    const animal = new Animales();
    return await animal.obtenerAnimal(animalId);
};


export {
    obtenerTiposAlimentacionService,
    obtenerTipoAlimentacionService,
    obtenerAnimalesService,
    obtenerAnimalService
}