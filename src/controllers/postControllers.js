import {
  agregarAnimal,
  agregarCapacitacion,
  agregarEstadoSalud,
  agregarEvento,
  agregarFacturaEntrada,
  agregarHabitat,
  agregarHistorialSalud,
  agregarTipoAlimentacion,
} from "../services/postServices.js";

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

const agregarCapacitacionController = async (req, res, next) => {
  try {
    const { id_seguimiento, nombre, fecha, descripcion } = req.body;
    const result = await agregarCapacitacion(
      id_seguimiento,
      nombre,
      fecha,
      descripcion
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

const agregarEventoController = async (req, res, next) => {
  try {
    const {
      historialId,
      empleadoId,
      fecha_evento,
      descripcion,
      recomendaciones,
    } = req.body;
    const result = await agregarEvento(
      historialId,
      empleadoId,
      fecha_evento,
      descripcion,
      recomendaciones
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const agregarEmpleadoController = async (req, res, next) => {
  try {
    const {
      id,
      nombre,
      fecha_contratacion,
      id_seguimiento,
      idPuesto,
      salario,
    } = req.body;
    const result = await agregarEmpleado(
      id,
      nombre,
      fecha_contratacion,
      id_seguimiento,
      idPuesto,
      salario
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarFacturaEntradaController = async (req, res, next) => {
  try {
    const {
      fecha_compra,
      documento_visitante,
      precio,
      evento_especial,
      precio_descuento,
      idLista_boletas,
    } = req.body;
    const result = await agregarFacturaEntrada(
      fecha_compra,
      documento_visitante,
      precio,
      evento_especial,
      precio_descuento,
      idLista_boletas
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHabitatController = async (req, res, next) => {
  try {
    const { tipo, descripcion, idHistorial, idZona } = req.body;
    const result = await agregarHabitat(tipo, descripcion, idHistorial, idZona);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHistorialSaludController = async (req, res, next) => {
  try {
    const { idEstadoSalud, fecha_apertura, ultima_modificacion } = req.body;
    const result = await agregarHistorialSalud(
      idEstadoSalud,
      fecha_apertura,
      ultima_modificacion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  agregarTipoAlimentacionController,
  agregarAnimalController,
  agregarEstadoSaludController,
  agregarEventoController,
  agregarFacturaEntradaController,
  agregarHabitatController,
  agregarHistorialSaludController,
  agregarCapacitacionController,
  agregarEmpleadoController,
};
