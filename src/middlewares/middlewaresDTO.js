import { validationResult } from "express-validator";
import { Router } from "express";
import { deleteT1DTO, deleteT2DTO, getT1DTO, getT2DTO } from "../routes/DTO/getDeleteDTO.js";
import { postAnimalDTO, postEventoDTO, postTipoAlimentacionDTO, postestadoSaludDTO, putAnimalDTO, putEstadoSaludDTO, putEventoDTO, putTipoAlimentacionDTO } from "../routes/DTO/putPostDTO.js";

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

//get delete
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

//post put
//tipoAlimentacion
const postTipoAlimentacionDTOMiddleware = Router()
postTipoAlimentacionDTOMiddleware.use(postTipoAlimentacionDTO, (req, res, next) => {
    validador(req, res, next)
});

const putTipoAlimentacionDTOMiddleware = Router()
putTipoAlimentacionDTOMiddleware.use(putTipoAlimentacionDTO, (req, res, next) => {
    validador(req, res, next)
});

//animales
const postAnimalDTOMiddleware = Router()
postAnimalDTOMiddleware.use(postAnimalDTO, (req, res, next) => {
    validador(req, res, next)
});

const putAnimalDTOMiddleware = Router()
putAnimalDTOMiddleware.use(putAnimalDTO, (req, res, next) => {
    validador(req, res, next)
});

//estadoSalud
const postestadoSaludDTOMiddleware = Router()
postestadoSaludDTOMiddleware.use(postestadoSaludDTO, (req, res, next) => {
    validador(req, res, next)
});

const putestadoSaludDTOMiddleware = Router()
putestadoSaludDTOMiddleware.use(putEstadoSaludDTO, (req, res, next) => {
    validador(req, res, next)
});

//evento
const postEventoDTOMiddleware = Router()
postEventoDTOMiddleware.use(postEventoDTO, (req, res, next) => {
    validador(req, res, next)
});

const putEventoDTOMiddleware = Router()
putEventoDTOMiddleware.use(putEventoDTO, (req, res, next) => {
    validador(req, res, next)
});

export {
    getT1DTOMiddleware,
    getT2DTOMiddleware,
    deleteT1DTOMiddleware,
    deleteT2DTOMiddleware,
    postTipoAlimentacionDTOMiddleware,
    putTipoAlimentacionDTOMiddleware,
    postAnimalDTOMiddleware,
    putAnimalDTOMiddleware,
    postestadoSaludDTOMiddleware,
    putestadoSaludDTOMiddleware,
    postEventoDTOMiddleware,
    putEventoDTOMiddleware
}