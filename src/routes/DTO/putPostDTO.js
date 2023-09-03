import { check } from "express-validator";

//tipoAlimentacionDTO
const postTipoAlimentacionDTO = [
    check("tipo")
        .notEmpty().withMessage("El tipo es obligatorio")
        .isString().withMessage("El tipo es string")
];

const putTipoAlimentacionDTO = [
    check("id")
        .notEmpty().withMessage("El id es obligatorio")
        .isNumeric().withMessage("El id debe ser numerico"),
    check("tipo")
        .notEmpty().withMessage("El tipo es obligatorio")
        .isString().withMessage("El tipo es string")
];

//animalesDTO
const postAnimalDTO = [
    check("nombre")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre es string"),
    check("especie")
        .notEmpty().withMessage("La especie es obligatorio")
        .isNumeric().withMessage("la especie debe ser numerico"),
    check("historialSalud")
        .notEmpty().withMessage("el historialSalud es obligatorio")
        .isNumeric().withMessage("el historialSalud debe ser numerico"),
    check("alimentacion")
        .notEmpty().withMessage("La alimentacion es obligatorio")
        .isNumeric().withMessage("la alimentacion debe ser numerico"),
    check("habitat")
        .notEmpty().withMessage("el habitat es obligatorio")
        .isNumeric().withMessage("el habitat debe ser numerico"),
    check("reproduccion")
        .notEmpty().withMessage("La reproduccion es obligatorio")
        .isObject().withMessage("la reproduccion debe ser un objeto"),
    check("reproduccion.gestacion")
        .notEmpty().withMessage("La gestacion es obligatorio")
        .matches(/^\d+ días$/).withMessage("El formato de gestación debe ser 'n días'"),
    check("reproduccion.camadas_anuales")
        .notEmpty().withMessage("el numero de camadas anuales es obligatorio")
        .isInt({ min: 0 }).withMessage("El número de camadas anuales debe ser un valor entero no negativo"),
    check("reproduccion.promedio_crias")
        .notEmpty().withMessage("el promedio de crias es obligatorio")
        .isInt({ min: 0 }).withMessage("El promedio de crías debe ser un valor entero no negativo"),
];

const putAnimalDTO = [
    check("id")
        .notEmpty().withMessage("El id es obligatorio")
        .isNumeric().withMessage("El id debe ser numerico"),
    check("nombre")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre es string"),
    check("especie")
        .notEmpty().withMessage("La especie es obligatorio")
        .isNumeric().withMessage("la especie debe ser numerico"),
    check("historialSalud")
        .notEmpty().withMessage("el historialSalud es obligatorio")
        .isNumeric().withMessage("el historialSalud debe ser numerico"),
    check("alimentacion")
        .notEmpty().withMessage("La alimentacion es obligatorio")
        .isNumeric().withMessage("la alimentacion debe ser numerico"),
    check("habitat")
        .notEmpty().withMessage("el habitat es obligatorio")
        .isNumeric().withMessage("el habitat debe ser numerico"),
    check("reproduccion")
        .notEmpty().withMessage("La reproduccion es obligatorio")
        .isObject().withMessage("la reproduccion debe ser un objeto"),
    check("reproduccion.gestacion")
        .notEmpty().withMessage("La gestacion es obligatorio")
        .matches(/^\d+ días$/).withMessage("El formato de gestación debe ser 'n días'"),
    check("reproduccion.camadas_anuales")
        .notEmpty().withMessage("el numero de camadas anuales es obligatorio")
        .isInt({ min: 0 }).withMessage("El número de camadas anuales debe ser un valor entero no negativo"),
    check("reproduccion.promedio_crias")
        .notEmpty().withMessage("el promedio de crias es obligatorio")
        .isInt({ min: 0 }).withMessage("El promedio de crías debe ser un valor entero no negativo"),
];

//estadoSaludDTO
const postestadoSaludDTO = [
    check("estado")
        .notEmpty().withMessage("El estado es obligatorio")
        .isString().withMessage("El estado es string")
];

const putEstadoSaludDTO = [
    check("id")
        .notEmpty().withMessage("El id es obligatorio")
        .isNumeric().withMessage("El id debe ser numerico"),
    check("estado")
        .notEmpty().withMessage("El estado es obligatorio")
        .isString().withMessage("El estado es string")
];

//eventos
const postEventoDTO = [
    check("historialId")
        .notEmpty().withMessage("El historialId es obligatorio")
        .isInt({ min: 1 }).withMessage("El historialId debe ser un número entero positivo"),
    check("empleadoId")
        .notEmpty().withMessage("El empleadoId es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El empleadoId debe ser una cadena de 10 dígitos numéricos"),
    check("fecha_evento")
        .notEmpty().withMessage("La fecha_evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha_evento debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción es obligatoria")
        .isString().withMessage("La descripción debe ser una cadena de texto"),
    check("recomendaciones")
        .notEmpty().withMessage("Las recomendaciones son obligatorias")
        .isString().withMessage("Las recomendaciones deben ser una cadena de texto"),
];

const putEventoDTO = [
    check("historialId")
        .notEmpty().withMessage("El historialId es obligatorio")
        .isInt({ min: 1 }).withMessage("El historialId debe ser un número entero positivo"),
    check("empleadoId")
        .notEmpty().withMessage("El empleadoId es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El empleadoId debe ser una cadena de 10 dígitos numéricos"),
    check("fecha_evento")
        .notEmpty().withMessage("La fecha_evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha_evento debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción es obligatoria")
        .isString().withMessage("La descripción debe ser una cadena de texto"),
    check("recomendaciones")
        .notEmpty().withMessage("Las recomendaciones son obligatorias")
        .isString().withMessage("Las recomendaciones deben ser una cadena de texto"),
];

//factura entrada
const postFacturaEntradaDTO = [
    check("fecha")
        .notEmpty().withMessage("La fecha es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("visitante")
        .notEmpty().withMessage("El documento del visitante es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El documento del visitante debe ser una cadena de 10 dígitos numéricos"),
    check("precio")
        .notEmpty().withMessage("El precio es obligatorio")
        .isNumeric().withMessage("El precio debe ser un valor numérico"),
    check("evento")
        .notEmpty().withMessage("El campo evento es obligatorio")
        .isBoolean().withMessage("El campo evento debe ser un valor booleano (true o false)"),
    check("precioDescuento")
        .notEmpty().withMessage("El precio con descuento es obligatorio")
        .isNumeric().withMessage("El precio con descuento debe ser un valor numérico"),
    check("listaBoletas")
        .notEmpty().withMessage("El ID de la lista de boletas es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la lista de boletas debe ser un número entero positivo"),
];

const putFacturaEntradaDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("fecha")
        .notEmpty().withMessage("La fecha es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("visitante")
        .notEmpty().withMessage("El documento del visitante es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El documento del visitante debe ser una cadena de 10 dígitos numéricos"),
    check("precio")
        .notEmpty().withMessage("El precio es obligatorio")
        .isNumeric().withMessage("El precio debe ser un valor numérico"),
    check("evento")
        .notEmpty().withMessage("El campo evento es obligatorio")
        .isBoolean().withMessage("El campo evento debe ser un valor booleano (true o false)"),
    check("precioDescuento")
        .notEmpty().withMessage("El precio con descuento es obligatorio")
        .isNumeric().withMessage("El precio con descuento debe ser un valor numérico"),
    check("listaBoletas")
        .notEmpty().withMessage("El ID de la lista de boletas es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la lista de boletas debe ser un número entero positivo"),
];

//habitad
const postHabitatDTO = [
    check("tipo")
        .notEmpty().withMessage("El tipo de hábitat es obligatorio")
        .isString().withMessage("El tipo de hábitat debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del hábitat es obligatoria")
        .isString().withMessage("La descripción del hábitat debe ser una cadena de texto"),
    check("idHistorial")
        .notEmpty().withMessage("El ID de historial es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de historial debe ser un número entero positivo"),
    check("idZona")
        .notEmpty().withMessage("El ID de la zona es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la zona debe ser un número entero positivo"),
];

const putHabitatDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("tipo")
        .notEmpty().withMessage("El tipo de hábitat es obligatorio")
        .isString().withMessage("El tipo de hábitat debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del hábitat es obligatoria")
        .isString().withMessage("La descripción del hábitat debe ser una cadena de texto"),
    check("idHistorial")
        .notEmpty().withMessage("El ID de historial es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de historial debe ser un número entero positivo"),
    check("idZona")
        .notEmpty().withMessage("El ID de la zona es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la zona debe ser un número entero positivo"),
];

//historialSalud
const postHistorialSaludDTO = [
    check("idEstadoSalud")
        .notEmpty().withMessage("El ID del estado de salud es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del estado de salud debe ser un número entero positivo"),
    check("fecha_apertura")
        .notEmpty().withMessage("La fecha de apertura es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de apertura debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("ultima_modificacion")
        .notEmpty().withMessage("La fecha de última modificación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de última modificación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
];

const putHistorialSaludDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("idEstadoSalud")
        .notEmpty().withMessage("El ID del estado de salud es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del estado de salud debe ser un número entero positivo"),
    check("fecha_apertura")
        .notEmpty().withMessage("La fecha de apertura es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de apertura debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("ultima_modificacion")
        .notEmpty().withMessage("La fecha de última modificación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de última modificación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
];

//capacitacion
const postCapacitacionDTO = [
    check("seguimiento")
        .notEmpty().withMessage("El ID de seguimiento es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de seguimiento debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre de la capacitación es obligatorio")
        .isString().withMessage("El nombre de la capacitación debe ser una cadena de texto"),
    check("fecha")
        .notEmpty().withMessage("La fecha de la capacitación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de la capacitación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la capacitación es obligatoria")
        .isString().withMessage("La descripción de la capacitación debe ser una cadena de texto"),
];

const putCapacitacionDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("seguimiento")
        .notEmpty().withMessage("El ID de seguimiento es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de seguimiento debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre de la capacitación es obligatorio")
        .isString().withMessage("El nombre de la capacitación debe ser una cadena de texto"),
    check("fecha")
        .notEmpty().withMessage("La fecha de la capacitación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de la capacitación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la capacitación es obligatoria")
        .isString().withMessage("La descripción de la capacitación debe ser una cadena de texto"),
];

//empleado
const postEmpleadoDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID debe ser una cadena de 10 dígitos numéricos"),
    check("nombre")
        .notEmpty().withMessage("El nombre del empleado es obligatorio")
        .isString().withMessage("El nombre del empleado debe ser una cadena de texto"),
    check("fecha_contratacion")
        .notEmpty().withMessage("La fecha de contratación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de contratación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("id_seguimiento")
        .notEmpty().withMessage("El ID de seguimiento es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de seguimiento debe ser un número entero positivo"),
    check("idPuesto")
        .notEmpty().withMessage("El ID del puesto es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del puesto debe ser un número entero positivo"),
];

//evaluacion desempeno
const postEvaluacionDesempenoDTO = [
    check("seguimiento")
        .notEmpty().withMessage("El ID de seguimiento es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de seguimiento debe ser un número entero positivo"),
    check("fecha")
        .notEmpty().withMessage("La fecha de reporte es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de reporte debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("jefe")
        .notEmpty().withMessage("El ID del empleado que realiza el reporte es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del empleado debe ser una cadena de 10 dígitos numéricos"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la evaluación de desempeño es obligatoria")
        .isString().withMessage("La descripción de la evaluación de desempeño debe ser una cadena de texto"),
];

const putEvaluacionDesempenoDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("seguimiento")
        .notEmpty().withMessage("El ID de seguimiento es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de seguimiento debe ser un número entero positivo"),
    check("fecha")
        .notEmpty().withMessage("La fecha de reporte es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de reporte debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("jefe")
        .notEmpty().withMessage("El ID del empleado que realiza el reporte es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del empleado debe ser una cadena de 10 dígitos numéricos"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la evaluación de desempeño es obligatoria")
        .isString().withMessage("La descripción de la evaluación de desempeño debe ser una cadena de texto"),
];

// historial de eventos
const postHistorialEventosDTO = [
    check("fecha_creacion")
        .notEmpty().withMessage("La fecha de creación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de creación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("ultima_modificacion")
        .notEmpty().withMessage("La fecha de última modificación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de última modificación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("idEstadohabitat")
        .notEmpty().withMessage("El ID del estado del hábitat es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del estado del hábitat debe ser un número entero positivo"),
];

const putHistorialEventosDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("fecha_creacion")
        .notEmpty().withMessage("La fecha de creación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de creación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("ultima_modificacion")
        .notEmpty().withMessage("La fecha de última modificación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de última modificación debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("idEstadohabitat")
        .notEmpty().withMessage("El ID del estado del hábitat es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del estado del hábitat debe ser un número entero positivo"),
];

//horarios de alimentacion
const postHorarioAlimentacionDTO = [
    check("habitat")
        .notEmpty().withMessage("El ID del hábitat es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del hábitat debe ser un número entero positivo"),
    check("hora")
        .notEmpty().withMessage("La hora de alimentación y mantenimiento es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora debe tener el formato 'HH:MM'"),
    check("encargado")
        .notEmpty().withMessage("El ID del encargado es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del encargado debe ser una cadena de 10 dígitos numéricos"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del trabajo realizado es obligatoria")
        .isString().withMessage("La descripción debe ser una cadena de texto"),
];

const putHorarioAlimentacionDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("habitat")
        .notEmpty().withMessage("El ID del hábitat es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del hábitat debe ser un número entero positivo"),
    check("hora")
        .notEmpty().withMessage("La hora de alimentación y mantenimiento es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora debe tener el formato 'HH:MM'"),
    check("encargado")
        .notEmpty().withMessage("El ID del encargado es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del encargado debe ser una cadena de 10 dígitos numéricos"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del trabajo realizado es obligatoria")
        .isString().withMessage("La descripción debe ser una cadena de texto"),
];

//horarios trabajo
const postHorarioTrabajoDTO = [
    check("horaInicio")
        .notEmpty().withMessage("La hora de inicio es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora de inicio debe tener el formato 'HH:MM'"),
    check("horaFin")
        .notEmpty().withMessage("La hora de fin es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora de fin debe tener el formato 'HH:MM'"),
];

const putHorarioTrabajoDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("horaInicio")
        .notEmpty().withMessage("La hora de inicio es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora de inicio debe tener el formato 'HH:MM'"),
    check("horaFin")
        .notEmpty().withMessage("La hora de fin es obligatoria")
        .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora de fin debe tener el formato 'HH:MM'"),
];

//lista boletas
const postListaBoletasDTO = [
    check("factura")
        .notEmpty().withMessage("El ID de la factura es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la factura debe ser un número entero positivo"),
];

const putListaBoletasDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("factura")
        .notEmpty().withMessage("El ID de la factura es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la factura debe ser un número entero positivo"),
];

//planificacion evento
const postPlanificacionEventosDTO = [
    check("nombre")
        .notEmpty().withMessage("El nombre del evento es obligatorio")
        .isString().withMessage("El nombre del evento debe ser una cadena de texto"),
    check("inicio")
        .notEmpty().withMessage("La fecha de inicio del evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de inicio debe tener el formato 'YYYY-MM-DD'"),
    check("fin")
        .notEmpty().withMessage("La fecha de finalización del evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de finalización debe tener el formato 'YYYY-MM-DD'"),
    check("idZona")
        .notEmpty().withMessage("El ID de la zona es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la zona debe ser un número entero positivo"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del evento es obligatoria")
        .isString().withMessage("La descripción del evento debe ser una cadena de texto"),
];

const putPlanificacionEventosDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre del evento es obligatorio")
        .isString().withMessage("El nombre del evento debe ser una cadena de texto"),
    check("inicio")
        .notEmpty().withMessage("La fecha de inicio del evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de inicio debe tener el formato 'YYYY-MM-DD'"),
    check("fin")
        .notEmpty().withMessage("La fecha de finalización del evento es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de finalización debe tener el formato 'YYYY-MM-DD'"),
    check("idZona")
        .notEmpty().withMessage("El ID de la zona es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la zona debe ser un número entero positivo"),
    check("descripcion")
        .notEmpty().withMessage("La descripción del evento es obligatoria")
        .isString().withMessage("La descripción del evento debe ser una cadena de texto"),
];

//promocion
const postPromocionesDTO = [
    check("nombre")
        .notEmpty().withMessage("El nombre de la promoción es obligatorio")
        .isString().withMessage("El nombre de la promoción debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la promoción es obligatoria")
        .isString().withMessage("La descripción de la promoción debe ser una cadena de texto"),
    check("descuento")
        .notEmpty().withMessage("El descuento es obligatorio")
        .isNumeric().withMessage("El descuento debe ser un número"),
    check("inicio")
        .notEmpty().withMessage("La fecha de inicio de la promoción es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de inicio debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("fin")
        .notEmpty().withMessage("La fecha de finalización de la promoción es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de finalización debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
];

const putPromocionesDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre de la promoción es obligatorio")
        .isString().withMessage("El nombre de la promoción debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la promoción es obligatoria")
        .isString().withMessage("La descripción de la promoción debe ser una cadena de texto"),
    check("descuento")
        .notEmpty().withMessage("El descuento es obligatorio")
        .isNumeric().withMessage("El descuento debe ser un número"),
    check("inicio")
        .notEmpty().withMessage("La fecha de inicio de la promoción es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de inicio debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("fin")
        .notEmpty().withMessage("La fecha de finalización de la promoción es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de finalización debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
];

//puesto
const postPuestosDTO = [
    check("nombre")
        .notEmpty().withMessage("El nombre del puesto es obligatorio")
        .isString().withMessage("El nombre del puesto debe ser una cadena de texto"),
    check("salario")
        .notEmpty().withMessage("El salario es obligatorio")
        .isNumeric().withMessage("El salario debe ser un número"),
    check("idHorario")
        .notEmpty().withMessage("El ID del horario de trabajo es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del horario de trabajo debe ser un número entero positivo"),
];

const putPuestosDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre del puesto es obligatorio")
        .isString().withMessage("El nombre del puesto debe ser una cadena de texto"),
    check("salario")
        .notEmpty().withMessage("El salario es obligatorio")
        .isNumeric().withMessage("El salario debe ser un número"),
    check("idHorario")
        .notEmpty().withMessage("El ID del horario de trabajo es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del horario de trabajo debe ser un número entero positivo"),
];

//seguimiento empleado
const postSeguimientoEmpleadoDTO = [
    check("creacion")
        .notEmpty().withMessage("La fecha de creación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de creación debe tener el formato 'YYYY-MM-DD'"),
    check("actualizacion")
        .notEmpty().withMessage("La fecha de actualización es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de actualización debe tener el formato 'YYYY-MM-DD'"),
];

const putSeguimientoEmpleadoDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("creacion")
        .notEmpty().withMessage("La fecha de creación es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de creación debe tener el formato 'YYYY-MM-DD'"),
    check("actualizacion")
        .notEmpty().withMessage("La fecha de actualización es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("La fecha de actualización debe tener el formato 'YYYY-MM-DD'"),
];

//tipo boleta
const postTiposBoletasDTO = [
    check("tipo")
        .notEmpty().withMessage("El tipo de entrada es obligatorio")
        .isString().withMessage("El tipo de entrada debe ser una cadena de texto"),
    check("precio")
        .notEmpty().withMessage("El precio es obligatorio")
        .isNumeric().withMessage("El precio debe ser un número"),
];

const putTiposBoletasDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("tipo")
        .notEmpty().withMessage("El tipo de entrada es obligatorio")
        .isString().withMessage("El tipo de entrada debe ser una cadena de texto"),
    check("precio")
        .notEmpty().withMessage("El precio es obligatorio")
        .isNumeric().withMessage("El precio debe ser un número"),
];

//zona
const postZonasDTO = [
    check("nombre")
        .notEmpty().withMessage("El nombre de la zona es obligatorio")
        .isString().withMessage("El nombre de la zona debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la zona es obligatoria")
        .isString().withMessage("La descripción de la zona debe ser una cadena de texto"),
];

const putZonasDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("nombre")
        .notEmpty().withMessage("El nombre de la zona es obligatorio")
        .isString().withMessage("El nombre de la zona debe ser una cadena de texto"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la zona es obligatoria")
        .isString().withMessage("La descripción de la zona debe ser una cadena de texto"),
];

//Boleta
const postBoletasDTO = [
    check("lista")
        .notEmpty().withMessage("El ID de la lista es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la lista debe ser un número entero positivo"),
    check("tipo")
        .notEmpty().withMessage("El ID del tipo es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del tipo debe ser un número entero positivo"),
    check("cantidad")
        .notEmpty().withMessage("La cantidad es obligatoria")
        .isInt({ min: 1 }).withMessage("La cantidad debe ser un número entero positivo"),
];

const putBoletasDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("lista")
        .notEmpty().withMessage("El ID de la lista es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID de la lista debe ser un número entero positivo"),
    check("tipo")
        .notEmpty().withMessage("El ID del tipo es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del tipo debe ser un número entero positivo"),
    check("cantidad")
        .notEmpty().withMessage("La cantidad es obligatoria")
        .isInt({ min: 1 }).withMessage("La cantidad debe ser un número entero positivo"),
];

//Cita medica
const postCitasMedicasDTO = [
    check("idHistorialSalud")
        .notEmpty().withMessage("El ID del historial médico es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del historial médico debe ser un número entero positivo"),
    check("fecha_cita")
        .notEmpty().withMessage("La fecha de la cita médica es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de la cita médica debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la cita médica es obligatoria")
        .isString().withMessage("La descripción de la cita médica debe ser una cadena de texto"),
    check("id_veterinario")
        .notEmpty().withMessage("El ID del veterinario es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del veterinario debe tener 10 dígitos numéricos"),
];

const putCitasMedicasDTO = [
    check("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
    check("idHistorialSalud")
        .notEmpty().withMessage("El ID del historial médico es obligatorio")
        .isInt({ min: 1 }).withMessage("El ID del historial médico debe ser un número entero positivo"),
    check("fecha_cita")
        .notEmpty().withMessage("La fecha de la cita médica es obligatoria")
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).withMessage("La fecha de la cita médica debe tener el formato 'YYYY-MM-DD HH:MM:SS'"),
    check("descripcion")
        .notEmpty().withMessage("La descripción de la cita médica es obligatoria")
        .isString().withMessage("La descripción de la cita médica debe ser una cadena de texto"),
    check("id_veterinario")
        .notEmpty().withMessage("El ID del veterinario es obligatorio")
        .matches(/^[0-9]{10}$/).withMessage("El ID del veterinario debe tener 10 dígitos numéricos"),
];


export {
    putCitasMedicasDTO,
    postCitasMedicasDTO,
    putBoletasDTO,
    postBoletasDTO,
    putZonasDTO,
    postZonasDTO,
    putTiposBoletasDTO,
    postTiposBoletasDTO,
    putSeguimientoEmpleadoDTO,
    postSeguimientoEmpleadoDTO,
    putPuestosDTO,
    postPuestosDTO,
    putPromocionesDTO,
    postPromocionesDTO,
    putPlanificacionEventosDTO,
    postPlanificacionEventosDTO,
    putListaBoletasDTO,
    putHorarioTrabajoDTO,
    putHorarioAlimentacionDTO,
    postHorarioAlimentacionDTO,
    postTipoAlimentacionDTO,
    putTipoAlimentacionDTO,
    postAnimalDTO,
    putAnimalDTO,
    postestadoSaludDTO,
    putEstadoSaludDTO,
    postEventoDTO,
    putEventoDTO,
    postFacturaEntradaDTO,
    putFacturaEntradaDTO,
    postHabitatDTO,
    putHabitatDTO,
    postHistorialSaludDTO,
    putHistorialSaludDTO,
    postCapacitacionDTO,
    putCapacitacionDTO,
    postEmpleadoDTO,
    postEvaluacionDesempenoDTO,
    putEvaluacionDesempenoDTO,
    postHistorialEventosDTO,
    putHistorialEventosDTO,
    postHorarioTrabajoDTO,
    postListaBoletasDTO
}