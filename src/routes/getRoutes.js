import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController, obtenerEmpleadosController, obtenerEstadoHabitatController, obtenerEstadosSaludController, obtenerEvaluacionesDesempenoController, obtenerEventosController, obtenerFavturasEntradaController, obtenerHabitatsController, obtenerHistorialesEventoController, obtenerHistorialesSaludController, obtenerHorariosAlimentacionMantenimientoController, obtenerHorariosTrabajoController, obtenerListasBoletasController, obtenerPlanificacionesEventosController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  router.get("/ontenerAnimales", obtenerAnimalesController);
  router.get("/obtenerBoletas", obtenerBoletasController);
  router.get("/obtenerCapacitaciones", obtenerCapacitacionesController);
  router.get("/obtenerCitasMedicas", obtenerCitasMedicasController);
  router.get("/obtenerEmpleados", obtenerEmpleadosController);
  router.get("/obtenerEstadoHabitat", obtenerEstadoHabitatController);
  router.get("/obtenerEstadosSalud", obtenerEstadosSaludController);
  router.get("/obtenerEvaluacionesDesempeno", obtenerEvaluacionesDesempenoController);
  router.get("/obtenerEventos", obtenerEventosController);
  router.get("/obtenerFacturasEntrada", obtenerFavturasEntradaController);
  router.get("/obtenerHabitats", obtenerHabitatsController);
  router.get("/obtenerHistorialesSalud", obtenerHistorialesSaludController);
  router.get("/obtenerHistorialesEvento", obtenerHistorialesEventoController);
  router.get("/obtenerHorarAlMant", obtenerHorariosAlimentacionMantenimientoController);
  router.get("/obtenerHorariosTrabajo", obtenerHorariosTrabajoController);
  router.get("/obtenerListasBoletas", obtenerListasBoletasController);
  router.get("/obtenerPlanificacionesEventos", obtenerPlanificacionesEventosController);
  return router;
};

export { getInitRoute };
