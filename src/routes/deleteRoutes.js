import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarTipoAlimentacionController } from "../controllers/deleteController.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", eliminarAnimalController);
    router.delete("/eliminarBoleta", eliminarBoletasController);
    router.delete("/eliminarCapacitaciones", eliminarCapacitacioncesControler);
    router.delete("/eliminarCitaMedica", eliminarCitaMedicaController);
    return router;
};

export { deleteRoute };
