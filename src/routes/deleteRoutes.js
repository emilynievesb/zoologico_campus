import { Router } from "express";
import { eliminarAnimalController, eliminarBoletasController, eliminarCapacitacioncesControler, eliminarCitaMedicaController, eliminarEmpleadoController, eliminarEstadoHabitatController, eliminarEstadoSaludController, eliminarEvaluacionDesempenoController, eliminarEventoController, eliminarFacturaEntradaController, eliminarHabitatController, eliminarHistorialesSaludController, eliminarHorarioAlimentacionMantenimientoController, eliminarHorarioTrabajoController, eliminarListaBoletasController, eliminarPlanificacionEventosController, eliminarPromocionesController, eliminarPuestoController, eliminarSeguimientoEmpleadoController, eliminarTipoAlimentacionController, eliminarTipoBoletasController, eliminarZonasController } from "../controllers/deleteController.js";
import { deleteT1DTOMiddleware, deleteT2DTOMiddleware } from "../middlewares/middlewaresDTO.js";
import { contentMiddlewareAlimentacion, contentMiddlewareAnimales, contentMiddlewareBoletas, contentMiddlewareCapacitaciones, contentMiddlewareCitasMedicas, contentMiddlewareEmpleados, contentMiddlewareEstadoHabitat, contentMiddlewareEstadoSalud, contentMiddlewareEvaluacionDesempeno, contentMiddlewareEventos, contentMiddlewareFacturaEntrada, contentMiddlewareHabitat, contentMiddlewareHistorialEventos, contentMiddlewareHistorialesSalud, contentMiddlewareHorariosAlimentacion, contentMiddlewareHorariosTrabajo, contentMiddlewareListaBoletas, contentMiddlewarePlanificacionEventos, contentMiddlewarePromociones, contentMiddlewarePuestos, contentMiddlewareSeguimientoEmpleados, contentMiddlewareTipoBoleta, contentMiddlewareZonas } from "../middlewares/middlewareContent.js";

const deleteRoute = () => {
    const router = Router();
    router.delete("/eliminarTiposAlimentacion", contentMiddlewareAlimentacion, deleteT1DTOMiddleware, eliminarTipoAlimentacionController);
    router.delete("/eliminarAnimal", contentMiddlewareAnimales, deleteT1DTOMiddleware, eliminarAnimalController);
    router.delete("/eliminarBoleta", contentMiddlewareBoletas, deleteT1DTOMiddleware, eliminarBoletasController);
    router.delete("/eliminarCapacitaciones", contentMiddlewareCapacitaciones, deleteT1DTOMiddleware, eliminarCapacitacioncesControler);
    router.delete("/eliminarCitaMedica", contentMiddlewareCitasMedicas, deleteT1DTOMiddleware, eliminarCitaMedicaController);
    router.delete("/eliminarEmpleado", contentMiddlewareEmpleados, deleteT2DTOMiddleware, eliminarEmpleadoController);
    router.delete("/eliminarEstadoHabitat", contentMiddlewareEstadoHabitat, deleteT1DTOMiddleware, eliminarEstadoHabitatController);
    router.delete("/eliminarEstadoSalud", contentMiddlewareEstadoSalud, deleteT1DTOMiddleware, eliminarEstadoSaludController);
    router.delete("/eliminarEvaluacionDesempeno", contentMiddlewareEvaluacionDesempeno, deleteT1DTOMiddleware, eliminarEvaluacionDesempenoController);
    router.delete("/eliminarEvento", contentMiddlewareEventos, deleteT1DTOMiddleware, eliminarEventoController);
    router.delete("/eliminarFacturasEntrada", contentMiddlewareFacturaEntrada, deleteT1DTOMiddleware, eliminarFacturaEntradaController);
    router.delete("/eliminarHabitat", contentMiddlewareHabitat, deleteT1DTOMiddleware, eliminarHabitatController);
    router.delete("/eliminarHistorialesSalud", contentMiddlewareHistorialesSalud, deleteT1DTOMiddleware, eliminarHistorialesSaludController);
    router.delete("/eliminarHistorialEvento", contentMiddlewareHistorialEventos, deleteT1DTOMiddleware, eliminarHistorialesSaludController);
    router.delete("/eliminarHorarAlMant", contentMiddlewareHorariosAlimentacion, deleteT1DTOMiddleware, eliminarHorarioAlimentacionMantenimientoController);
    router.delete("/eliminarHorarioTrabajo", contentMiddlewareHorariosTrabajo, deleteT1DTOMiddleware, eliminarHorarioTrabajoController);
    router.delete("/eliminarListaBoletas", contentMiddlewareListaBoletas, deleteT1DTOMiddleware, eliminarListaBoletasController);
    router.delete("/eliminarPlanificacionEventos", contentMiddlewarePlanificacionEventos, deleteT1DTOMiddleware, eliminarPlanificacionEventosController);
    router.delete("/eliminarPromociones", contentMiddlewarePromociones, deleteT1DTOMiddleware, eliminarPromocionesController);
    router.delete("/eliminarPuesto", contentMiddlewarePuestos, contentMiddlewarePuestos, deleteT1DTOMiddleware, eliminarPuestoController);
    router.delete("/eliminarSeguimientoEmpleado", contentMiddlewareSeguimientoEmpleados, deleteT1DTOMiddleware, eliminarSeguimientoEmpleadoController);
    router.delete("/eliminarTipoBoleta", contentMiddlewareTipoBoleta, deleteT1DTOMiddleware, eliminarTipoBoletasController);
    router.delete("/eliminarZonas", contentMiddlewareZonas, deleteT1DTOMiddleware, eliminarZonasController);
    return router;
};

export { deleteRoute };
