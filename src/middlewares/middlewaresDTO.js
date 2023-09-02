import { validationResult } from "express-validator";
import { Router } from "express";
import { deleteT1DTO, deleteT2DTO, getT1DTO, getT2DTO } from "../routes/DTO/getDeleteDTO.js";
import { postAnimalDTO, postEventoDTO, postFacturaEntradaDTO, postHabitatDTO, postTipoAlimentacionDTO, postestadoSaludDTO, putAnimalDTO, putEstadoSaludDTO, putEventoDTO, putFacturaEntradaDTO, putHabitatDTO, putTipoAlimentacionDTO } from "../routes/DTO/putPostDTO.js";

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

function validador2(req, res) {
    const errors = validationResult(req);
    let errFlag = false;
    let errores = [];
    errors.errors.forEach(element => {
        errores.push(element.msg)
    });
    if (!errors.isEmpty()) {
        errFlag = true
        return res.status(400).json({ errores })
    } return errFlag
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

//facturaEntrada
const postFacturaEntradaDTOMiddleware = Router()
postFacturaEntradaDTOMiddleware.use(postFacturaEntradaDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { fecha, visitante, precio, evento, precioDescuento, listaBoletas } = req.body
        const nuevoBody = {
            fecha_compra: fecha,
            documento_visitante: visitante,
            precio: precio,
            evento_especial: evento,
            precio_descuento: precioDescuento,
            idLista_boletas: listaBoletas

        };
        req.body = nuevoBody
        next()
    }
});

const putFacturaEntradaDTOMiddleware = Router()
putFacturaEntradaDTOMiddleware.use(putFacturaEntradaDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, fecha, visitante, precio, evento, precioDescuento, listaBoletas } = req.body
        const nuevoBody = {
            id: id,
            fecha_compra: fecha,
            documento_visitante: visitante,
            precio: precio,
            evento_especial: evento,
            precio_descuento: precioDescuento,
            idLista_boletas: listaBoletas

        };
        req.body = nuevoBody
        next()
    }
});

//habitat
const postHabitatDTOMiddleware = Router()
postHabitatDTOMiddleware.use(postHabitatDTO, (req, res, next) => {
    validador(req, res, next)
});

const putHabitatDTOMiddleware = Router()
putHabitatDTOMiddleware.use(putHabitatDTO, (req, res, next) => {
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
    putEventoDTOMiddleware,
    postFacturaEntradaDTOMiddleware,
    putFacturaEntradaDTOMiddleware,
    postHabitatDTOMiddleware,
    putHabitatDTOMiddleware
}