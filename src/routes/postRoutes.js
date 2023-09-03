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
import { postAnimalDTOMiddleware, postCapacitacionDTOMiddleware, postEmpleadoDTOMiddleware, postEvaluacionDesempenoDTOMiddleware, postEventoDTOMiddleware, postFacturaEntradaDTOMiddleware, postHabitatDTOMiddleware, postHistorialEventosDTOMiddleware, postHistorialSaludDTOMiddleware, postHorarioAlimentacionDTOMiddleware, postTipoAlimentacionDTOMiddleware, postestadoSaludDTOMiddleware } from "../middlewares/middlewaresDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", postTipoAlimentacionDTOMiddleware, agregarTipoAlimentacionController);
  router.post("/agregarAnimal", postAnimalDTOMiddleware, agregarAnimalController);
  router.post("/agregarEstadoSalud", postestadoSaludDTOMiddleware, agregarEstadoSaludController);
  router.post("/agregarEventos", postEventoDTOMiddleware, agregarEventoController);
  router.post("/agregarFacturaEntrada", postFacturaEntradaDTOMiddleware, agregarFacturaEntradaController);
  router.post("/agregarHabitat", postHabitatDTOMiddleware, agregarHabitatController);
  router.post("/agregarHistorialSalud", postHistorialSaludDTOMiddleware, agregarHistorialSaludController);
  router.post("/agregarCapitacion", postCapacitacionDTOMiddleware, agregarCapacitacionController);
  router.post("/agregarEmpleado", postEmpleadoDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarEvaluacionDesempeno", postEvaluacionDesempenoDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarHistorialEvento", postHistorialEventosDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarHorariosAlimentacion", postHorarioAlimentacionDTOMiddleware, agregarHorarioAlimentacionController);
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
