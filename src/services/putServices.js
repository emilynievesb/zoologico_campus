import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { Empleado } from "../collections/empleado.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js"
import { FacturaEntrada } from "../collections/facturaEntrada.js";
import { Habitat } from "../collections/habitat.js";
import { HistorialesSalud } from "../collections/historialesSalud.js";

const actualizarTipoAlimentacion = async (id, tipo) => {
    const tipoAlimentacion = new Alimentacion();
    tipoAlimentacion.id = id;
    tipoAlimentacion.tipo = tipo;
    const res = await tipoAlimentacion.actualizarTipoAlimentacion();
    if (res.modifiedCount === 1) {
        return "Actualizado correctamente"
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
            return "Actualizado correctamente"
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

const actualizarCapacitacion = async (id, id_seguimiento, nombre, fecha, descripcion) => {
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
const actualizarCitaMedica = async (id, idHistorialSalud, fecha_cita, descripcion, id_veterinario) => {
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

const actualizarEmpleado = async (id, nombre, fecha_contratacion, id_seguimiento, idPuesto, salario) => {
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

const actualizarEvaluacionDesempeno = async (id, seguimiento, fecha, jefe, descripcion) => {
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

const actualizarFacturaEntrada = async (id, fecha, visitante, precio, evento, precioDescuento, listaBoletas) => {
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

const actualizarHabitat = async (id, tipo, descripcion, idHistorial, idZona) => {
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

const actualizarHistorialSalud = async (id, idEstadoSalud, fecha_apertura, ultima_modificacion) => {
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

export { actualizarTipoAlimentacion, actualizarAnimal, actualizarBoleta, actualizarCapacitacion, actualizarCitaMedica, actualizarEmpleado, actualizarEstadoSalud, actualizarEvaluacionDesempeno, actualizarFacturaEntrada, actualizarHabitat, actualizarHistorialSalud };
