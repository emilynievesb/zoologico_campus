import {
  actualizarAnimal,
  actualizarBoleta,
  actualizarCapacitacion,
  actualizarCitaMedica,
  actualizarEmpleado,
  actualizarEstadoHabitat,
  actualizarEstadoSalud,
  actualizarEvaluacionDesempeno,
  actualizarEvento,
  actualizarFacturaEntrada,
  actualizarHabitat,
  actualizarHistorialEvento,
  actualizarHistorialSalud,
  actualizarHorarioAlimentacion,
  actualizarHorarioTrabajo,
  actualizarListaBoletas,
  actualizarPlanificacionEventos,
  actualizarPromociones,
  actualizarPuesto,
  actualizarSeguimientoEmpleado,
  actualizarTipoAlimentacion,
  actualizarTipoBoleta,
  actualizarZona,
} from "../services/putServices.js";

const actualizarTipoAlimentacionController = async (req, res, next) => {
  try {
    const { id, tipo } = req.body;
    const result = await actualizarTipoAlimentacion(id, tipo);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarAnimalController = async (req, res, next) => {
  try {
    const {
      id,
      nombre,
      especie,
      historialSalud,
      alimentacion,
      reproduccion,
      habitat,
    } = req.body;
    const result = await actualizarAnimal(
      id,
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

const actualizarBoletaController = async (req, res, next) => {
  try {
    const { id, idLista, idtipo, cantidad } = req.body;
    const result = await actualizarBoleta(id, idLista, idtipo, cantidad);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarCapacitacionController = async (req, res, next) => {
  try {
    const { id, id_seguimiento, nombre, fecha, descripcion } = req.body;
    const result = await actualizarCapacitacion(
      id,
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

const actualizarCitaMedicaController = async (req, res, next) => {
  try {
    const { id, idHistorialSalud, fecha_cita, descripcion, id_veterinario } =
      req.body;
    const result = await actualizarCitaMedica(
      id,
      idHistorialSalud,
      fecha_cita,
      descripcion,
      id_veterinario
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarEmpleadoController = async (req, res, next) => {
  try {
    const {
      id,
      nombre,
      fecha_contratacion,
      id_seguimiento,
      idPuesto,
      salario,
    } = req.body;
    const result = await actualizarEmpleado(
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

const actualizarEstadoSaludController = async (req, res, next) => {
  try {
    const { id, estado } = req.body;
    const result = await actualizarEstadoSalud(id, estado);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarEstadoHabitatController = async (req, res, next) => {
  try {
    const { id, descripcionEstado } = req.body;
    const result = await actualizarEstadoHabitat(id, descripcionEstado);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarEventoController = async (req, res, next) => {
  try {
    const {
      id,
      historialId,
      fecha_evento,
      empleadoId,
      descripcion,
      recomendaciones,
    } = req.body;
    const result = await actualizarEvento(
      id,
      historialId,
      fecha_evento,
      empleadoId,
      descripcion,
      recomendaciones
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarEvaluacionDesempenoController = async (req, res, next) => {
  try {
    const {
      id,
      id_seguimiento,
      fecha_reporte,
      id_empleado_reporte,
      descripcion,
    } = req.body;
    const result = await actualizarEvaluacionDesempeno(
      id,
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

const actualizarFacturaEntradaController = async (req, res, next) => {
  try {
    const {
      id,
      fecha_compra,
      documento_visitante,
      precio,
      evento_especial,
      precio_descuento,
      idLista_boletas,
    } = req.body;
    const result = await actualizarFacturaEntrada(
      id,
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

const actualizarHabitatController = async (req, res, next) => {
  try {
    const { id, tipo, descripcion, idHistorial, idZona } = req.body;
    const result = await actualizarHabitat(
      id,
      tipo,
      descripcion,
      idHistorial,
      idZona
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarHistorialSaludController = async (req, res, next) => {
  try {
    const { id, idEstadoSalud, fecha_apertura, ultima_modificacion } = req.body;
    const result = await actualizarHistorialSalud(
      id,
      idEstadoSalud,
      fecha_apertura,
      ultima_modificacion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarHistorialEventoController = async (req, res, next) => {
  try {
    const { id, fecha_creacion, ultima_modificacion, idEstadohabitat } =
      req.body;
    const result = await actualizarHistorialEvento(
      id,
      fecha_creacion,
      ultima_modificacion,
      idEstadohabitat
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarHorarioAlimentacionController = async (req, res, next) => {
  try {
    const {
      id,
      id_habitat,
      hora_alimentacionMantenimiento,
      id_encargado,
      descripcion,
    } = req.body;
    const result = await actualizarHorarioAlimentacion(
      id,
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

const actualizarHorarioTrabajoController = async (req, res, next) => {
  try {
    const { id, hora_inicio, hora_fin } = req.body;
    const result = await actualizarHorarioTrabajo(id, hora_inicio, hora_fin);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarListaBoletasController = async (req, res, next) => {
  try {
    const { id, idFactura } = req.body;
    const result = await actualizarListaBoletas(id, idFactura);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarPlanificacionEventosController = async (req, res, next) => {
  try {
    const { id, nombre, fecha_inicio, fecha_fin, idZona, descripcion } =
      req.body;
    const result = await actualizarPlanificacionEventos(
      id,
      nombre,
      fecha_inicio,
      fecha_fin,
      idZona,
      descripcion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarPromocionesController = async (req, res, next) => {
  try {
    const { id, nombre, descripcion, descuento, fecha_inicio, fecha_fin } =
      req.body;
    const result = await actualizarPromociones(
      id,
      nombre,
      descripcion,
      descuento,
      fecha_inicio,
      fecha_fin
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarPuestoController = async (req, res, next) => {
  try {
    const { id, nombre, salario, idHorario } = req.body;
    const result = await actualizarPuesto(id, nombre, salario, idHorario);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarSeguimientoEmpleadoController = async (req, res, next) => {
  try {
    const { id, fecha_creacion, fecha_actualizacion } = req.body;
    const result = await actualizarSeguimientoEmpleado(
      id,
      fecha_creacion,
      fecha_actualizacion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarTipoBoletaController = async (req, res, next) => {
  try {
    const { id, tipo, precio } = req.body;
    const result = await actualizarTipoBoleta(id, tipo, precio);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const actualizarZonaController = async (req, res, next) => {
  try {
    const { id, nombre, descripcion } = req.body;
    const result = await actualizarZona(id, nombre, descripcion);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  actualizarTipoAlimentacionController,
  actualizarAnimalController,
  actualizarBoletaController,
  actualizarCapacitacionController,
  actualizarCitaMedicaController,
  actualizarEmpleadoController,
  actualizarEstadoSaludController,
  actualizarEvaluacionDesempenoController,
  actualizarFacturaEntradaController,
  actualizarHabitatController,
  actualizarHistorialSaludController,
  actualizarHistorialEventoController,
  actualizarHorarioAlimentacionController,
  actualizarHorarioTrabajoController,
  actualizarListaBoletasController,
  actualizarPlanificacionEventosController,
  actualizarPromocionesController,
  actualizarPuestoController,
  actualizarSeguimientoEmpleadoController,
  actualizarTipoBoletaController,
  actualizarZonaController,
  actualizarEstadoHabitatController,
  actualizarEventoController,
};
