import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { Eventos } from "../collections/eventos.js";

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

const agregarEvento = async (historialId, empleadoId, fecha_evento, descripcion, recomendaciones) => {
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



export { agregarTipoAlimentacion, agregarAnimal, agregarEstadoSalud, agregarEvento };
