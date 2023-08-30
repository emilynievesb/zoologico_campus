import { Router } from "express";
import {
  actualizarAnimalController,
  actualizarBoletaController,
  actualizarCapacitacionController,
  actualizarCitaMedicaController,
  actualizarEmpleadoController,
  actualizarEstadoHabitatController,
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

const putInitRoute = () => {
  const router = Router();
  router.put(
    "/actualizarTipoAlimentacion",
    actualizarTipoAlimentacionController
  );
  router.put("/actualizarAnimal", actualizarAnimalController);
  router.put("/actualizarBoleta", actualizarBoletaController);
  router.put("/actualizarCapacitacion", actualizarCapacitacionController);
  router.put("/actualizarCitaMedica", actualizarCitaMedicaController);
  router.put("/actualizarEmpleado", actualizarEmpleadoController);
  router.put("/actualizarEstadoHabitat", actualizarEstadoHabitatController);
  router.put("/actualizarEstadoSalud", actualizarEstadoSaludController);
  router.put("/actualizarEvaluacion", actualizarEvaluacionDesempenoController);
  router.put("/actualizarFactura", actualizarFacturaEntradaController);
  router.put("/actualizarHabitat", actualizarHabitatController);
  router.put("/actualizarHistorialSalud", actualizarHistorialSaludController);
  router.put("/actualizarHistorialEvento", actualizarHistorialEventoController);
  router.put(
    "/actualizarHorarioAlimentacion",
    actualizarHorarioAlimentacionController
  );
  router.put("/actualizarHorarioTrabajo", actualizarHorarioTrabajoController);
  router.put("/actualizarListaBoletas", actualizarListaBoletasController);
  router.put(
    "/actualizarPlanificacionEventos",
    actualizarPlanificacionEventosController
  );
  router.put("/actualizarPromociones", actualizarPromocionesController);
  router.put("/actualizarPuesto", actualizarPuestoController);
  router.put(
    "/actualizarSeguimientoEmpleado",
    actualizarSeguimientoEmpleadoController
  );
  router.put("/actualizarTipoBoleta", actualizarTipoBoletaController);
  router.put("/actualizarZona", actualizarZonaController);

  return router;
};

export { putInitRoute };
