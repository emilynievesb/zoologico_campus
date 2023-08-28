import { Router } from "express";
import { actualizarTipoAlimentacionController } from "../controllers/putControllers.js";

const putInitRoute = () => {
  const router = Router();
  router.put(
    "/actualizarTipoAlimentacion",
    actualizarTipoAlimentacionController
  );
  return router;
};

export { putInitRoute };
