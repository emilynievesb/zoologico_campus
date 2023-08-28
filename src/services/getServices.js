import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";

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

const obtenerBoletasService = async () => {
    const boleta = new Boletas();
    return await boleta.obtenerBoletas();
};

const obtenerBoletaService = async (id) => {
    const boleta = new Boletas();
    return await boleta.obtenerBoletasporId(id);
};

const obtenerCapacitacionesService = async () => {
    const capacitacion = new Capacitaciones();
    return await capacitacion.obtenerCapacitaciones();
};

const obtenerCapacitacionService = async (id) => {
    const capacitacion = new Capacitaciones();
    return await capacitacion.obtenerCapacitacionPorId(id);
};

export {
    obtenerTiposAlimentacionService,
    obtenerTipoAlimentacionService,
    obtenerAnimalesService,
    obtenerAnimalService,
    obtenerBoletasService,
    obtenerBoletaService,
    obtenerCapacitacionesService,
    obtenerCapacitacionService
}