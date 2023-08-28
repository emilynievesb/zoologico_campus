import { Router } from "express";
import { agregarTipoAlimentacionController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", agregarTipoAlimentacionController);
  return router;
};

export { postInitRoute };
