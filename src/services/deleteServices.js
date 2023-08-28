import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { Empleado } from "../collections/empleado.js";

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

export {
    eliminarTipoAlimentacionService,
    eliminarAnimalService,
    eliminarBoletasService,
    eliminarCapacitacionesService,
    eliminarCitaMedicaService,
    eliminarEmpleadoService
}