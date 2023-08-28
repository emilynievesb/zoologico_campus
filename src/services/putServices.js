import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";

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


export { actualizarTipoAlimentacion, actualizarAnimal };
