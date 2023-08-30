import {
  agregarAnimal,
  agregarBoleta,
  agregarCapacitacion,
  agregarEstadoSalud,
  agregarEvento,
  agregarFacturaEntrada,
  agregarHabitat,
  agregarHistorialSalud,
  agregarHorario,
  agregarHorarioTrabajo,
  agregarListaBoletas,
  agregarPlanificacionEventos,
  agregarPromociones,
  agregarPuesto,
  agregarSeguimientoEmpleado,
  agregarTipoAlimentacion,
  agregarTipoBoleta,
  agregarZona,
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

const agregarBoletaController = async (req, res, next) => {
  try {
    const { idLista, idtipo, cantidad } = req.body;
    const result = await agregarBoleta(idLista, idtipo, cantidad);
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

const agregarEvaluacionDesempenoController = async (req, res, next) => {
  try {
    const { id_seguimiento, fecha_reporte, id_empleado_reporte, descripcion } =
      req.body;
    const result = await agregarEvaluacionDesempeno(
      id_seguimiento,
      fecha_reporte,
      id_empleado_reporte,
      descripcion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHistorialEventoController = async (req, res, next) => {
  try {
    const { fecha_creacion, ultima_modificacion, idEstadohabitat } = req.body;
    const result = await agregarHistorialEvento(
      fecha_creacion,
      ultima_modificacion,
      idEstadohabitat
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHorarioAlimentacionController = async (req, res, next) => {
  try {
    const {
      id_habitat,
      hora_alimentacionMantenimiento,
      id_encargado,
      descripcion,
    } = req.body;
    const result = await agregarHorario(
      id_habitat,
      hora_alimentacionMantenimiento,
      id_encargado,
      descripcion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHorarioTrabajoController = async (req, res, next) => {
  try {
    const { hora_inicio, hora_fin } = req.body;
    const result = await agregarHorarioTrabajo(hora_inicio, hora_fin);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarListaBoletasController = async (req, res, next) => {
  try {
    const { idFactura } = req.body;
    const result = await agregarListaBoletas(idFactura);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarPlanificacionEventosController = async (req, res, next) => {
  try {
    const { nombre, fecha_inicio, fecha_fin, idZona, descripcion } = req.body;
    const result = await agregarPlanificacionEventos({
      nombre,
      fecha_inicio,
      fecha_fin,
      idZona,
      descripcion,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarPromocionesController = async (req, res, next) => {
  try {
    const { nombre, descripcion, descuento, fecha_inicio, fecha_fin } =
      req.body;
    const result = await agregarPromociones({
      nombre,
      descripcion,
      descuento,
      fecha_inicio,
      fecha_fin,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarPuestoController = async (req, res, next) => {
  try {
    const { nombre, salario, idHorario } = req.body;
    const result = await agregarPuesto(nombre, salario, idHorario);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarSeguimientoEmpleadoController = async (req, res, next) => {
  try {
    const { fecha_creacion, fecha_actualizacion } = req.body;
    const result = await agregarSeguimientoEmpleado(
      fecha_creacion,
      fecha_actualizacion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarTipoBoletaController = async (req, res, next) => {
  try {
    const { tipo, precio } = req.body;
    const result = await agregarTipoBoleta(tipo, precio);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarZonaController = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const result = await agregarZona(nombre, descripcion);
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
  agregarEvaluacionDesempenoController,
  agregarHistorialEventoController,
  agregarHorarioAlimentacionController,
  agregarHorarioTrabajoController,
  agregarListaBoletasController,
  agregarPlanificacionEventosController,
  agregarPromocionesController,
  agregarPuestoController,
  agregarSeguimientoEmpleadoController,
  agregarTipoBoletaController,
  agregarZonaController,
  agregarBoletaController,
};
