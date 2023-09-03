import { Router } from "express";
import {
  actualizarAnimalController,
  actualizarBoletaController,
  actualizarCapacitacionController,
  actualizarCitaMedicaController,
  actualizarEmpleadoController,
  actualizarEstadoSaludController,
  actualizarEvaluacionDesempenoController,
  actualizarFacturaEntradaController,
  actualizarHabitatController,
  actualizarHistorialEventoController,
  actualizarHistorialSaludController,
  actualizarHorarioAlimentacionController,
  actualizarHorarioTrabajoController,
  actualizarListaBoletasController,
  actualizarPlanificacionEventosController,
  actualizarPromocionesController,
  actualizarPuestoController,
  actualizarSeguimientoEmpleadoController,
  actualizarTipoAlimentacionController,
  actualizarTipoBoletaController,
  actualizarZonaController,
} from "../controllers/putControllers.js";
import { postEmpleadoDTOMiddleware, putAnimalDTOMiddleware, putCapacitacionDTOMiddleware, putEvaluacionDesempenoDTOMiddleware, putFacturaEntradaDTOMiddleware, putHabitatDTOMiddleware, putHistorialEventosDTOMiddleware, putHistorialSaludDTOMiddleware, putHorarioAlimentacionDTOMiddleware, putTipoAlimentacionDTOMiddleware, putestadoSaludDTOMiddleware } from "../middlewares/middlewaresDTO.js";

const putInitRoute = () => {
  const router = Router();
  router.put("/actualizarTipoAlimentacion", putTipoAlimentacionDTOMiddleware, actualizarTipoAlimentacionController);
  router.put("/actualizarAnimal", putAnimalDTOMiddleware, actualizarAnimalController);
  router.put("/actualizarBoleta", actualizarBoletaController);
  router.put("/actualizarCapacitacion", putCapacitacionDTOMiddleware, actualizarCapacitacionController);
  router.put("/actualizarCitaMedica", actualizarCitaMedicaController);
  router.put("/actualizarEmpleado", postEmpleadoDTOMiddleware, actualizarEmpleadoController);
  router.put("/actualizarEstadoSalud", putestadoSaludDTOMiddleware, actualizarEstadoSaludController);
  router.put("/actualizarEvaluacion", putEvaluacionDesempenoDTOMiddleware, actualizarEvaluacionDesempenoController);
  router.put("/actualizarFactura", putFacturaEntradaDTOMiddleware, actualizarFacturaEntradaController);
  router.put("/actualizarHabitat", putHabitatDTOMiddleware, actualizarHabitatController);
  router.put("/actualizarHistorialSalud", putHistorialSaludDTOMiddleware, actualizarHistorialSaludController);
  router.put("/actualizarHistorialEvento", putHistorialEventosDTOMiddleware, actualizarHistorialEventoController);
  router.put("/actualizarHorarioAlimentacion", putHorarioAlimentacionDTOMiddleware, actualizarHorarioAlimentacionController);
  router.put("/actualizarHorarioTrabajo", actualizarHorarioTrabajoController);
  router.put("/actualizarListaBoletas", actualizarListaBoletasController);
  router.put("/actualizarPlanificacionEventos", actualizarPlanificacionEventosController);
  router.put("/actualizarPromociones", actualizarPromocionesController);
  router.put("/actualizarPuesto", actualizarPuestoController);
  router.put("/actualizarSeguimientoEmpleado", actualizarSeguimientoEmpleadoController);
  router.put("/actualizarTipoBoleta", actualizarTipoBoletaController);
  router.put("/actualizarZona", actualizarZonaController);

  return router;
};

export { putInitRoute };
