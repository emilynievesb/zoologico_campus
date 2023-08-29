import { Router } from "express";
import { agregarAnimalController, agregarEstadoSaludController, agregarEventoController, agregarTipoAlimentacionController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", agregarTipoAlimentacionController);
  router.post("/agregarAnimal", agregarAnimalController);
  router.post("/agregarEstadoSalud", agregarEstadoSaludController);
  router.post("/agregarEventos", agregarEventoController);

  return router;
};

export { postInitRoute };
