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
  actualizarTipoAlimentacionController,
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
  return router;
};

export { putInitRoute };
