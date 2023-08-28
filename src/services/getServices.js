import { Alimentacion } from "../collections/alimentacion.js";

const obtenerTiposAlimentacionService = async () => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTiposAlimentacion();
};

const obtenerTipoAlimentacionService = async (tipoAlimentacionId) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTipoAlimentacion(tipoAlimentacionId);
};

export {
    obtenerTiposAlimentacionService,
    obtenerTipoAlimentacionService
}