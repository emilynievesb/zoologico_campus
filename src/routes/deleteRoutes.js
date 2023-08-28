import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarEmpleadoController, eliminarEstadoHabitatController, eliminarEstadoSaludController, eliminarEvaluacionDesempenoController, eliminarEventoController, eliminarFacturaEntradaController, eliminarHabitatController, eliminarHistorialesSaludController, eliminarHorarioAlimentacionMantenimientoController, eliminarHorarioTrabajoController, eliminarListaBoletasController, eliminarPlanificacionEventosController, eliminarPromocionesController, eliminarTipoAlimentacionController } from "../controllers/deleteController.js";

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
    router.delete("/eliminarHorarAlMant", eliminarHorarioAlimentacionMantenimientoController);
    router.delete("/eliminarHorarioTrabajo", eliminarHorarioTrabajoController);
    router.delete("/eliminarListaBoletas", eliminarListaBoletasController);
    router.delete("/eliminarPlanificacionEventos", eliminarPlanificacionEventosController);
    router.delete("/eliminarPromociones", eliminarPromocionesController);
    return router;
};

export { deleteRoute };
