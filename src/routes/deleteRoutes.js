import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarEmpleadoController, eliminarEstadoHabitatController, eliminarEstadoSaludController, eliminarEvaluacionDesempenoController, eliminarEventoController, eliminarFacturaEntradaController, eliminarHabitatController, eliminarHistorialesSaludController, eliminarHorarioAlimentacionMantenimientoController, eliminarHorarioTrabajoController, eliminarListaBoletasController, eliminarPlanificacionEventosController, eliminarPromocionesController, eliminarPuestoController, eliminarSeguimientoEmpleadoController, eliminarTipoAlimentacionController, eliminarTipoBoletasController, eliminarZonasController } from "../controllers/deleteController.js";
import { deleteT1DTOMiddleware, deleteT2DTOMiddleware } from "../middlewares/middlewaresDTO.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", deleteT1DTOMiddleware, eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", deleteT1DTOMiddleware, eliminarAnimalController);
    router.delete("/eliminarBoleta", deleteT1DTOMiddleware, eliminarBoletasController);
    router.delete("/eliminarCapacitaciones", deleteT1DTOMiddleware, eliminarCapacitacioncesControler);
    router.delete("/eliminarCitaMedica", deleteT1DTOMiddleware, eliminarCitaMedicaController);
    router.delete("/eliminarEmpleado", deleteT2DTOMiddleware, eliminarEmpleadoController);
    router.delete("/eliminarEstadoHabitat", deleteT1DTOMiddleware, eliminarEstadoHabitatController);
    router.delete("/eliminarEstadoSalud", deleteT1DTOMiddleware, eliminarEstadoSaludController);
    router.delete("/eliminarEvaluacionDesempeno", deleteT1DTOMiddleware, eliminarEvaluacionDesempenoController);
    router.delete("/eliminarEvento", deleteT1DTOMiddleware, eliminarEventoController);
    router.delete("/eliminarFacturasEntrada", deleteT1DTOMiddleware, eliminarFacturaEntradaController);
    router.delete("/eliminarHabitat", deleteT1DTOMiddleware, eliminarHabitatController);
    router.delete("/eliminarHistorialesSalud", deleteT1DTOMiddleware, eliminarHistorialesSaludController);
    router.delete("/eliminarHistorialEvento", deleteT1DTOMiddleware, eliminarHistorialesSaludController);
    router.delete("/eliminarHorarAlMant", deleteT1DTOMiddleware, eliminarHorarioAlimentacionMantenimientoController);
    router.delete("/eliminarHorarioTrabajo", deleteT1DTOMiddleware, eliminarHorarioTrabajoController);
    router.delete("/eliminarListaBoletas", deleteT1DTOMiddleware, eliminarListaBoletasController);
    router.delete("/eliminarPlanificacionEventos", deleteT1DTOMiddleware, eliminarPlanificacionEventosController);
    router.delete("/eliminarPromociones", deleteT1DTOMiddleware, eliminarPromocionesController);
    router.delete("/eliminarPuesto", deleteT1DTOMiddleware, eliminarPuestoController);
    router.delete("/eliminarSeguimientoEmpleado", deleteT1DTOMiddleware, eliminarSeguimientoEmpleadoController);
    router.delete("/eliminarTipoBoleta", deleteT1DTOMiddleware, eliminarTipoBoletasController);
    router.delete("/eliminarZonas", deleteT1DTOMiddleware, eliminarZonasController);
    return router;
};

export { deleteRoute };
