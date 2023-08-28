import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController, obtenerCapacitacionesController, obtenerCitasMedicasController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  router.get("/ontenerAnimales", obtenerAnimalesController);
  router.get("/obtenerBoletas", obtenerBoletasController);
  router.get("/obtenerCapacitaciones", obtenerCapacitacionesController);
  router.get("/obtenerCitasMedicas", obtenerCitasMedicasController);
  return router;
};

export { getInitRoute };
