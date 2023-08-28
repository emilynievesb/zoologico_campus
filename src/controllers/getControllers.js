import { obtenerTiposAlimentacionService, obtenerTipoAlimentacionService, obtenerAnimalesService, obtenerAnimalService, obtenerBoletaService, obtenerBoletasService, obtenerCapacitacionService, obtenerCapacitacionesService, obtenerCitasMedicaService, obtenerCitasMedicasService, obtenerEmpleadosService, obtenerEmpleadoService, obtenerEstadoHabitatService, obtenerEstadoHabitatsService } from "../services/getServices.js";

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

export {
    obtenerAlimentracionController,
    obtenerAnimalesController,
    obtenerBoletasController,
    obtenerCapacitacionesController,
    obtenerCitasMedicasController,
    obtenerEmpleadosController,
    obtenerEstadoHabitatController

}