import { Router } from "express";
import { actualizarAnimalController, actualizarTipoAlimentacionController } from "../controllers/putControllers.js";

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
    return router;
};

export { putInitRoute };
