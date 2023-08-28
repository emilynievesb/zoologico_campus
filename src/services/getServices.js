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
import { Habitat } from "../collections/habitat.js";
import { HistorialEventos } from "../collections/historialEventos.js";
import { HistorialesSalud } from "../collections/historialesSalud.js";

const obtenerTiposAlimentacionService = async () => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTiposAlimentacion();
};

const obtenerTipoAlimentacionService = async (tipoAlimentacionId) => {
    const alimentacion = new Alimentacion();
    return await alimentacion.obtenerTipoAlimentacion(tipoAlimentacionId);
};

const obtenerAnimalesService = async () => {
    const animal = new Animales();
    return await animal.obtenerAnimales();
};

const obtenerAnimalService = async (animalId) => {
    const animal = new Animales();
    return await animal.obtenerAnimal(animalId);
};

const obtenerBoletasService = async () => {
    const boleta = new Boletas();
    return await boleta.obtenerBoletas();
};

const obtenerBoletaService = async (id) => {
    const boleta = new Boletas();
    return await boleta.obtenerBoletasporId(id);
};

const obtenerCapacitacionesService = async () => {
    const capacitacion = new Capacitaciones();
    return await capacitacion.obtenerCapacitaciones();
};

const obtenerCapacitacionService = async (id) => {
    const capacitacion = new Capacitaciones();
    return await capacitacion.obtenerCapacitacionPorId(id);
};

const obtenerCitasMedicasService = async () => {
    const citaMedica = new CitasMedicas();
    return await citaMedica.obtenerCitasMedicas();
};

const obtenerCitasMedicaService = async (id) => {
    const citaMedica = new CitasMedicas();
    return await citaMedica.obtenerCitaMedica(id);
};

const obtenerEmpleadosService = async () => {
    const empleado = new Empleado();
    return await empleado.obtenerEmpleados();
};

const obtenerEmpleadoService = async (id) => {
    const empleado = new Empleado();
    return await empleado.obtenerEmpleado(id);
};

const obtenerEstadoHabitatService = async (id) => {
    const estadoHabitad = new EstadoHabitat();
    return await estadoHabitad.obtenerEstadoHabitatPorId(id);
};

const obtenerEstadoHabitatsService = async () => {
    const estadoHabitad = new EstadoHabitat();
    return await estadoHabitad.obtenerEstadosHabitat();
};

const obtenerEstadoSaludService = async (id) => {
    const estadoSalud = new EstadosSalud();
    return await estadoSalud.obtenerEstadoSalud(id);
};

const obtenerEstadosSaludService = async () => {
    const estadoSalud = new EstadosSalud();
    return await estadoSalud.obtenerEstadosSalud();
};

const obtenerEvaluacionDesempenoService = async (id) => {
    const evaluacionDesempeno = new EvaluacionDesempeno();
    return await evaluacionDesempeno.obtenerEvaluacionDesempenoPorId(id);
};

const obtenerEvaluacionesDesempenoService = async () => {
    const evaluacionDesempeno = new EvaluacionDesempeno();
    return await evaluacionDesempeno.obtenerEvaluacionesDesempeno();
};

const obtenerEventosService = async () => {
    const evento = new Eventos();
    return await evento.obtenerEventos();
};

const obtenerEventoService = async (id) => {
    const evento = new Eventos();
    return await evento.obtenerEvento(id);
};

const obtenerFacturasEntradaService = async () => {
    const facturaEntrada = new FacturaEntrada();
    return await facturaEntrada.obtenerFacturasEntrada();
};

const obtenerFacturaEntradaService = async (id) => {
    const facturaEntrada = new FacturaEntrada();
    return await facturaEntrada.obtenerFacturaEntradaPorId(id);
};

const obtenerHabitatsService = async () => {
    const habitat = new Habitat();
    return await habitat.obtenerHabitats();
};

const obtenerHabitatService = async (id) => {
    const habitat = new Habitat();
    return await habitat.obtenerHabitat(id);
};

const obtenerHistorialesSaludService = async () => {
    const historialSalud = new HistorialesSalud();
    return await historialSalud.obtenerHistorialesSalud();
};

const obtenerHistorialSaludService = async (id) => {
    const historialSalud = new HistorialesSalud();
    return await historialSalud.obtenerHistorialSalud(id)
};

const obtenerHistorialesEventoService = async () => {
    const historialEventos = new HistorialEventos();
    return await historialEventos.obtenerHistoriales();
};

const obtenerHistorialEventoService = async (id) => {
    const historialEventos = new HistorialEventos();
    return await historialEventos.obtenerHistorialEvento(id);
};


export {
    obtenerTiposAlimentacionService,
    obtenerTipoAlimentacionService,
    obtenerAnimalesService,
    obtenerAnimalService,
    obtenerBoletasService,
    obtenerBoletaService,
    obtenerCapacitacionesService,
    obtenerCapacitacionService,
    obtenerCitasMedicasService,
    obtenerCitasMedicaService,
    obtenerEmpleadosService,
    obtenerEmpleadoService,
    obtenerEstadoHabitatService,
    obtenerEstadoHabitatsService,
    obtenerEstadoSaludService,
    obtenerEstadosSaludService,
    obtenerEvaluacionDesempenoService,
    obtenerEvaluacionesDesempenoService,
    obtenerEventosService,
    obtenerEventoService,
    obtenerFacturasEntradaService,
    obtenerFacturaEntradaService,
    obtenerHabitatsService,
    obtenerHabitatService,
    obtenerHistorialesSaludService,
    obtenerHistorialSaludService,
    obtenerHistorialesEventoService,
    obtenerHistorialEventoService
}