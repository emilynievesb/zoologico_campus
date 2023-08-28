import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { Empleado } from "../collections/empleado.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EstadoHabitat } from "../collections/estadohabitad.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js";
import { Eventos } from "../collections/eventos.js";
import { FacturaEntrada } from "../collections/facturaEntrada.js";

const eliminarTipoAlimentacionService = async (id) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.eliminarTipoAlimentacion(id);
};

const eliminarAnimalService = async (id) => {
    const animal = new Animales();
    return await animal.eliminarAnimal(id);
};

const eliminarBoletasService = async (id) => {
    const boleta = new Boletas();
    return await boleta.eliminarBoletas(id);
};

const eliminarCapacitacionesService = async (id) => {
    const capacitacion = new Capacitaciones();
    return await capacitacion.eliminarCapacitacion(id);
};

const eliminarCitaMedicaService = async (id) => {
    const citaMedica = new CitasMedicas();
    return await citaMedica.eliminarCitaMedica(id);
};

const eliminarEmpleadoService = async (id) => {
    const empleado = new Empleado();
    return await empleado.eliminarEmpleado(id);
};

const eliminarEstadoHabitatService = async (id) => {
    const estadoHabitad = new EstadoHabitat();
    return await estadoHabitad.eliminarEstadoHabitat(id);
};

const eliminarEstadosSaludService = async (id) => {
    const estadoSalud = new EstadosSalud();
    return await estadoSalud.eliminarEstadoSalud(id);
};

const eliminarEvaluacionesDesempenoService = async (id) => {
    const evaluacionDesempeno = new EvaluacionDesempeno();
    return await evaluacionDesempeno.eliminarEvaluacionDesempeno(id);
};

const eliminarEventoService = async (id) => {
    const evento = new Eventos();
    return await evento.eliminarEvento(id);
};

const eliminarFacturasEntradaService = async (id) => {
    const facturaEntrada = new FacturaEntrada();
    return await facturaEntrada.eliminarFacturaEntrada(id);
};


export {
    eliminarTipoAlimentacionService,
    eliminarAnimalService,
    eliminarBoletasService,
    eliminarCapacitacionesService,
    eliminarCitaMedicaService,
    eliminarEmpleadoService,
    eliminarEstadoHabitatService,
    eliminarEstadosSaludService,
    eliminarEvaluacionesDesempenoService,
    eliminarEventoService,
    eliminarFacturasEntradaService
}