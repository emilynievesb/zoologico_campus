import { Router } from "express";
import { obtenerAlimentracionController, obtenerAnimalesController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  router.get("/ontenerAnimales", obtenerAnimalesController);
  return router;
};

export { getInitRoute };
