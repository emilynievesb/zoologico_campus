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
  agregarListaBoletasController,
  agregarPlanificacionEventosController,
  agregarPromocionesController,
  agregarPuestoController,
  agregarSeguimientoEmpleadoController,
  agregarTipoAlimentacionController,
  agregarTipoBoletaController,
  agregarZonaController,
} from "../controllers/postControllers.js";
import { postAnimalDTOMiddleware, postTipoAlimentacionDTOMiddleware } from "../middlewares/middlewaresDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", postTipoAlimentacionDTOMiddleware, agregarTipoAlimentacionController);
  router.post("/agregarAnimal", postAnimalDTOMiddleware, agregarAnimalController);
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
  router.post("/agregarListaBoletas", agregarListaBoletasController);
  router.post(
    "/agregarPlanificacionEvento",
    agregarPlanificacionEventosController
  );
  router.post("/agregarPromocion", agregarPromocionesController);
  router.post("/agregarPuesto", agregarPuestoController);
  router.post(
    "/agregarSeguimientoEmpleado",
    agregarSeguimientoEmpleadoController
  );
  router.post("/agregarTipoBoleta", agregarTipoBoletaController);
  router.post("/agregarZona", agregarZonaController);
  return router;
};

export { postInitRoute };
