import { eliminarAnimalService, eliminarBoletasService, eliminarCapacitacionesService, eliminarCitaMedicaService, eliminarEmpleadoService, eliminarEstadoHabitatService, eliminarEstadosSaludService, eliminarEvaluacionesDesempenoService, eliminarEventoService, eliminarFacturasEntradaService, eliminarHabitatService, eliminarHistorialEventoService, eliminarHistorialSaludService, eliminarHorarioAlimentacionMantenimientoService, eliminarHorarioTrabajoService, eliminarPlanificacionEventosService, eliminarPromocionesService, eliminarPuestoService, eliminarSeguimientoEmpleadoService, eliminarTipoAlimentacionService, eliminarTipoBoletasService, eliminarZonasService, eliminarlistaBoletasService } from "../services/deleteServices.js";

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

const eliminarFacturaEntradaController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarFacturasEntradaService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarHabitatController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarHabitatService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarHistorialesSaludController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarHistorialSaludService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarHistorialEventoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarHistorialEventoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarHorarioAlimentacionMantenimientoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarHorarioAlimentacionMantenimientoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarHorarioTrabajoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarHorarioTrabajoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarListaBoletasController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarlistaBoletasService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarPlanificacionEventosController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarPlanificacionEventosService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarPromocionesController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarPromocionesService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarPuestoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarPuestoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarSeguimientoEmpleadoController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarSeguimientoEmpleadoService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarTipoBoletasController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarTipoBoletasService(id)
        if (result.deletedCount == 0) {
            res.status(500).json({ message: `no se ha encontrado ningun registro de id ${id}`, result });

        } else {
            res.status(200).json({ message: `se ha eliminado el registro de id ${id} con exito`, result });
        }
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const eliminarZonasController = async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await eliminarZonasService(id)
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
    eliminarEventoController,
    eliminarFacturaEntradaController,
    eliminarHabitatController,
    eliminarHistorialesSaludController,
    eliminarHistorialEventoController,
    eliminarHorarioAlimentacionMantenimientoController,
    eliminarHorarioTrabajoController,
    eliminarListaBoletasController,
    eliminarPlanificacionEventosController,
    eliminarPromocionesController,
    eliminarPuestoController,
    eliminarSeguimientoEmpleadoController,
    eliminarTipoBoletasController,
    eliminarZonasController
}