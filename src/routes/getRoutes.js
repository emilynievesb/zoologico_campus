import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController, obtenerEmpleadosController, obtenerEstadoHabitatController, obtenerEstadosSaludController, obtenerEvaluacionesDesempenoController, obtenerEventosController, obtenerFavturasEntradaController, obtenerHabitatsController, obtenerHistorialesEventoController, obtenerHistorialesSaludController, obtenerHorariosAlimentacionMantenimientoController, obtenerHorariosTrabajoController, obtenerListasBoletasController, obtenerPlanificacionesEventosController, obtenerPromocionesController, obtenerPuestosController, obtenerSeguimientosEmpleadoController, obtenerTiposBoletasController, obtenerZonasController } from "../controllers/getControllers.js";
import { getT1DTOMiddleware, getT2DTOMiddleware } from "../middlewares/middlewaresDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", getT1DTOMiddleware, obtenerAlimentracionController);
  router.get("/ontenerAnimales", getT1DTOMiddleware, obtenerAnimalesController);
  router.get("/obtenerBoletas", getT1DTOMiddleware, obtenerBoletasController);
  router.get("/obtenerCapacitaciones", getT1DTOMiddleware, obtenerCapacitacionesController);
  router.get("/obtenerCitasMedicas", getT1DTOMiddleware, obtenerCitasMedicasController);
  router.get("/obtenerEmpleados", getT2DTOMiddleware, obtenerEmpleadosController);
  router.get("/obtenerEstadoHabitat", obtenerEstadoHabitatController);
  router.get("/obtenerEstadosSalud", getT1DTOMiddleware, obtenerEstadosSaludController);
  router.get("/obtenerEvaluacionesDesempeno", getT1DTOMiddleware, obtenerEvaluacionesDesempenoController);
  router.get("/obtenerEventos", getT1DTOMiddleware, obtenerEventosController);
  router.get("/obtenerFacturasEntrada", getT1DTOMiddleware, obtenerFavturasEntradaController);
  router.get("/obtenerHabitats", getT1DTOMiddleware, obtenerHabitatsController);
  router.get("/obtenerHistorialesSalud", getT1DTOMiddleware, obtenerHistorialesSaludController);
  router.get("/obtenerHistorialesEvento", getT1DTOMiddleware, obtenerHistorialesEventoController);
  router.get("/obtenerHorarAlMant", getT1DTOMiddleware, obtenerHorariosAlimentacionMantenimientoController);
  router.get("/obtenerHorariosTrabajo", getT1DTOMiddleware, obtenerHorariosTrabajoController);
  router.get("/obtenerListasBoletas", getT1DTOMiddleware, obtenerListasBoletasController);
  router.get("/obtenerPlanificacionesEventos", getT1DTOMiddleware, obtenerPlanificacionesEventosController);
  router.get("/obtenerPromociones", getT1DTOMiddleware, obtenerPromocionesController);
  router.get("/obtenerPuestos", getT1DTOMiddleware, obtenerPuestosController);
  router.get("/obtenerSeguimientoEmpleados", getT1DTOMiddleware, obtenerSeguimientosEmpleadoController);
  router.get("/obtenerTiposBoleta", getT1DTOMiddleware, obtenerTiposBoletasController);
  router.get("/obtenerZonas", getT1DTOMiddleware, obtenerZonasController);
  return router;
};

export { getInitRoute };
