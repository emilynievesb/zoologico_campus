import { obtenerTiposAlimentacionService, obtenerTipoAlimentacionService, obtenerAnimalesService, obtenerAnimalService, obtenerBoletaService, obtenerBoletasService } from "../services/getServices.js";

const obtenerAlimentracionController = async (req, res, next) => {
    try {
        const { id } = req.query
        let result;
        if (id) {
            const alimentacion = await obtenerTipoAlimentacionService(id);
            result = alimentacion
        } else {
            const alimentacion = await obtenerTiposAlimentacionService();
            result = alimentacion
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
            const alimentacion = await obtenerAnimalService(id);
            result = alimentacion
        } else {
            const alimentacion = await obtenerAnimalesService();
            result = alimentacion
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
            const alimentacion = await obtenerBoletaService(id);
            result = alimentacion
        } else {
            const alimentacion = await obtenerBoletasService();
            result = alimentacion
        }
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result });
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

export {
    obtenerAlimentracionController,
    obtenerAnimalesController,
    obtenerBoletasController
    
}