import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js";
import { Eventos } from "../collections/eventos.js";
import { FacturaEntrada } from "../collections/facturaEntrada.js";
import { Habitat } from "../collections/habitat.js";
import { HistorialEventos } from "../collections/historialEventos.js";
import { HistorialesSalud } from "../collections/historialesSalud.js";

const agregarTipoAlimentacion = async (tipo) => {
  const tipoAlimentacion = new Alimentacion();
  tipoAlimentacion.tipo = tipo;
  const res = await tipoAlimentacion.agregarTipoAlimentacion();
  if (res.insertedId) {
    return "Tipo de alimentación creada correctamente";
  }
};

const agregarAnimal = async (
  nombre,
  especie,
  historialSalud,
  alimentacion,
  reproduccion,
  habitat
) => {
  try {
    const animal = new Animales();
    animal.nombre = nombre;
    animal.especie = especie;
    animal.historialSalud = historialSalud;
    animal.alimentacion = alimentacion;
    animal.reproduccion = reproduccion;
    animal.habitat = habitat;

    const resultado = await animal.agregarAnimales();
    if (resultado.insertedId) {
      return "Animal creado correctamente";
    }
  } catch (error) {
    throw error;
  }
};
const agregarCapacitacion = async (
  id_seguimiento,
  nombre,
  fecha,
  descripcion
) => {
  try {
    const capacitacion = new Capacitaciones();
    capacitacion.id_seguimiento = id_seguimiento;
    capacitacion.nombre = nombre;
    capacitacion.fecha = new Date(fecha);
    capacitacion.descripcion = descripcion;

    const resultado = await capacitacion.agregarCapacitacion();
    if (resultado.insertedId) {
      return "Capacitación creada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarEmpleado = async (
  id,
  nombre,
  fecha_contratacion,
  id_seguimiento,
  idPuesto,
  salario
) => {
  try {
    const empleado = new Empleado();
    empleado.id = id;
    empleado.nombre = nombre;
    empleado.fecha_contratacion = fecha_contratacion;
    empleado.id_seguimiento = id_seguimiento;
    empleado.idPuesto = idPuesto;
    empleado.salario = salario;

    const resultado = await empleado.agregarEmpleado();
    if (resultado.insertedId) {
      return "Empleado creado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarEstadoSalud = async (estado) => {
  try {
    const estadosSalud = new EstadosSalud();
    estadosSalud.estado = estado;

    const resultado = await estadosSalud.agregarEstadoSalud();
    if (resultado.insertedId) {
      return "Estado de salud creado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarEvento = async (
  historialId,
  empleadoId,
  fecha_evento,
  descripcion,
  recomendaciones
) => {
  try {
    const evento = new Eventos();
    evento.historialId = historialId;
    evento.empleadoId = empleadoId;
    evento.fecha_evento = fecha_evento;
    evento.descripcion = descripcion;
    evento.recomendaciones = recomendaciones;

    const resultado = await evento.agregarEvento();
    if (resultado.insertedId) {
      return "Evento agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarFacturaEntrada = async (
  fecha,
  visitante,
  precio,
  evento,
  precioDescuento,
  listaBoletas
) => {
  try {
    const factura = new FacturaEntrada();
    factura.fecha = new Date(fecha);
    factura.visitante = visitante;
    factura.precio = Number(precio);
    factura.evento = evento;
    factura.precioDescuento = Number(precioDescuento);
    factura.listaBoletas = Number(listaBoletas);
    const resultado = await factura.agregarFacturaEntrada();
    if (resultado.insertedId) {
      return "Factura de entrada agregada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarHabitat = async (tipo, descripcion, idHistoria, idZona) => {
  try {
    const habitat = new Habitat();
    habitat.tipo = tipo;
    habitat.descripcion = descripcion;
    habitat.idHistorial = Number(idHistoria);
    habitat.idZona = Number(idZona);
    const resultado = await habitat.agregarHabitat();
    if (resultado.insertedId) {
      return "Hábitat agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarHistorialSalud = async (
  idEstadoSalud,
  fecha_apertura,
  ultima_modificacion
) => {
  try {
    const historialSalud = new HistorialesSalud();
    historialSalud.idEstadoSalud = idEstadoSalud;
    historialSalud.fecha_apertura = new Date(fecha_apertura);
    historialSalud.ultima_modificacion = new Date(ultima_modificacion);

    const resultado = await historialSalud.agregarHistorialSalud();
    if (resultado.insertedId) {
      return "Historial de salud agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarEvaluacionDesempeno = async (
  seguimiento,
  fecha,
  jefe,
  descripcion
) => {
  try {
    const evaluacionDesempeno = new EvaluacionDesempeno();
    evaluacionDesempeno.seguimiento = seguimiento;
    evaluacionDesempeno.fecha = fecha;
    evaluacionDesempeno.jefe = jefe;
    evaluacionDesempeno.descripcion = descripcion;

    const resultado = await evaluacionDesempeno.agregarEvaluacionDesempeno();
    if (resultado.insertedId) {
      return "Evaluación de desempeño creada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarHistorialEvento = async (
  fecha_creacion,
  ultima_modificacion,
  idEstadohabitat
) => {
  try {
    const historialEventos = new HistorialEventos();
    historialEventos.fecha_creacion = new Date(fecha_creacion);
    historialEventos.ultima_modificacion = new Date(ultima_modificacion);
    historialEventos.idEstadohabitat = idEstadohabitat;
    const resultado = await historialEventos.agregarHistorialEvento();
    if (resultado.insertedId) {
      return "Historial de evento agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

export {
  agregarTipoAlimentacion,
  agregarAnimal,
  agregarEstadoSalud,
  agregarEvento,
  agregarFacturaEntrada,
  agregarHabitat,
  agregarHistorialSalud,
  agregarCapacitacion,
  agregarEmpleado,
  agregarEvaluacionDesempeno,
  agregarHistorialEvento,
};
