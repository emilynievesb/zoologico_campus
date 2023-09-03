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
  actualizarEventoController,
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
import { postEmpleadoDTOMiddleware, putAnimalDTOMiddleware, putCapacitacionDTOMiddleware, putEvaluacionDesempenoDTOMiddleware, putFacturaEntradaDTOMiddleware, putHabitatDTOMiddleware, putHistorialEventosDTOMiddleware, putHistorialSaludDTOMiddleware, putHorarioAlimentacionDTOMiddleware, putHorarioTrabajoDTOMiddleware, putListaBoletasDTOMiddleware, putPlanificacionEventosDTOMiddleware, putPromocionesDTOMiddleware, putPuestosDTOMiddleware, putSeguimientoEmpleadoDTOMiddleware, putTipoAlimentacionDTOMiddleware, putTiposBoletasDTOMiddleware, putZonasDTOMiddleware, putestadoSaludDTOMiddleware } from "../middlewares/middlewaresDTO.js";
import { contentMiddlewareAlimentacion, contentMiddlewareAnimales, contentMiddlewareBoletas, contentMiddlewareCapacitaciones, contentMiddlewareCitasMedicas, contentMiddlewareEmpleados, contentMiddlewareEstadoHabitat, contentMiddlewareEstadoSalud, contentMiddlewareEvaluacionDesempeno, contentMiddlewareEventos, contentMiddlewareFacturaEntrada, contentMiddlewareHabitat, contentMiddlewareHistorialEventos, contentMiddlewareHistorialesSalud, contentMiddlewareHorariosAlimentacion, contentMiddlewareHorariosTrabajo, contentMiddlewareListaBoletas, contentMiddlewarePlanificacionEventos, contentMiddlewarePromociones, contentMiddlewarePuestos, contentMiddlewareSeguimientoEmpleados, contentMiddlewareTipoBoleta, contentMiddlewareZonas } from "../middlewares/middlewareContent.js";

const putInitRoute = () => {
  const router = Router();
  router.put("/actualizarTipoAlimentacion", contentMiddlewareAlimentacion, putTipoAlimentacionDTOMiddleware, actualizarTipoAlimentacionController);
  router.put("/actualizarAnimal", contentMiddlewareAnimales, putAnimalDTOMiddleware, actualizarAnimalController);
  router.put("/actualizarBoleta", contentMiddlewareBoletas, actualizarBoletaController);
  router.put("/actualizarCapacitacion", contentMiddlewareCapacitaciones, putCapacitacionDTOMiddleware, actualizarCapacitacionController);
  router.put("/actualizarCitaMedica", contentMiddlewareCitasMedicas, actualizarCitaMedicaController);
  router.put("/actualizarEmpleado", contentMiddlewareEmpleados, postEmpleadoDTOMiddleware, actualizarEmpleadoController);
  router.put("/actualizarEstadoHabitat", contentMiddlewareEstadoHabitat, actualizarEstadoHabitatController);
  router.put("/actualizarEstadoSalud", contentMiddlewareEstadoSalud, putestadoSaludDTOMiddleware, actualizarEstadoSaludController);
  router.put("/actualizarEvaluacion", contentMiddlewareEvaluacionDesempeno, putEvaluacionDesempenoDTOMiddleware, actualizarEvaluacionDesempenoController);
  router.put("/actualizarEvento", contentMiddlewareEventos, actualizarEventoController);
  router.put("/actualizarFactura", contentMiddlewareFacturaEntrada, putFacturaEntradaDTOMiddleware, actualizarFacturaEntradaController);
  router.put("/actualizarHabitat", contentMiddlewareHabitat, putHabitatDTOMiddleware, actualizarHabitatController);
  router.put("/actualizarHistorialSalud", contentMiddlewareHistorialesSalud, putHistorialSaludDTOMiddleware, actualizarHistorialSaludController);
  router.put("/actualizarHistorialEvento", contentMiddlewareHistorialEventos, putHistorialEventosDTOMiddleware, actualizarHistorialEventoController);
  router.put("/actualizarHorarioAlimentacion", contentMiddlewareHorariosAlimentacion, putHorarioAlimentacionDTOMiddleware, actualizarHorarioAlimentacionController);
  router.put("/actualizarHorarioTrabajo", contentMiddlewareHorariosTrabajo, putHorarioTrabajoDTOMiddleware, actualizarHorarioTrabajoController);
  router.put("/actualizarListaBoletas", contentMiddlewareListaBoletas, putListaBoletasDTOMiddleware, actualizarListaBoletasController);
  router.put("/actualizarPlanificacionEventos", contentMiddlewarePlanificacionEventos, putPlanificacionEventosDTOMiddleware, actualizarPlanificacionEventosController);
  router.put("/actualizarPromociones", contentMiddlewarePromociones, putPromocionesDTOMiddleware, actualizarPromocionesController);
  router.put("/actualizarPuesto", contentMiddlewarePuestos, putPuestosDTOMiddleware, actualizarPuestoController);
  router.put("/actualizarSeguimientoEmpleado", contentMiddlewareSeguimientoEmpleados, putSeguimientoEmpleadoDTOMiddleware, actualizarSeguimientoEmpleadoController);
  router.put("/actualizarTipoBoleta", contentMiddlewareTipoBoleta, putTiposBoletasDTOMiddleware, actualizarTipoBoletaController);
  router.put("/actualizarZona", contentMiddlewareZonas, putZonasDTOMiddleware, actualizarZonaController);
  return router;
};

export { putInitRoute };
