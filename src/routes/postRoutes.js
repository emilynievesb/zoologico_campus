import { Router } from "express";
import {
  agregarAnimalController,
  agregarBoletaController,
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

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", agregarTipoAlimentacionController);
  router.post("/agregarAnimal", agregarAnimalController);
  router.post("/agregarBoleta", agregarBoletaController);
  router.post("/agregarCapitacion", agregarCapacitacionController);
  router.post("/agregarEstadoSalud", agregarEstadoSaludController);
  router.post("/agregarEventos", agregarEventoController);
  router.post("/agregarFacturaEntrada", agregarFacturaEntradaController);
  router.post("/agregarHabitat", agregarHabitatController);
  router.post("/agregarHistorialSalud", agregarHistorialSaludController);
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
