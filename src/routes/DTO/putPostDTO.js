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

export {
    postTipoAlimentacionDTO,
    putTipoAlimentacionDTO
}