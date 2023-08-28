import { eliminarAnimalService, eliminarBoletasService, eliminarCapacitacionesService, eliminarCitaMedicaService, eliminarEmpleadoService, eliminarEstadoHabitatService, eliminarEstadosSaludService, eliminarEvaluacionesDesempenoService, eliminarEventoService, eliminarTipoAlimentacionService } from "../services/deleteServices.js";

const eliminarTipoAlimentacionController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarTipoAlimentacionService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarAnimalController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarAnimalService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarBoletasController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarBoletasService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarCapacitacioncesControler = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarCapacitacionesService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarCitaMedicaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarCitaMedicaService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarEmpleadoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarEmpleadoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarEstadoHabitatController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarEstadoHabitatService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarEstadoSaludController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarEstadosSaludService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarEvaluacionDesempenoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarEvaluacionesDesempenoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarEventoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarEventoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

export {
    eliminarTipoAlimentacionController,
    eliminarAnimalController,
    eliminarBoletasController,
    eliminarCapacitacioncesControler,
    eliminarCitaMedicaController,
    eliminarEmpleadoController,
    eliminarEstadoHabitatController,
    eliminarEstadoSaludController,
    eliminarEvaluacionDesempenoController,
    eliminarEventoController
}