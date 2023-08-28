import { obtenerTiposAlimentacionService, obtenerTipoAlimentacionService, obtenerAnimalesService, obtenerAnimalService, obtenerBoletaService, obtenerBoletasService, obtenerCapacitacionService, obtenerCapacitacionesService, obtenerCitasMedicaService, obtenerCitasMedicasService, obtenerEmpleadosService, obtenerEmpleadoService, obtenerEstadoHabitatService, obtenerEstadoHabitatsService, obtenerEstadoSaludService, obtenerEstadosSaludService, obtenerEvaluacionDesempenoService, obtenerEvaluacionesDesempenoService, obtenerEventoService, obtenerEventosService, obtenerFacturaEntradaService, obtenerFacturasEntradaService, obtenerHabitatService, obtenerHabitatsService, obtenerHistorialSaludService, obtenerHistorialesSaludService, obtenerHistorialesEventoService, obtenerHistorialEventoService, obtenerHorariosAlimentacionMantenimientoService, obtenerHorarioAlimentacionMantenimientoService } from "../services/getServices.js";

const obtenerAlimentracionController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerTipoAlimentacionService(id);
            result = consulta
        } else {
            const consulta = await obtenerTiposAlimentacionService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerAnimalesController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerAnimalService(id);
            result = consulta
        } else {
            const consulta = await obtenerAnimalesService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerBoletasController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerBoletaService(id);
            result = consulta
        } else {
            const consulta = await obtenerBoletasService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerCapacitacionesController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerCapacitacionService(id);
            result = consulta
        } else {
            const consulta = await obtenerCapacitacionesService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerCitasMedicasController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerCitasMedicaService(id);
            result = consulta
        } else {
            const consulta = await obtenerCitasMedicasService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerEmpleadosController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerEmpleadoService(id);
            result = consulta
        } else {
            const consulta = await obtenerEmpleadosService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerEstadoHabitatController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerEstadoHabitatService(id);
            result = consulta
        } else {
            const consulta = await obtenerEstadoHabitatsService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerEstadosSaludController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerEstadoSaludService(id);
            const { _id, ...Rconsulta } = consulta
            result = Rconsulta
        } else {
            const consulta = await obtenerEstadosSaludService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerEvaluacionesDesempenoController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerEvaluacionDesempenoService(id);
            result = consulta
        } else {
            const consulta = await obtenerEvaluacionesDesempenoService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerEventosController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerEventoService(id);
            result = consulta
        } else {
            const consulta = await obtenerEventosService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerFavturasEntradaController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerFacturaEntradaService(id);
            result = consulta
        } else {
            const consulta = await obtenerFacturasEntradaService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerHabitatsController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerHabitatService(id);
            result = consulta
        } else {
            const consulta = await obtenerHabitatsService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerHistorialesSaludController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerHistorialSaludService(id);
            result = consulta
        } else {
            const consulta = await obtenerHistorialesSaludService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerHistorialesEventoController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerHistorialEventoService(id);
            result = consulta
        } else {
            const consulta = await obtenerHistorialesEventoService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

const obtenerHorariosAlimentacionMantenimientoController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const consulta = await obtenerHorarioAlimentacionMantenimientoService(id);
            result = consulta
        } else {
            const consulta = await obtenerHorariosAlimentacionMantenimientoService();
            result = consulta
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

export {
    obtenerAlimentracionController,
    obtenerAnimalesController,
    obtenerBoletasController,
    obtenerCapacitacionesController,
    obtenerCitasMedicasController,
    obtenerEmpleadosController,
    obtenerEstadoHabitatController,
    obtenerEstadosSaludController,
    obtenerEvaluacionesDesempenoController,
    obtenerEventosController,
    obtenerFavturasEntradaController,
    obtenerHabitatsController,
    obtenerHistorialesSaludController,
    obtenerHistorialesEventoController,
    obtenerHorariosAlimentacionMantenimientoController
}