import { Router } from "express";
import {
  agregarAnimalController,
  agregarCapacitacionController,
  agregarEmpleadoController,
  agregarEstadoSaludController,
  agregarEventoController,
  agregarFacturaEntradaController,
  agregarHabitatController,
  agregarHistorialSaludController,
  agregarHorarioAlimentacionController,
  agregarHorarioTrabajoController,
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
  router.post("/agregarEmpleado", agregarEmpleadoController);
  router.post("/agregarEvaluacionDesempeno", agregarEmpleadoController);
  router.post("/agregarHistorialEvento", agregarEmpleadoController);
  router.post(
    "/agregarHorariosAlimentacion",
    agregarHorarioAlimentacionController
  );
  router.post("/agregarHorarioTrabajo", agregarHorarioTrabajoController);

  return router;
};

export { postInitRoute };
