import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController, obtenerBoletasController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  router.get("/ontenerAnimales", obtenerAnimalesController);
  router.get("/obtenerBoletas", obtenerBoletasController);
  return router;
};

export { getInitRoute };
