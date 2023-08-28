import { eliminarAnimalService, eliminarBoletasService, eliminarTipoAlimentacionService } from "../services/deleteServices.js";

const eliminarTipoAlimentacionController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarTipoAlimentacionService(id)
        res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarAnimalController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarAnimalService(id)
        res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarBoletasController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarBoletasService(id)
        res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

export {
    eliminarTipoAlimentacionController,
    eliminarAnimalController,
    eliminarBoletasController
}