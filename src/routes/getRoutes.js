import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController, obtenerEmpleadosController, obtenerEstadoHabitatController, obtenerEstadosSaludController, obtenerEvaluacionesDesempenoController, obtenerEventosController, obtenerFavturasEntradaController, obtenerHabitatsController, obtenerHistorialesEventoController, obtenerHistorialesSaludController, obtenerHorariosAlimentacionMantenimientoController, obtenerHorariosTrabajoController, obtenerListasBoletasController, obtenerPlanificacionesEventosController, obtenerPromocionesController, obtenerPuestosController, obtenerSeguimientosEmpleadoController, obtenerTiposBoletasController, obtenerZonasController } from "../controllers/getControllers.js";
import { getT1DTOMiddleware, getT2DTOMiddleware } from "../middlewares/middlewaresDTO.js";
import { contentMiddlewareAlimentacion, contentMiddlewareAnimales, contentMiddlewareBoletas, contentMiddlewareCapacitaciones, contentMiddlewareCitasMedicas, contentMiddlewareEmpleados, contentMiddlewareEstadoHabitat, contentMiddlewareEstadoSalud, contentMiddlewareEvaluacionDesempeno, contentMiddlewareEventos, contentMiddlewareFacturaEntrada, contentMiddlewareHabitat, contentMiddlewareHistorialEventos, contentMiddlewareHistorialesSalud, contentMiddlewareHorariosAlimentacion, contentMiddlewareHorariosTrabajo, contentMiddlewareListaBoletas, contentMiddlewarePlanificacionEventos, contentMiddlewarePromociones, contentMiddlewarePuestos, contentMiddlewareSeguimientoEmpleados, contentMiddlewareTipoBoleta, contentMiddlewareZonas } from "../middlewares/middlewareContent.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", contentMiddlewareAlimentacion, getT1DTOMiddleware, obtenerAlimentracionController);
  router.get("/obtenerAnimales", contentMiddlewareAnimales, getT1DTOMiddleware, obtenerAnimalesController);
  router.get("/obtenerBoletas", contentMiddlewareBoletas, getT1DTOMiddleware, obtenerBoletasController);
  router.get("/obtenerCapacitaciones", contentMiddlewareCapacitaciones, getT1DTOMiddleware, obtenerCapacitacionesController);
  router.get("/obtenerCitasMedicas", contentMiddlewareCitasMedicas, getT1DTOMiddleware, obtenerCitasMedicasController);
  router.get("/obtenerEmpleados", contentMiddlewareEmpleados, getT2DTOMiddleware, obtenerEmpleadosController);
  router.get("/obtenerEstadoHabitat", contentMiddlewareEstadoHabitat, obtenerEstadoHabitatController);
  router.get("/obtenerEstadosSalud", contentMiddlewareEstadoSalud, getT1DTOMiddleware, obtenerEstadosSaludController);
  router.get("/obtenerEvaluacionesDesempeno", contentMiddlewareEvaluacionDesempeno, getT1DTOMiddleware, obtenerEvaluacionesDesempenoController);
  router.get("/obtenerEventos", contentMiddlewareEventos, getT1DTOMiddleware, obtenerEventosController);
  router.get("/obtenerFacturasEntrada", contentMiddlewareFacturaEntrada, getT1DTOMiddleware, obtenerFavturasEntradaController);
  router.get("/obtenerHabitats", contentMiddlewareHabitat, getT1DTOMiddleware, obtenerHabitatsController);
  router.get("/obtenerHistorialesSalud", contentMiddlewareHistorialesSalud, getT1DTOMiddleware, obtenerHistorialesSaludController);
  router.get("/obtenerHistorialesEvento", contentMiddlewareHistorialEventos, getT1DTOMiddleware, obtenerHistorialesEventoController);
  router.get("/obtenerHorarAlMant", contentMiddlewareHorariosAlimentacion, getT1DTOMiddleware, obtenerHorariosAlimentacionMantenimientoController);
  router.get("/obtenerHorariosTrabajo", contentMiddlewareHorariosTrabajo, getT1DTOMiddleware, obtenerHorariosTrabajoController);
  router.get("/obtenerListasBoletas", contentMiddlewareListaBoletas, getT1DTOMiddleware, obtenerListasBoletasController);
  router.get("/obtenerPlanificacionesEventos", contentMiddlewarePlanificacionEventos, getT1DTOMiddleware, obtenerPlanificacionesEventosController);
  router.get("/obtenerPromociones", contentMiddlewarePromociones, getT1DTOMiddleware, obtenerPromocionesController);
  router.get("/obtenerPuestos", contentMiddlewarePuestos, getT1DTOMiddleware, obtenerPuestosController);
  router.get("/obtenerSeguimientoEmpleados", contentMiddlewareSeguimientoEmpleados, getT1DTOMiddleware, obtenerSeguimientosEmpleadoController);
  router.get("/obtenerTiposBoleta", contentMiddlewareTipoBoleta, getT1DTOMiddleware, obtenerTiposBoletasController);
  router.get("/obtenerZonas", contentMiddlewareZonas, getT1DTOMiddleware, obtenerZonasController);
  return router;
};

export { getInitRoute };
