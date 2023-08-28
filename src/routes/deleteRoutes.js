import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarEmpleadoController, eliminarTipoAlimentacionController } from "../controllers/deleteController.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", eliminarAnimalController);
    router.delete("/eliminarBoleta", eliminarBoletasController);
    router.delete("/eliminarCapacitaciones", eliminarCapacitacioncesControler);
    router.delete("/eliminarCitaMedica", eliminarCitaMedicaController);
    router.delete("/eliminarEmpleado", eliminarEmpleadoController);
    return router;
};

export { deleteRoute };
