import { validationResult } from "express-validator";
import { Router } from "express";
import { deleteT1DTO, deleteT2DTO, getT1DTO, getT2DTO } from "../routes/DTO/getDeleteDTO.js";

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

const deleteT1DTOMiddleware = Router()
deleteT1DTOMiddleware.use(deleteT1DTO, (req, res, next) => {
    validador(req, res, next)
})

const deleteT2DTOMiddleware = Router()
deleteT2DTOMiddleware.use(deleteT2DTO, (req, res, next) => {
    validador(req, res, next)
})

export {
    getT1DTOMiddleware,
    getT2DTOMiddleware,
    deleteT1DTOMiddleware,
    deleteT2DTOMiddleware
}