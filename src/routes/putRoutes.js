import { Router } from "express";
import { actualizarAnimalController, actualizarBoletaController, actualizarTipoAlimentacionController } from "../controllers/putControllers.js";

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
    return router;
};

export { putInitRoute };
