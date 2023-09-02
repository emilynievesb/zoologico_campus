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

export {
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
    putHistorialSaludDTO
}