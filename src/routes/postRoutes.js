import { Router } from "express";
import { agregarAnimalController, agregarEstadoSaludController, agregarTipoAlimentacionController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", agregarTipoAlimentacionController);
  router.post("/agregarAnimal", agregarAnimalController);
  router.post("/agregarEstadoSalud", agregarEstadoSaludController);

  return router;
};

export { postInitRoute };
