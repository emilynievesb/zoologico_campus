import { agregarAnimal, agregarEstadoSalud, agregarTipoAlimentacion } from "../services/postServices.js";

const agregarTipoAlimentacionController = async (req, res, next) => {
  try {
    const { tipo } = req.body;
    const result = await agregarTipoAlimentacion(tipo);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


const agregarAnimalController = async (req, res, next) => {
  try {
    const {
      nombre,
      especie,
      historialSalud,
      alimentacion,
      reproduccion,
      habitat,
    } = req.body;
    const result = await agregarAnimal(
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

const agregarEstadoSaludController = async (req, res, next) => {
  try {
    const { estado } = req.body;
    const result = await agregarEstadoSalud(estado);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};



export { agregarTipoAlimentacionController, agregarAnimalController, agregarEstadoSaludController };
