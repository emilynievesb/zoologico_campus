import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarTipoAlimentacionController } from "../controllers/deleteController.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", eliminarAnimalController);
    router.delete("/eliminarBoleta", eliminarBoletasController);
    return router;
};

export { deleteRoute };
