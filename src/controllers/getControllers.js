import { obtenerTiposAlimentacionService, obtenerTipoAlimentacionService } from "../services/getServices.js";

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

export {
    obtenerAlimentracionController
}