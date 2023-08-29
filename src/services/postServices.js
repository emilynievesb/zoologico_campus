import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { Eventos } from "../collections/eventos.js";
import { FacturaEntrada } from "../collections/facturaEntrada.js";
import { Habitat } from "../collections/habitat.js";

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

const agregarFacturaEntrada = async (fecha, visitante, precio, evento, precioDescuento, listaBoletas) => {
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

export { agregarTipoAlimentacion, agregarAnimal, agregarEstadoSalud, agregarEvento, agregarFacturaEntrada, agregarHabitat };
