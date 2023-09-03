import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EstadoHabitat } from "../collections/estadohabitad.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js";
import { Eventos } from "../collections/eventos.js";
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

const agregarBoleta = async (idLista, idtipo, cantidad) => {
  try {
    const boleta = new Boletas();
    boleta.idLista = idLista;
    boleta.idtipo = idtipo;
    boleta.cantidad = cantidad;

    const resultado = await boleta.agregarBoletas();
    if (resultado.insertedId) {
      return "Boleta creada correctamente";
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

const agregarCitaMedica = async (
  idHistorialSalud,
  fecha_cita,
  descripcion,
  id_veterinario
) => {
  try {
    const citaMedica = new CitasMedicas();
    citaMedica.idHistorialSalud = idHistorialSalud;
    citaMedica.fecha_cita = new Date(fecha_cita);
    citaMedica.descripcion = descripcion;
    citaMedica.id_veterinario = id_veterinario;

    const resultado = await citaMedica.agregarCitaMedica();
    if (resultado.insertedId) {
      return "Cita médica creada correctamente";
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

const agregarEstadoHabitat = async (descripcionEstado) => {
  try {
    const estadoHabitat = new EstadoHabitat();
    estadoHabitat.descripcionEstado = descripcionEstado;

    const resultado = await estadoHabitat.agregarEstadoHabitat();
    if (resultado.insertedId) {
      return "Estado de Habitat agregado correctamente";
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

const agregarHorario = async (
  id_habitat,
  hora_alimentacionMantenimiento,
  id_encargado,
  descripcion
) => {
  try {
    const horario = new HorariosAlimentacionMantenimiento();
    horario.id_habitat = Number(id_habitat);
    horario.hora_alimentacionMantenimiento = hora_alimentacionMantenimiento;
    horario.id_encargado = id_encargado;
    horario.descripcion = descripcion;

    const resultado = await horario.agregarHorarioAlimentacionMantenimiento();
    if (resultado.insertedId) {
      return "Horario de alimentación/mantenimiento agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarHorarioTrabajo = async (horaInicio, horaFin) => {
  try {
    const horarioTrabajo = new HorariosTrabajo();
    horarioTrabajo.horaInicio = horaInicio;
    horarioTrabajo.horaFin = horaFin;

    const resultado = await horarioTrabajo.agregarHorarioTrabajo();
    if (resultado.insertedId) {
      return "Horario de trabajo agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarListaBoletas = async (factura) => {
  try {
    const listaBoletas = new ListaBoletas();
    listaBoletas.factura = Number(factura);

    const resultado = await listaBoletas.agregarListaBoletas();
    if (resultado.insertedId) {
      return "Lista de boletas agregada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarPlanificacionEventos = async ({
  nombre,
  inicio,
  fin,
  idZona,
  descripcion,
}) => {
  try {
    const planificacionEventos = new PlanificacionEventos();
    planificacionEventos.nombre = nombre;
    planificacionEventos.inicio = new Date(inicio);
    planificacionEventos.fin = new Date(fin);
    planificacionEventos.idZona = Number(idZona);
    planificacionEventos.descripcion = descripcion;

    const resultado = await planificacionEventos.agregarPlanificacionEventos();
    if (resultado.insertedId) {
      return "Planificación de eventos agregada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarPromociones = async ({
  nombre,
  descripcion,
  descuento,
  inicio,
  fin,
}) => {
  try {
    const promociones = new Promociones();
    promociones.nombre = nombre;
    promociones.descripcion = descripcion;
    promociones.descuento = Number(descuento);
    promociones.inicio = new Date(inicio);
    promociones.fin = new Date(fin);

    const resultado = await promociones.agregarPromociones();
    if (resultado.insertedId) {
      return "Promoción agregada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarPuesto = async (nombre, salario, idHorario) => {
  try {
    const puestos = new Puestos();
    puestos.nombre = nombre;
    puestos.salario = salario;
    puestos.idHorario = idHorario;

    const resultado = await puestos.agregarPuesto();
    if (resultado.insertedId) {
      return "Puesto agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarSeguimientoEmpleado = async (creacion, actualizacion) => {
  try {
    const seguimiento = new SeguimientoEmpleado();
    seguimiento.creacion = new Date(creacion);
    seguimiento.actualizacion = new Date(actualizacion);

    const resultado = await seguimiento.agregarSeguimientoEmpleado();
    if (resultado.insertedId) {
      return "Seguimiento de empleado agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarTipoBoleta = async (tipo, precio) => {
  try {
    const tipoBoleta = new TipoBoleta();
    tipoBoleta.tipo = tipo;
    tipoBoleta.precio = Number(precio);

    const resultado = await tipoBoleta.agregarTipoBoleta();
    if (resultado.insertedId) {
      return "Tipo de boleta agregado correctamente";
    }
  } catch (error) {
    throw error;
  }
};

const agregarZona = async (nombre, descripcion) => {
  try {
    const zona = new Zona();
    zona.nombre = nombre;
    zona.descripcion = descripcion;

    const resultado = await zona.agregarZona();
    if (resultado.insertedId) {
      return "Zona agregada correctamente";
    }
  } catch (error) {
    throw error;
  }
};

export {
  agregarTipoAlimentacion,
  agregarAnimal,
  agregarEstadoSalud,
  agregarCitaMedica,
  agregarEvento,
  agregarFacturaEntrada,
  agregarHabitat,
  agregarHistorialSalud,
  agregarCapacitacion,
  agregarEmpleado,
  agregarEvaluacionDesempeno,
  agregarHistorialEvento,
  agregarHorario,
  agregarHorarioTrabajo,
  agregarListaBoletas,
  agregarPlanificacionEventos,
  agregarPromociones,
  agregarPuesto,
  agregarSeguimientoEmpleado,
  agregarTipoBoleta,
  agregarZona,
  agregarEstadoHabitat,
  agregarBoleta,
};
