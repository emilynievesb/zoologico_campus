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
import { HorariosAlimentacionMantenimiento } from "../collections/horariosAlimentacionMantenimiento.js";
import { HorariosTrabajo } from "../collections/horariosTrabajo.js";
import { ListaBoletas } from "../collections/lista_boletas.js";
import { PlanificacionEventos } from "../collections/planificacion_eventos.js";
import { Promociones } from "../collections/promociones.js";
import { Puestos } from "../collections/puestos.js";
import { SeguimientoEmpleado } from "../collections/seguimientoEmpleados.js";

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

const obtenerHorariosAlimentacionMantenimientoService = async () => {
    const horarios = new HorariosAlimentacionMantenimiento();
    return await horarios.obtenerHorariosAlimentacionMantenimiento();
};

const obtenerHorarioAlimentacionMantenimientoService = async (id) => {
    const horarios = new HorariosAlimentacionMantenimiento();
    return await horarios.obtenerHorarioAlimentacionMantenimientoPorId(id);
};

const obtenerHorariosTrabajoService = async () => {
    const horarios = new HorariosTrabajo();
    return await horarios.obtenerHorariosTrabajo();
};

const obtenerHorarioTrabajoService = async (id) => {
    const horarios = new HorariosTrabajo();
    return await horarios.obtenerHorarioTrabajoPorId(id);
};

const obtenerlistaBoletasService = async (id) => {
    const listaBoletas = new ListaBoletas();
    return await listaBoletas.obtenerListaBoletasPorId(id);
};

const obtenerlistasBoletasService = async () => {
    const listaBoletas = new ListaBoletas();
    return await listaBoletas.obtenerListasBoletas();
};

const obtenerPlanificacionesEventosService = async () => {
    const planificacionEvento = new PlanificacionEventos();
    return await planificacionEvento.obtenerPlanificacionEventos();
};

const obtenerPlanificacionEventosService = async (id) => {
    const planificacionEvento = new PlanificacionEventos();
    return await planificacionEvento.obtenerPlanificacionEventosPorId(id);
};

const obtenerPromocionesService = async () => {
    const promocion = new Promociones();
    return await promocion.obtenerPromociones();
};

const obtenerPromocionService = async (id) => {
    const promocion = new Promociones();
    return await promocion.obtenerPromocionesPorId(id);
};

const obtenerPuestosService = async () => {
    const puesto = new Puestos();
    return await puesto.obtenerPuestos();
};

const obtenerPuestoService = async (id) => {
    const puesto = new Puestos();
    return await puesto.obtenerPuesto(id);
};

const obtenerSeguimientosEmpleadoService = async () => {
    const seguimientoEmpleado = new SeguimientoEmpleado();
    return await seguimientoEmpleado.obtenerSeguimientosEmpleado();
};

const obtenerSeguimientoEmpleadoService = async (id) => {
    const seguimientoEmpleado = new SeguimientoEmpleado();
    return await seguimientoEmpleado.obtenerSeguimientoEmpleadoPorId(id);
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
    obtenerHistorialEventoService,
    obtenerHorarioAlimentacionMantenimientoService,
    obtenerHorariosAlimentacionMantenimientoService,
    obtenerHorariosTrabajoService,
    obtenerHorarioTrabajoService,
    obtenerlistaBoletasService,
    obtenerlistasBoletasService,
    obtenerPlanificacionesEventosService,
    obtenerPlanificacionEventosService,
    obtenerPromocionesService,
    obtenerPromocionService,
    obtenerPuestosService,
    obtenerPuestoService,
    obtenerSeguimientosEmpleadoService,
    obtenerSeguimientoEmpleadoService
}