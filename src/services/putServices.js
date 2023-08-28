import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";

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

export { actualizarTipoAlimentacion, actualizarAnimal, actualizarBoleta };
