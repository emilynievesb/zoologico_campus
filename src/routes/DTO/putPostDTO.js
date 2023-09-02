import { check } from "express-validator";

//tipoAlimentacionDTO
const postTipoAlimentacionDTO = [
    check("tipo")
        .notEmpty().withMessage("El tipo es obligatorio")
        .isString().withMessage("El tipo es string")
]

const putTipoAlimentacionDTO = [
    check("id")
        .notEmpty().withMessage("El id es obligatorio")
        .isNumeric().withMessage("El id debe ser numerico"),
    check("tipo")
        .notEmpty().withMessage("El tipo es obligatorio")
        .isString().withMessage("El tipo es string")
]

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
]

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
]

//estadoSaludDTO
const postestadoSaludDTO = [
    check("estado")
        .notEmpty().withMessage("El estado es obligatorio")
        .isString().withMessage("El estado es string")
]

const putEstadoSaludDTO = [
    check("id")
        .notEmpty().withMessage("El id es obligatorio")
        .isNumeric().withMessage("El id debe ser numerico"),
    check("estado")
        .notEmpty().withMessage("El estado es obligatorio")
        .isString().withMessage("El estado es string")
]

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



export {
    postTipoAlimentacionDTO,
    putTipoAlimentacionDTO,
    postAnimalDTO,
    putAnimalDTO,
    postestadoSaludDTO,
    putEstadoSaludDTO,
    postEventoDTO
}