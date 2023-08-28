import { Router } from "express";
import { actualizarAnimalController, actualizarBoletaController, actualizarCapacitacionController, actualizarCitaMedicaController, actualizarEmpleadoController, actualizarEstadoSaludController, actualizarTipoAlimentacionController } from "../controllers/putControllers.js";
import { actualizarEmpleado } from "../services/putServices.js";

const putInitRoute = () => {
    const router = Router();
    router.put(
        "/actualizarTipoAlimentacion",
        actualizarTipoAlimentacionController
    );
    router.put(
        "/actualizarAnimal",
        actualizarAnimalController
    );
    router.put(
        "/actualizarBoleta",
        actualizarBoletaController
    );
    router.put(
        "/actualizarCapacitacion",
        actualizarCapacitacionController
    );
    router.put(
        "/actualizarCitaMedica", actualizarCitaMedicaController
    )
    router.put(
        "/actualizarEmpleado", actualizarEmpleadoController
    )
    router.put(
        "/actualizarEstadoSalud", actualizarEstadoSaludController
    )
    return router;
};

export { putInitRoute };
