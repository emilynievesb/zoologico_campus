import { actualizarAnimal, actualizarBoleta, actualizarCapacitacion, actualizarTipoAlimentacion } from "../services/putServices.js";

const actualizarTipoAlimentacionController = async (req, res, next) => {
    try {
        const { id, tipo } = req.body;
        const result = await actualizarTipoAlimentacion(id, tipo);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const actualizarAnimalController = async (req, res, next) => {
    try {
        const {
            id,
            nombre,
            especie,
            historialSalud,
            alimentacion,
            reproduccion,
            habitat,
        } = req.body;
        const result = await actualizarAnimal(
            id,
            nombre,
            especie,
            historialSalud,
            alimentacion,
            reproduccion,
            habitat
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const actualizarBoletaController = async (req, res, next) => {
    try {
        const { id, idLista, idtipo, cantidad } = req.body;
        const result = await actualizarBoleta(id, idLista, idtipo, cantidad);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const actualizarCapacitacionController = async (req, res, next) => {
    try {
        const { id, id_seguimiento, nombre, fecha, descripcion } = req.body;
        const result = await actualizarCapacitacion(id, id_seguimiento, nombre, fecha, descripcion);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


export { actualizarTipoAlimentacionController, actualizarAnimalController, actualizarBoletaController, actualizarCapacitacionController };
