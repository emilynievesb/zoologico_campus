import { actualizarTipoAlimentacion } from "../services/putServices.js";

const actualizarTipoAlimentacionController = async (req, res, next) => {
  try {
    const { id, tipo } = req.body;
    const result = await actualizarTipoAlimentacion(id, tipo);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { actualizarTipoAlimentacionController };
