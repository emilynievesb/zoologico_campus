import { check } from "express-validator";

const getT1DTO = [
    check("id")
        .optional()
        .isNumeric().withMessage("El id debe ser numerico")
]

const getT2DTO = [
    check("id")
        .optional()
        .matches(/^[0-9]{10}$/).withMessage("El id debe ser un string que contenga unicamente el documento de identidad, es decir 10 digitos consecutivos")
]

// export const deleteT1DTO = [
//     check("id")
//         .notEmpty().withMessage("El id es obligatorio")
//         .isNumeric().withMessage("El id debe ser numerico")
// ]
export {
    getT1DTO,
    getT2DTO
}