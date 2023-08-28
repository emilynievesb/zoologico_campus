import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarEmpleadoController, eliminarEstadoHabitatController, eliminarEstadoSaludController, eliminarEvaluacionDesempenoController, eliminarEventoController, eliminarFacturaEntradaController, eliminarHabitatController, eliminarHistorialesSaludController, eliminarTipoAlimentacionController } from "../controllers/deleteController.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", eliminarAnimalController);
    router.delete("/eliminarBoleta", eliminarBoletasController);
    router.delete("/eliminarCapacitaciones", eliminarCapacitacioncesControler);
    router.delete("/eliminarCitaMedica", eliminarCitaMedicaController);
    router.delete("/eliminarEmpleado", eliminarEmpleadoController);
    router.delete("/eliminarEstadoHabitat", eliminarEstadoHabitatController);
    router.delete("/eliminarEstadoSalud", eliminarEstadoSaludController);
    router.delete("/eliminarEvaluacionDesempeno", eliminarEvaluacionDesempenoController);
    router.delete("/eliminarEvento", eliminarEventoController);
    router.delete("/eliminarFacturasEntrada", eliminarFacturaEntradaController);
    router.delete("/eliminarHabitat", eliminarHabitatController);
    router.delete("/eliminarHistorialesSalud", eliminarHistorialesSaludController);
    router.delete("/eliminarHistorialEvento", eliminarHistorialesSaludController);
    return router;
};

export { deleteRoute };
