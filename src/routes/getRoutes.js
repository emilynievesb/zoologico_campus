import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController, obtenerEmpleadosController, obtenerEstadoHabitatController, obtenerEstadosSaludController, obtenerEvaluacionesDesempenoController, obtenerEventosController } from "../controllers/getControllers.js";

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
  return router;
};

export { getInitRoute };
