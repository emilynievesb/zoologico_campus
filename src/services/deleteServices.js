import { Alimentacion } from "../collections/alimentacion.js";

const eliminarTipoAlimentacionService = async (id) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.eliminarTipoAlimentacion(id);
};

export {
    eliminarTipoAlimentacionService
}