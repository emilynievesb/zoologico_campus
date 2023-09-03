import { validationResult } from "express-validator";
import { Router } from "express";
import { deleteT1DTO, deleteT2DTO, getT1DTO, getT2DTO } from "../routes/DTO/getDeleteDTO.js";
import { postAnimalDTO, postBoletasDTO, postCapacitacionDTO, postEmpleadoDTO, postEvaluacionDesempenoDTO, postEventoDTO, postFacturaEntradaDTO, postHabitatDTO, postHistorialEventosDTO, postHistorialSaludDTO, postHorarioAlimentacionDTO, postHorarioTrabajoDTO, postListaBoletasDTO, postPlanificacionEventosDTO, postPromocionesDTO, postPuestosDTO, postSeguimientoEmpleadoDTO, postTipoAlimentacionDTO, postTiposBoletasDTO, postZonasDTO, postestadoSaludDTO, putAnimalDTO, putBoletasDTO, putCapacitacionDTO, putEstadoSaludDTO, putEvaluacionDesempenoDTO, putEventoDTO, putFacturaEntradaDTO, putHabitatDTO, putHistorialEventosDTO, putHistorialSaludDTO, putHorarioAlimentacionDTO, putHorarioTrabajoDTO, putListaBoletasDTO, putPlanificacionEventosDTO, putPromocionesDTO, putPuestosDTO, putSeguimientoEmpleadoDTO, putTipoAlimentacionDTO, putTiposBoletasDTO, putZonasDTO } from "../routes/DTO/putPostDTO.js";

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

//historial Salud
const postHistorialSaludDTOMiddleware = Router()
postHistorialSaludDTOMiddleware.use(postHistorialSaludDTO, (req, res, next) => {
    validador(req, res, next)
});

const putHistorialSaludDTOMiddleware = Router()
putHistorialSaludDTOMiddleware.use(putHistorialSaludDTO, (req, res, next) => {
    validador(req, res, next)
});

//capacitaion
const postCapacitacionDTOMiddleware = Router()
postCapacitacionDTOMiddleware.use(postCapacitacionDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { seguimiento, nombre, fecha, descripcion } = req.body
        const nuevoBody = {
            id_seguimiento: seguimiento,
            nombre: nombre,
            fecha: fecha,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

const putCapacitacionDTOMiddleware = Router()
putCapacitacionDTOMiddleware.use(putCapacitacionDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, seguimiento, nombre, fecha, descripcion } = req.body
        const nuevoBody = {
            id: id,
            id_seguimiento: seguimiento,
            nombre: nombre,
            fecha: fecha,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

//empleado
const postEmpleadoDTOMiddleware = Router()
postEmpleadoDTOMiddleware.use(postEmpleadoDTO, (req, res, next) => {
    validador(req, res, next)
});

//evaluacion desempeno
const postEvaluacionDesempenoDTOMiddleware = Router()
postEvaluacionDesempenoDTOMiddleware.use(postEvaluacionDesempenoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { seguimiento, fecha, jefe, descripcion } = req.body
        const nuevoBody = {
            id_seguimiento: seguimiento,
            id_empleado_reporte: jefe,
            fecha_reporte: fecha,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

const putEvaluacionDesempenoDTOMiddleware = Router()
putEvaluacionDesempenoDTOMiddleware.use(putEvaluacionDesempenoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, seguimiento, fecha, jefe, descripcion } = req.body
        const nuevoBody = {
            id: id,
            id_seguimiento: seguimiento,
            id_empleado_reporte: jefe,
            fecha_reporte: fecha,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

//historial eventos
const postHistorialEventosDTOMiddleware = Router()
postHistorialEventosDTOMiddleware.use(postHistorialEventosDTO, (req, res, next) => {
    validador(req, res, next)
});

const putHistorialEventosDTOMiddleware = Router()
putHistorialEventosDTOMiddleware.use(putHistorialEventosDTO, (req, res, next) => {
    validador(req, res, next)
});

//horarioAlimentacionMantenimiento
const postHorarioAlimentacionDTOMiddleware = Router()
postHorarioAlimentacionDTOMiddleware.use(postHorarioAlimentacionDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { habitat, hora, encargado, descripcion } = req.body
        const nuevoBody = {
            id_habitat: habitat,
            hora_alimentacionMantenimiento: hora,
            id_encargado: encargado,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

const putHorarioAlimentacionDTOMiddleware = Router()
putHorarioAlimentacionDTOMiddleware.use(putHorarioAlimentacionDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, habitat, hora, encargado, descripcion } = req.body
        const nuevoBody = {
            id: id,
            id_habitat: habitat,
            hora_alimentacionMantenimiento: hora,
            id_encargado: encargado,
            descripcion: descripcion
        };
        req.body = nuevoBody
        next()
    }
});

//horarios trabajo
const postHorarioTrabajoDTOMiddleware = Router()
postHorarioTrabajoDTOMiddleware.use(postHorarioTrabajoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { horaInicio, horaFin } = req.body
        const nuevoBody = {
            hora_inicio: horaInicio,
            hora_fin: horaFin,
        };
        req.body = nuevoBody
        next()
    }
});

const putHorarioTrabajoDTOMiddleware = Router()
putHorarioTrabajoDTOMiddleware.use(putHorarioTrabajoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, horaInicio, horaFin } = req.body
        const nuevoBody = {
            id: id,
            hora_inicio: horaInicio,
            hora_fin: horaFin,
        };
        req.body = nuevoBody
        next()
    }
});

//lista boletas
const postListaBoletasDTOMiddleware = Router()
postListaBoletasDTOMiddleware.use(postListaBoletasDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { factura } = req.body
        const nuevoBody = {
            idFactura: factura,
        };
        req.body = nuevoBody
        next()
    }
});

const putListaBoletasDTOMiddleware = Router()
putListaBoletasDTOMiddleware.use(putListaBoletasDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, factura } = req.body
        const nuevoBody = {
            id: id,
            idFactura: factura,
        };
        req.body = nuevoBody
        next()
    }
});

//planificacion evento
const postPlanificacionEventosDTOMiddleware = Router()
postPlanificacionEventosDTOMiddleware.use(postPlanificacionEventosDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { nombre, inicio, fin, idZona, descripcion } = req.body
        const nuevoBody = {
            nombre: nombre,
            fecha_inicio: inicio,
            fecha_fin: fin,
            idZona: idZona,
            descripcion,
        };
        req.body = nuevoBody
        next()
    }
});

const putPlanificacionEventosDTOMiddleware = Router()
putPlanificacionEventosDTOMiddleware.use(putPlanificacionEventosDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, nombre, inicio, fin, idZona, descripcion } = req.body
        const nuevoBody = {
            id,
            nombre: nombre,
            fecha_inicio: inicio,
            fecha_fin: fin,
            idZona: idZona,
            descripcion,
        };
        req.body = nuevoBody
        next()
    }
});

//promociones
const postPromocionesDTOMiddleware = Router()
postPromocionesDTOMiddleware.use(postPromocionesDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { nombre, descuento, fin, inicio, descripcion } = req.body
        const nuevoBody = {
            nombre,
            fecha_inicio: inicio,
            fecha_fin: fin,
            descuento,
            descripcion,
        };
        req.body = nuevoBody
        next()
    }
})

const putPromocionesDTOMiddleware = Router()
putPromocionesDTOMiddleware.use(putPromocionesDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, nombre, descuento, fin, inicio, descripcion } = req.body
        const nuevoBody = {
            id,
            nombre,
            fecha_inicio: inicio,
            fecha_fin: fin,
            descuento,
            descripcion,
        };
        req.body = nuevoBody
        next()
    }
})

//puesto
const postPuestosDTOMiddleware = Router()
postPuestosDTOMiddleware.use(postPuestosDTO, (req, res, next) => {
    validador(req, res, next)
});

const putPuestosDTOMiddleware = Router()
putPuestosDTOMiddleware.use(putPuestosDTO, (req, res, next) => {
    validador(req, res, next)
});

//seguimiento empleado
const postSeguimientoEmpleadoDTOMiddleware = Router()
postSeguimientoEmpleadoDTOMiddleware.use(postSeguimientoEmpleadoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { creacion, actualizacion } = req.body
        const nuevoBody = {
            fecha_creacion: creacion,
            fecha_actualizacion: actualizacion
        };
        req.body = nuevoBody
        next()
    }
});

const putSeguimientoEmpleadoDTOMiddleware = Router()
putSeguimientoEmpleadoDTOMiddleware.use(putSeguimientoEmpleadoDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { id, creacion, actualizacion } = req.body
        const nuevoBody = {
            id,
            fecha_creacion: creacion,
            fecha_actualizacion: actualizacion
        };
        req.body = nuevoBody
        next()
    }
})

//tipoBoletas
const postTiposBoletasDTOMiddleware = Router()
postTiposBoletasDTOMiddleware.use(postTiposBoletasDTO, (req, res, next) => {
    validador(req, res, next)
});

const putTiposBoletasDTOMiddleware = Router()
putTiposBoletasDTOMiddleware.use(putTiposBoletasDTO, (req, res, next) => {
    validador(req, res, next)
});

//zonas
const postZonasDTOMiddleware = Router()
postZonasDTOMiddleware.use(postZonasDTO, (req, res, next) => {
    validador(req, res, next)
});
const putZonasDTOMiddleware = Router()
putZonasDTOMiddleware.use(putZonasDTO, (req, res, next) => {
    validador(req, res, next)
});

//Boletas
const postBoletasDTOMiddleware = Router()
postBoletasDTOMiddleware.use(postBoletasDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { lista, tipo, cantidad } = req.body
        const nuevoBody = {
            idLista: lista,
            idtipo: tipo,
            cantidad
        };
        req.body = nuevoBody
        next()
    }
});

const putBoletasDTOMiddleware = Router()
putBoletasDTOMiddleware.use(putBoletasDTO, (req, res, next) => {
    const errFlag = validador2(req, res)
    if (errFlag === false) {
        const { lista, tipo, cantidad } = req.body
        const nuevoBody = {
            idLista: lista,
            idtipo: tipo,
            cantidad
        };
        req.body = nuevoBody
        next()
    }
});



export {
    putBoletasDTOMiddleware,
    postBoletasDTOMiddleware,
    putZonasDTOMiddleware,
    postZonasDTOMiddleware,
    putTiposBoletasDTOMiddleware,
    postTiposBoletasDTOMiddleware,
    putSeguimientoEmpleadoDTOMiddleware,
    postSeguimientoEmpleadoDTOMiddleware,
    putPuestosDTOMiddleware,
    postPuestosDTOMiddleware,
    putPromocionesDTOMiddleware,
    postPromocionesDTOMiddleware,
    putPlanificacionEventosDTOMiddleware,
    postPlanificacionEventosDTOMiddleware,
    putListaBoletasDTOMiddleware,
    postListaBoletasDTOMiddleware,
    putHorarioTrabajoDTOMiddleware,
    postHorarioTrabajoDTOMiddleware,
    putHorarioAlimentacionDTOMiddleware,
    postHorarioAlimentacionDTOMiddleware,
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
    putHabitatDTOMiddleware,
    postHistorialSaludDTOMiddleware,
    putHistorialSaludDTOMiddleware,
    postCapacitacionDTOMiddleware,
    putCapacitacionDTOMiddleware,
    postEmpleadoDTOMiddleware,
    postEvaluacionDesempenoDTOMiddleware,
    putEvaluacionDesempenoDTOMiddleware,
    postHistorialEventosDTOMiddleware,
    putHistorialEventosDTOMiddleware
}