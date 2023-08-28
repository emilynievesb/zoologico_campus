import { Router } from "express";
import { actualizarAnimalController, actualizarBoletaController, actualizarCapacitacionController, actualizarCitaMedicaController, actualizarEmpleadoController, actualizarTipoAlimentacionController } from "../controllers/putControllers.js";
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
    return router;
};

export { putInitRoute };
