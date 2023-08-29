import { Router } from "express";
import {
  agregarAnimalController,
  agregarCapacitacionController,
  agregarEstadoSaludController,
  agregarEventoController,
  agregarFacturaEntradaController,
  agregarHabitatController,
  agregarHistorialSaludController,
  agregarTipoAlimentacionController,
} from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", agregarTipoAlimentacionController);
  router.post("/agregarAnimal", agregarAnimalController);
  router.post("/agregarEstadoSalud", agregarEstadoSaludController);
  router.post("/agregarEventos", agregarEventoController);
  router.post("/agregarFacturaEntrada", agregarFacturaEntradaController);
  router.post("/agregarHabitat", agregarHabitatController);
  router.post("/agregarHistorialSalud", agregarHistorialSaludController);
  router.post("/agregarCapitacion", agregarCapacitacionController);

  return router;
};

export { postInitRoute };
