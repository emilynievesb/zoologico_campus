import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { Empleado } from "../collections/empleado.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js";
import { FacturaEntrada } from "../collections/facturaEntrada.js";
import { Habitat } from "../collections/habitat.js";
import { HistorialEventos } from "../collections/historialEventos.js";
import { HistorialesSalud } from "../collections/historialesSalud.js";
import { HorariosAlimentacionMantenimiento } from "../collections/horariosAlimentacionMantenimiento.js";
import { HorariosTrabajo } from "../collections/horariosTrabajo.js";
import { ListaBoletas } from "../collections/lista_boletas.js";
import { PlanificacionEventos } from "../collections/planificacion_eventos.js";
import { Promociones } from "../collections/promociones.js";
import { Puestos } from "../collections/puestos.js";
import { SeguimientoEmpleado } from "../collections/seguimientoEmpleados.js";
import { TipoBoleta } from "../collections/tiposBoletas.js";
import { Zona } from "../collections/zonas.js";

const actualizarTipoAlimentacion = async (id, tipo) => {
  const tipoAlimentacion = new Alimentacion();
  tipoAlimentacion.id = id;
  tipoAlimentacion.tipo = tipo;
  const res = await tipoAlimentacion.actualizarTipoAlimentacion();
  if (res.modifiedCount === 1) {
    return "Actualizado correctamente";
  }
  return "No hubo actualización";
};

const actualizarAnimal = async (
  animalId,
  nombre,
  especie,
  historialSalud,
  alimentacion,
  reproduccion,
  habitat
) => {
  try {
    const animal = new Animales();
    animal.id = animalId;
    animal.nombre = nombre;
    animal.especie = especie;
    animal.historialSalud = historialSalud;
    animal.alimentacion = alimentacion;
    animal.reproduccion = reproduccion;
    animal.habitat = habitat;

    const res = await animal.actualizarAnimal();
    if (res.modifiedCount === 1) {
      return "Actualizado correctamente";
    }
    return "No hubo actualización";
  } catch (error) {
    throw error;
  }
};

const actualizarBoleta = async (id, idLista, idtipo, cantidad) => {
  try {
    const boleta = new Boletas();
    boleta.id = id;
    boleta.idLista = idLista;
    boleta.idtipo = idtipo;
    boleta.cantidad = cantidad;

    const resultado = await boleta.actualizarBoletas();
    if (resultado.modifiedCount > 0) {
      return "Boleta actualizada correctamente";
    } else {
      return "No se encontró la boleta o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarCapacitacion = async (
  id,
  id_seguimiento,
  nombre,
  fecha,
  descripcion
) => {
  try {
    const capacitacion = new Capacitaciones();
    capacitacion.id = id;
    capacitacion.id_seguimiento = id_seguimiento;
    capacitacion.nombre = nombre;
    capacitacion.fecha = new Date(fecha);
    capacitacion.descripcion = descripcion;

    const resultado = await capacitacion.actualizarCapacitacion();
    if (resultado.modifiedCount > 0) {
      return "Capacitación actualizada correctamente";
    } else {
      return "No se encontró la capacitación o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};
const actualizarCitaMedica = async (
  id,
  idHistorialSalud,
  fecha_cita,
  descripcion,
  id_veterinario
) => {
  try {
    const citaMedica = new CitasMedicas();
    citaMedica.id = id;
    citaMedica.idHistorialSalud = idHistorialSalud;
    citaMedica.fecha_cita = new Date(fecha_cita);
    citaMedica.descripcion = descripcion;
    citaMedica.id_veterinario = id_veterinario;

    const resultado = await citaMedica.actualizarCitaMedica();
    if (resultado.modifiedCount > 0) {
      return "Cita médica actualizada correctamente";
    } else {
      return "No se encontró la cita médica o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarEmpleado = async (
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
    empleado.fecha_contratacion = new Date(fecha_contratacion);
    empleado.id_seguimiento = id_seguimiento;
    empleado.idPuesto = idPuesto;
    empleado.salario = salario;

    const resultado = await empleado.actualizarEmpleado();
    if (resultado.modifiedCount > 0) {
      return "Empleado actualizado correctamente";
    } else {
      return "No se encontró el empleado o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarEstadoSalud = async (id, estado) => {
  try {
    const estadosSalud = new EstadosSalud();
    estadosSalud.id = id;
    estadosSalud.estado = estado;

    const resultado = await estadosSalud.actualizarEstadoSalud();
    if (resultado.modifiedCount > 0) {
      return "Estado de salud actualizado correctamente";
    } else {
      return "No se encontró el estado de salud o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarEvaluacionDesempeno = async (
  id,
  seguimiento,
  fecha,
  jefe,
  descripcion
) => {
  try {
    const evaluacionDesempeno = new EvaluacionDesempeno();
    evaluacionDesempeno.id = Number(id);
    evaluacionDesempeno.seguimiento = Number(seguimiento);
    evaluacionDesempeno.fecha = new Date(fecha);
    evaluacionDesempeno.jefe = jefe;
    evaluacionDesempeno.descripcion = descripcion;

    const resultado = await evaluacionDesempeno.actualizarEvaluacionDesempeno();
    if (resultado.modifiedCount > 0) {
      return "Evaluación de desempeño actualizada correctamente";
    } else {
      return "No se encontró la evaluación de desempeño o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarFacturaEntrada = async (
  id,
  fecha,
  visitante,
  precio,
  evento,
  precioDescuento,
  listaBoletas
) => {
  try {
    const factura = new FacturaEntrada();
    factura.id = Number(id);
    factura.fecha = new Date(fecha);
    factura.visitante = visitante;
    factura.precio = Number(precio);
    factura.evento = evento;
    factura.precioDescuento = Number(precioDescuento);
    factura.listaBoletas = Number(listaBoletas);
    const resultado = await factura.actualizarFacturaEntrada();
    if (resultado.modifiedCount > 0) {
      return "Factura de entrada actualizada correctamente";
    } else {
      return "No se encontró la factura de entrada o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarHabitat = async (
  id,
  tipo,
  descripcion,
  idHistorial,
  idZona
) => {
  try {
    const habitat = new Habitat();
    habitat.id = Number(id);
    habitat.tipo = tipo;
    habitat.descripcion = descripcion;
    habitat.idHistorial = idHistorial;
    habitat.idZona = idZona;
    const resultado = await habitat.actualizarHabitat();
    if (resultado.modifiedCount > 0) {
      return "Hábitat actualizado correctamente";
    } else {
      return "No se encontró el hábitat o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarHistorialSalud = async (
  id,
  idEstadoSalud,
  fecha_apertura,
  ultima_modificacion
) => {
  try {
    const historialSalud = new HistorialesSalud();
    historialSalud.id = Number(id);
    historialSalud.idEstadoSalud = Number(idEstadoSalud);
    historialSalud.fecha_apertura = new Date(fecha_apertura);
    historialSalud.ultima_modificacion = new Date(ultima_modificacion);
    const resultado = await historialSalud.actualizarHistorialSalud();
    if (resultado.modifiedCount > 0) {
      return "Historial de salud actualizado correctamente";
    } else {
      return "No se encontró el historial de salud o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarHistorialEvento = async (
  id,
  fecha_creacion,
  ultima_modificacion,
  idEstadohabitat
) => {
  try {
    const historialEventos = new HistorialEventos();
    historialEventos.id = Number(id);
    historialEventos.fecha_creacion = new Date(fecha_creacion);
    historialEventos.ultima_modificacion = new Date(ultima_modificacion);
    historialEventos.idEstadoHabitat = Number(idEstadohabitat);
    const resultado = await historialEventos.actualizarHistorialEvento();
    if (resultado.modifiedCount > 0) {
      return "Historial de evento actualizado correctamente";
    } else {
      return "No se encontró el historial de evento o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

const actualizarHorarioAlimentacion = async (
  id,
  id_habitat,
  hora_alimentacionMantenimiento,
  id_encargado,
  descripcion
) => {
  try {
    const horario = new HorariosAlimentacionMantenimiento();
    horario.id = Number(id);
    horario.id_habitat = Number(id_habitat);
    horario.hora_alimentacionMantenimiento = hora_alimentacionMantenimiento;
    horario.id_encargado = id_encargado;
    horario.descripcion = descripcion;

    const resultado =
      await horario.actualizarHorarioAlimentacionMantenimiento();
    if (resultado.modifiedCount > 0) {
      return "Horario de alimentación/mantenimiento actualizado correctamente";
    } else {
      throw new Error("No se pudo actualizar el horario");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarHorarioTrabajo = async (id, horaInicio, horaFin) => {
  try {
    const horarioTrabajo = new HorariosTrabajo();
    horarioTrabajo.id = Number(id);
    horarioTrabajo.horaInicio = horaInicio;
    horarioTrabajo.horaFin = horaFin;

    const resultado = await horarioTrabajo.actualizarHorarioTrabajo();
    if (resultado.modifiedCount > 0) {
      return "Horario de trabajo actualizado correctamente";
    } else {
      throw new Error("No se pudo actualizar el horario de trabajo");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarListaBoletas = async (id, factura) => {
  try {
    const listaBoletas = new ListaBoletas();
    listaBoletas.id = Number(id);
    listaBoletas.factura = Number(factura);

    const resultado = await listaBoletas.actualizarListaBoletas();
    if (resultado.modifiedCount > 0) {
      return "Lista de boletas actualizada correctamente";
    } else {
      throw new Error("No se pudo actualizar la lista de boletas");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarPlanificacionEventos = async (
  id,
  nombre,
  inicio,
  fin,
  idZona,
  descripcion
) => {
  try {
    const planificacionEventos = new PlanificacionEventos();
    planificacionEventos.id = Number(id);
    planificacionEventos.nombre = nombre;
    planificacionEventos.inicio = new Date(inicio);
    planificacionEventos.fin = new Date(fin);
    planificacionEventos.idZona = Number(idZona);
    planificacionEventos.descripcion = descripcion;

    const resultado =
      await planificacionEventos.actualizarPlanificacionEventos();
    if (resultado.modifiedCount > 0) {
      return "Planificación de eventos actualizada correctamente";
    } else {
      throw new Error("No se pudo actualizar la planificación de eventos");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarPromociones = async (
  id,
  nombre,
  descripcion,
  descuento,
  inicio,
  fin
) => {
  try {
    const promociones = new Promociones();
    promociones.id = Number(id);
    promociones.nombre = nombre;
    promociones.descripcion = descripcion;
    promociones.descuento = Number(descuento);
    promociones.inicio = new Date(inicio);
    promociones.fin = new Date(fin);

    const resultado = await promociones.actualizarPromociones();
    if (resultado.modifiedCount > 0) {
      return "Promoción actualizada correctamente";
    } else {
      throw new Error("No se pudo actualizar la promoción");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarPuesto = async (id, nombre, salario, idHorario) => {
  try {
    const puestos = new Puestos();
    puestos.id = id;
    puestos.nombre = nombre;
    puestos.salario = salario;
    puestos.idHorario = idHorario;

    const resultado = await puestos.actualizarPuesto();
    if (resultado.modifiedCount > 0) {
      return "Puesto actualizado correctamente";
    } else {
      throw new Error("No se pudo actualizar el puesto");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarSeguimientoEmpleado = async (id, creacion, actualizacion) => {
  try {
    const seguimiento = new SeguimientoEmpleado();
    seguimiento.id = id;
    seguimiento.creacion = new Date(creacion);
    seguimiento.actualizacion = new Date(actualizacion);

    const resultado = await seguimiento.actualizarSeguimientoEmpleado();
    if (resultado.modifiedCount > 0) {
      return "Seguimiento de empleado actualizado correctamente";
    } else {
      throw new Error("No se pudo actualizar el seguimiento de empleado");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarTipoBoleta = async (id, tipo, precio) => {
  try {
    const tipoBoleta = new TipoBoleta();
    tipoBoleta.id = id;
    tipoBoleta.tipo = tipo;
    tipoBoleta.precio = precio;

    const resultado = await tipoBoleta.actualizarTipoBoleta();
    if (resultado.modifiedCount > 0) {
      return "Tipo de boleta actualizado correctamente";
    } else {
      throw new Error("No se pudo actualizar el tipo de boleta");
    }
  } catch (error) {
    throw error;
  }
};

const actualizarZona = async (id, nombre, descripcion) => {
  try {
    const zona = new Zona();
    zona.id = id;
    zona.nombre = nombre;
    zona.descripcion = descripcion;

    const resultado = await zona.actualizarZona();
    if (resultado.modifiedCount > 0) {
      return "Zona actualizada correctamente";
    } else {
      throw new Error("No se pudo actualizar la zona");
    }
  } catch (error) {
    throw error;
  }
};

export {
  actualizarTipoAlimentacion,
  actualizarAnimal,
  actualizarBoleta,
  actualizarCapacitacion,
  actualizarCitaMedica,
  actualizarEmpleado,
  actualizarEstadoSalud,
  actualizarEvaluacionDesempeno,
  actualizarFacturaEntrada,
  actualizarHabitat,
  actualizarHistorialSalud,
  actualizarHistorialEvento,
  actualizarHorarioAlimentacion,
  actualizarHorarioTrabajo,
  actualizarListaBoletas,
  actualizarPlanificacionEventos,
  actualizarPromociones,
  actualizarPuesto,
  actualizarSeguimientoEmpleado,
  actualizarTipoBoleta,
  actualizarZona,
};
