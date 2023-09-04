import { Router } from "express";
import {
  obtenerAlimentracionController,
  obtenerAnimalesController,
  obtenerBoletasController,
  obtenerCapacitacionesController,
  obtenerCitasMedicasController,
  obtenerEmpleadosController,
  obtenerEstadoHabitatController,
  obtenerEstadosSaludController,
  obtenerEvaluacionesDesempenoController,
  obtenerEventosController,
  obtenerFavturasEntradaController,
  obtenerHabitatsController,
  obtenerHistorialesEventoController,
  obtenerHistorialesSaludController,
  obtenerHorariosAlimentacionMantenimientoController,
  obtenerHorariosTrabajoController,
  obtenerListasBoletasController,
  obtenerPlanificacionesEventosController,
  obtenerPromocionesController,
  obtenerPuestosController,
  obtenerSeguimientosEmpleadoController,
  obtenerTiposBoletasController,
  obtenerZonasController,
} from "../controllers/getControllers.js";
import {
  getT1DTOMiddleware,
  getT2DTOMiddleware,
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
import { rolVerificatorMiddlewareJefePersonal, rolVerificatorMiddlewareMedico, rolVerificatorMiddlewareStaff, rolVerificatorMiddlewareTaquillero } from "../middlewares/rolVerificationMiddlewares.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/obtenerTiposAlimentacion",
    authorizationMiddleware,
    rolVerificatorMiddlewareMedico,
    contentMiddlewareAlimentacion,
    getT1DTOMiddleware,
    obtenerAlimentracionController
  );
  router.get(
    "/obtenerAnimales",
    authorizationMiddleware,
    rolVerificatorMiddlewareMedico,
    contentMiddlewareAnimales,
    getT1DTOMiddleware,
    obtenerAnimalesController
  );
  router.get(
    "/obtenerBoletas",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareBoletas,
    getT1DTOMiddleware,
    obtenerBoletasController
  );
  router.get(
    "/obtenerCapacitaciones",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewareCapacitaciones,
    getT1DTOMiddleware,
    obtenerCapacitacionesController
  );
  router.get(
    "/obtenerCitasMedicas",
    authorizationMiddleware,
    rolVerificatorMiddlewareMedico,
    contentMiddlewareCitasMedicas,
    getT1DTOMiddleware,
    obtenerCitasMedicasController
  );
  router.get(
    "/obtenerEmpleados",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewareEmpleados,
    getT2DTOMiddleware,
    obtenerEmpleadosController
  );
  router.get(
    "/obtenerEstadoHabitat",
    authorizationMiddleware,
    rolVerificatorMiddlewareStaff,
    contentMiddlewareEstadoHabitat,
    obtenerEstadoHabitatController
  );
  router.get(
    "/obtenerEstadosSalud",
    authorizationMiddleware,
    rolVerificatorMiddlewareMedico,
    contentMiddlewareEstadoSalud,
    getT1DTOMiddleware,
    obtenerEstadosSaludController
  );
  router.get(
    "/obtenerEvaluacionesDesempeno",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewareEvaluacionDesempeno,
    getT1DTOMiddleware,
    obtenerEvaluacionesDesempenoController
  );
  router.get(
    "/obtenerEventos",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareEventos,
    getT1DTOMiddleware,
    obtenerEventosController
  );
  router.get(
    "/obtenerFacturasEntrada",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareFacturaEntrada,
    getT1DTOMiddleware,
    obtenerFavturasEntradaController
  );
  router.get(
    "/obtenerHabitats",
    authorizationMiddleware,
    rolVerificatorMiddlewareStaff,
    contentMiddlewareHabitat,
    getT1DTOMiddleware,
    obtenerHabitatsController
  );
  router.get(
    "/obtenerHistorialesSalud",
    authorizationMiddleware,
    rolVerificatorMiddlewareMedico,
    contentMiddlewareHistorialesSalud,
    getT1DTOMiddleware,
    obtenerHistorialesSaludController
  );
  router.get(
    "/obtenerHistorialesEvento",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareHistorialEventos,
    getT1DTOMiddleware,
    obtenerHistorialesEventoController
  );
  router.get(
    "/obtenerHorarAlMant",
    authorizationMiddleware,
    rolVerificatorMiddlewareStaff,
    contentMiddlewareHorariosAlimentacion,
    getT1DTOMiddleware,
    obtenerHorariosAlimentacionMantenimientoController
  );
  router.get(
    "/obtenerHorariosTrabajo",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewareHorariosTrabajo,
    getT1DTOMiddleware,
    obtenerHorariosTrabajoController
  );
  router.get(
    "/obtenerListasBoletas",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareListaBoletas,
    getT1DTOMiddleware,
    obtenerListasBoletasController
  );
  router.get(
    "/obtenerPlanificacionesEventos",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewarePlanificacionEventos,
    getT1DTOMiddleware,
    obtenerPlanificacionesEventosController
  );
  router.get(
    "/obtenerPromociones",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewarePromociones,
    getT1DTOMiddleware,
    obtenerPromocionesController
  );
  router.get(
    "/obtenerPuestos",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewarePuestos,
    getT1DTOMiddleware,
    obtenerPuestosController
  );
  router.get(
    "/obtenerSeguimientoEmpleados",
    authorizationMiddleware,
    rolVerificatorMiddlewareJefePersonal,
    contentMiddlewareSeguimientoEmpleados,
    getT1DTOMiddleware,
    obtenerSeguimientosEmpleadoController
  );
  router.get(
    "/obtenerTiposBoleta",
    authorizationMiddleware,
    rolVerificatorMiddlewareTaquillero,
    contentMiddlewareTipoBoleta,
    getT1DTOMiddleware,
    obtenerTiposBoletasController
  );
  router.get(
    "/obtenerZonas",
    authorizationMiddleware,
    rolVerificatorMiddlewareStaff,
    contentMiddlewareZonas,
    getT1DTOMiddleware,
    obtenerZonasController
  );
  return router;
};

export { getInitRoute };
