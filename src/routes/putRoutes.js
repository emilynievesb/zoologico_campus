import { Router } from "express";
import { actualizarAnimalController, actualizarBoletaController, actualizarCapacitacionController, actualizarTipoAlimentacionController } from "../controllers/putControllers.js";

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
    return router;
};

export { putInitRoute };
