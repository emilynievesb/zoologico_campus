import { Router } from "express";
import {
  agregarAnimalController,
  agregarBoletaController,
  agregarCapacitacionController,
  agregarCitaMedicaController,
  agregarEmpleadoController,
  agregarEstadoHabitatController,
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
import { postAnimalDTOMiddleware, postCapacitacionDTOMiddleware, postEmpleadoDTOMiddleware, postEvaluacionDesempenoDTOMiddleware, postEventoDTOMiddleware, postFacturaEntradaDTOMiddleware, postHabitatDTOMiddleware, postHistorialEventosDTOMiddleware, postHistorialSaludDTOMiddleware, postHorarioAlimentacionDTOMiddleware, postHorarioTrabajoDTOMiddleware, postListaBoletasDTOMiddleware, postPlanificacionEventosDTOMiddleware, postPromocionesDTOMiddleware, postPuestosDTOMiddleware, postSeguimientoEmpleadoDTOMiddleware, postTipoAlimentacionDTOMiddleware, postTiposBoletasDTOMiddleware, postZonasDTOMiddleware, postestadoSaludDTOMiddleware } from "../middlewares/middlewaresDTO.js";
import { contentMiddlewareAlimentacion, contentMiddlewareAnimales, contentMiddlewareBoletas, contentMiddlewareCapacitaciones, contentMiddlewareCitasMedicas, contentMiddlewareEmpleados, contentMiddlewareEstadoHabitat, contentMiddlewareEstadoSalud, contentMiddlewareEvaluacionDesempeno, contentMiddlewareEventos, contentMiddlewareFacturaEntrada, contentMiddlewareHabitat, contentMiddlewareHistorialEventos, contentMiddlewareHistorialesSalud, contentMiddlewareHorariosAlimentacion, contentMiddlewareHorariosTrabajo, contentMiddlewareListaBoletas, contentMiddlewarePlanificacionEventos, contentMiddlewarePromociones, contentMiddlewarePuestos, contentMiddlewareSeguimientoEmpleados, contentMiddlewareTipoBoleta, contentMiddlewareZonas } from "../middlewares/middlewareContent.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarTipoAlimentacion", contentMiddlewareAlimentacion, postTipoAlimentacionDTOMiddleware, agregarTipoAlimentacionController);
  router.post("/agregarAnimal", contentMiddlewareAnimales, postAnimalDTOMiddleware, agregarAnimalController);
  router.post("/agregarBoletas", contentMiddlewareBoletas, agregarBoletaController);
  router.post("/agregarCapitacion", contentMiddlewareCapacitaciones, postCapacitacionDTOMiddleware, agregarCapacitacionController);
  router.post("/agregarCitaMedica", contentMiddlewareCitasMedicas, agregarCitaMedicaController);
  router.post("/agregarEmpleado", contentMiddlewareEmpleados, postEmpleadoDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarEstadoHabitat", contentMiddlewareEstadoHabitat, agregarEstadoHabitatController);
  router.post("/agregarEstadoSalud", contentMiddlewareEstadoSalud, postestadoSaludDTOMiddleware, agregarEstadoSaludController);
  router.post("/agregarEvaluacionDesempeno", contentMiddlewareEvaluacionDesempeno, postEvaluacionDesempenoDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarEventos", contentMiddlewareEventos, postEventoDTOMiddleware, agregarEventoController);
  router.post("/agregarFacturaEntrada", contentMiddlewareFacturaEntrada, postFacturaEntradaDTOMiddleware, agregarFacturaEntradaController);
  router.post("/agregarHabitat", contentMiddlewareHabitat, postHabitatDTOMiddleware, agregarHabitatController);
  router.post("/agregarHistorialSalud", contentMiddlewareHistorialesSalud, postHistorialSaludDTOMiddleware, agregarHistorialSaludController);
  router.post("/agregarHistorialEvento", contentMiddlewareHistorialEventos, postHistorialEventosDTOMiddleware, agregarEmpleadoController);
  router.post("/agregarHorariosAlimentacion", contentMiddlewareHorariosAlimentacion, postHorarioAlimentacionDTOMiddleware, agregarHorarioAlimentacionController);
  router.post("/agregarHorarioTrabajo", contentMiddlewareHorariosTrabajo, postHorarioTrabajoDTOMiddleware, agregarHorarioTrabajoController);
  router.post("/agregarListaBoletas", contentMiddlewareListaBoletas, postListaBoletasDTOMiddleware, agregarListaBoletasController);
  router.post("/agregarPlanificacionEvento", contentMiddlewarePlanificacionEventos, postPlanificacionEventosDTOMiddleware, agregarPlanificacionEventosController);
  router.post("/agregarPromocion", contentMiddlewarePromociones, postPromocionesDTOMiddleware, agregarPromocionesController);
  router.post("/agregarPuesto", contentMiddlewarePuestos, postPuestosDTOMiddleware, agregarPuestoController);
  router.post("/agregarSeguimientoEmpleado", contentMiddlewareSeguimientoEmpleados, postSeguimientoEmpleadoDTOMiddleware, agregarSeguimientoEmpleadoController);
  router.post("/agregarTipoBoleta", contentMiddlewareTipoBoleta, postTiposBoletasDTOMiddleware, agregarTipoBoletaController);
  router.post("/agregarZona", contentMiddlewareZonas, postZonasDTOMiddleware, agregarZonaController);
  return router;
};

export { postInitRoute };
