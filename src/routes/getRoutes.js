import { Router } from "express";
import { obtenerAlimentracionController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerTiposAlimentacion", obtenerAlimentracionController);
  return router;
};

export { getInitRoute };
