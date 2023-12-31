import { Router } from "express";
import {
  eliminarAnimalController,
  eliminarBoletasController,
  eliminarCapacitacioncesControler,
  eliminarCitaMedicaController,
  eliminarEmpleadoController,
  eliminarEstadoHabitatController,
  eliminarEstadoSaludController,
  eliminarEvaluacionDesempenoController,
  eliminarEventoController,
  eliminarFacturaEntradaController,
  eliminarHabitatController,
  eliminarHistorialesSaludController,
  eliminarHorarioAlimentacionMantenimientoController,
  eliminarHorarioTrabajoController,
  eliminarListaBoletasController,
  eliminarPlanificacionEventosController,
  eliminarPromocionesController,
  eliminarPuestoController,
  eliminarSeguimientoEmpleadoController,
  eliminarTipoAlimentacionController,
  eliminarTipoBoletasController,
  eliminarZonasController,
} from "../controllers/deleteController.js";
import {
  deleteT1DTOMiddleware,
  deleteT2DTOMiddleware,
} from "../middlewares/middlewaresDTO.js";
import {
  authorizationMiddleware,
  contentMiddlewareAlimentacion,
  contentMiddlewareAnimales,
  contentMiddlewareBoletas,
  contentMiddlewareCapacitaciones,
  contentMiddlewareCitasMedicas,
  contentMiddlewareEmpleados,
  contentMiddlewareEstadoHabitat,
  contentMiddlewareEstadoSalud,
  contentMiddlewareEvaluacionDesempeno,
  contentMiddlewareEventos,
  contentMiddlewareFacturaEntrada,
  contentMiddlewareHabitat,
  contentMiddlewareHistorialEventos,
  contentMiddlewareHistorialesSalud,
  contentMiddlewareHorariosAlimentacion,
  contentMiddlewareHorariosTrabajo,
  contentMiddlewareListaBoletas,
  contentMiddlewarePlanificacionEventos,
  contentMiddlewarePromociones,
  contentMiddlewarePuestos,
  contentMiddlewareSeguimientoEmpleados,
  contentMiddlewareTipoBoleta,
  contentMiddlewareZonas,
} from "../middlewares/middlewareContent.js";
import { rolVerificatorMiddlewareAdmin } from "../middlewares/rolVerificationMiddlewares.js";

const deleteRoute = () => {
  const router = Router();
  router.delete(
    "/eliminarTiposAlimentacion",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareAlimentacion,
    deleteT1DTOMiddleware,
    eliminarTipoAlimentacionController
  );
  router.delete(
    "/eliminarAnimal",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareAnimales,
    deleteT1DTOMiddleware,
    eliminarAnimalController
  );
  router.delete(
    "/eliminarBoleta",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareBoletas,
    deleteT1DTOMiddleware,
    eliminarBoletasController
  );
  router.delete(
    "/eliminarCapacitaciones",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareCapacitaciones,
    deleteT1DTOMiddleware,
    eliminarCapacitacioncesControler
  );
  router.delete(
    "/eliminarCitaMedica",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareCitasMedicas,
    deleteT1DTOMiddleware,
    eliminarCitaMedicaController
  );
  router.delete(
    "/eliminarEmpleado",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareEmpleados,
    deleteT2DTOMiddleware,
    eliminarEmpleadoController
  );
  router.delete(
    "/eliminarEstadoHabitat",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareEstadoHabitat,
    deleteT1DTOMiddleware,
    eliminarEstadoHabitatController
  );
  router.delete(
    "/eliminarEstadoSalud",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareEstadoSalud,
    deleteT1DTOMiddleware,
    eliminarEstadoSaludController
  );
  router.delete(
    "/eliminarEvaluacionDesempeno",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareEvaluacionDesempeno,
    deleteT1DTOMiddleware,
    eliminarEvaluacionDesempenoController
  );
  router.delete(
    "/eliminarEvento",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareEventos,
    deleteT1DTOMiddleware,
    eliminarEventoController
  );
  router.delete(
    "/eliminarFacturasEntrada",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareFacturaEntrada,
    deleteT1DTOMiddleware,
    eliminarFacturaEntradaController
  );
  router.delete(
    "/eliminarHabitat",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareHabitat,
    deleteT1DTOMiddleware,
    eliminarHabitatController
  );
  router.delete(
    "/eliminarHistorialesSalud",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareHistorialesSalud,
    deleteT1DTOMiddleware,
    eliminarHistorialesSaludController
  );
  router.delete(
    "/eliminarHistorialEvento",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareHistorialEventos,
    deleteT1DTOMiddleware,
    eliminarHistorialesSaludController
  );
  router.delete(
    "/eliminarHorarAlMant",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareHorariosAlimentacion,
    deleteT1DTOMiddleware,
    eliminarHorarioAlimentacionMantenimientoController
  );
  router.delete(
    "/eliminarHorarioTrabajo",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareHorariosTrabajo,
    deleteT1DTOMiddleware,
    eliminarHorarioTrabajoController
  );
  router.delete(
    "/eliminarListaBoletas",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareListaBoletas,
    deleteT1DTOMiddleware,
    eliminarListaBoletasController
  );
  router.delete(
    "/eliminarPlanificacionEventos",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewarePlanificacionEventos,
    deleteT1DTOMiddleware,
    eliminarPlanificacionEventosController
  );
  router.delete(
    "/eliminarPromociones",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewarePromociones,
    deleteT1DTOMiddleware,
    eliminarPromocionesController
  );
  router.delete(
    "/eliminarPuesto",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewarePuestos,
    contentMiddlewarePuestos,
    deleteT1DTOMiddleware,
    eliminarPuestoController
  );
  router.delete(
    "/eliminarSeguimientoEmpleado",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareSeguimientoEmpleados,
    deleteT1DTOMiddleware,
    eliminarSeguimientoEmpleadoController
  );
  router.delete(
    "/eliminarTipoBoleta",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareTipoBoleta,
    deleteT1DTOMiddleware,
    eliminarTipoBoletasController
  );
  router.delete(
    "/eliminarZonas",
    authorizationMiddleware,
    rolVerificatorMiddlewareAdmin,
    contentMiddlewareZonas,
    deleteT1DTOMiddleware,
    eliminarZonasController
  );
  return router;
};

export { deleteRoute };
