import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController, obtenerEmpleadosController, obtenerEstadoHabitatController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  router.get("/ontenerAnimales", obtenerAnimalesController);
  router.get("/obtenerBoletas", obtenerBoletasController);
  router.get("/obtenerCapacitaciones", obtenerCapacitacionesController);
  router.get("/obtenerCitasMedicas", obtenerCitasMedicasController);
  router.get("/obtenerEmpleados", obtenerEmpleadosController);
  router.get("/obtenerEstadoHabitat", obtenerEstadoHabitatController);
  return router;
};

export { getInitRoute };
