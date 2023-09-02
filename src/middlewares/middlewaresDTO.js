import { validationResult } from "express-validator";
import { Router } from "express";
import { getT1DTO, getT2DTO } from "../routes/DTO/getDeleteDTO.js";

function validador(req, res, next) {
    const errors = validationResult(req);
    let errores = [];
    errors.errors.forEach(element => {
        errores.push(element.msg)
    });
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores })
    } else next()
}

const getT1DTOMiddleware = Router()
getT1DTOMiddleware.use(getT1DTO, (req, res, next) => {
    validador(req, res, next)
});

const getT2DTOMiddleware = Router()
getT2DTOMiddleware.use(getT2DTO, (req, res, next) => {
    validador(req, res, next)
});

// export const deleteT1DTOMiddleware = Router()
// getT1DTOMiddleware.use(deleteT1DTO, (req, res, next) => {
//     const errors = validationResult(req);
//     let errores = [];
//     errors.errors.forEach(element => {
//         errores.push(element.msg)
//     });
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errores })
//     } else next()
// }); 

export {
    getT1DTOMiddleware,
    getT2DTOMiddleware
}