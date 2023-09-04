import "reflect-metadata";
import { plainToClass, classToPlain } from "class-transformer";
import dotenv from "dotenv";
import { Router } from "express";
import { SignJWT, jwtVerify } from "jose";
import { Alimentacion } from "../collections/alimentacion.js";
import { Animales } from "../collections/animales.js";
import { Boletas } from "../collections/boletas.js";
import { Capacitaciones } from "../collections/capacitaciones.js";
import { CitasMedicas } from "../collections/citasMedicas.js";
import { Empleado } from "../collections/empleado.js";
import { EstadoHabitat } from "../collections/estadohabitad.js";
import { EstadosSalud } from "../collections/estadoSalud.js";
import { EvaluacionDesempeno } from "../collections/evaluacion_desempeno.js";
import { Eventos } from "../collections/eventos.js";
import { FacturaEntrada } from "../collections/facturaEntrada.js";
import { Habitat } from "../collections/habitat.js";
import { HistorialesSalud } from "../collections/historialesSalud.js";
import { HistorialEventos } from "../collections/historialEventos.js";
import { HorariosAlimentacionMantenimiento } from "../collections/horariosAlimentacionMantenimiento.js";
import { HorariosTrabajo } from "../collections/horariosTrabajo.js";
import { ListaBoletas } from "../collections/lista_boletas.js";
import { PlanificacionEventos } from "../collections/planificacion_eventos.js";
import { Promociones } from "../collections/promociones.js";
import { Puestos } from "../collections/puestos.js";
import { SeguimientoEmpleado } from "../collections/seguimientoEmpleados.js";
import { TipoBoleta } from "../collections/tiposBoletas.js";
import { Zona } from "../collections/zonas.js";

dotenv.config();
const appToken = Router();

appToken.use("/:colletion", async (req, res) => {
  try {
    const { colletion } = req.params;
    const classMappings = {
      alimentacion: Alimentacion,
      animales: Animales,
      boletas: Boletas,
      capacitaciones: Capacitaciones,
      citasMedicas: CitasMedicas,
      empleado: Empleado,
      estadoHabitat: EstadoHabitat,
      estadoSalud: EstadosSalud,
      evaluacionDesempeno: EvaluacionDesempeno,
      eventos: Eventos,
      facturaEntrada: FacturaEntrada,
      habitat: Habitat,
      historialesSalud: HistorialesSalud,
      historialEventos: HistorialEventos,
      horariosAlimentacion: HorariosAlimentacionMantenimiento,
      horariosTrabajo: HorariosTrabajo,
      listaBoletas: ListaBoletas,
      planificacionEventos: PlanificacionEventos,
      promociones: Promociones,
      puestos: Puestos,
      seguimientoEmpleado: SeguimientoEmpleado,
      tiposBoletas: TipoBoleta,
      zonas: Zona,
    };
    const ClassType = classMappings[colletion];
    if (!ClassType) {
      throw new Error("Clase no encontrada");
    }
    const inst = plainToClass(ClassType, {});
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
    const jwt = await jwtconstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("30m")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    res.status(201).send({ status: 201, message: jwt });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .send({ status: 404, message: "Token solicitado no valido" });
  }
});

const authorizationMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(400).send({ status: 400, token: "Token no enviado" });
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    req.data = jwtData;
    next();
  } catch (error) {
    res.status(498).send({ status: 498, token: "Token caducado" });
  }
};

const contentMiddlewareAlimentacion = (req, res, next) => {
  console.log(req.data);
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Alimentacion();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareAnimales = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Animales();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareBoletas = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Boletas();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareCapacitaciones = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Capacitaciones();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareCitasMedicas = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new CitasMedicas();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareEmpleados = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Empleado();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareEstadoHabitat = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new EstadoHabitat();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareEstadoSalud = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new EstadosSalud();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareEvaluacionDesempeno = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new EvaluacionDesempeno();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareEventos = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Eventos();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareFacturaEntrada = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new FacturaEntrada();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareHabitat = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Habitat();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareHistorialesSalud = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new HistorialesSalud();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareHistorialEventos = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new HistorialEventos();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareHorariosAlimentacion = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new HorariosAlimentacionMantenimiento();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareHorariosTrabajo = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new HorariosTrabajo();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareListaBoletas = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new ListaBoletas();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewarePlanificacionEventos = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new PlanificacionEventos();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewarePromociones = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Promociones();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewarePuestos = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Puestos();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareSeguimientoEmpleados = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new SeguimientoEmpleado();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

const contentMiddlewareTipoBoleta = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new TipoBoleta();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};
const contentMiddlewareZonas = (req, res, next) => {
  let { payload } = req.data;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const inst = new Zona();
  const classPlain = classToPlain(inst);
  let equal = JSON.stringify(classPlain) === JSON.stringify(payload);
  !equal
    ? res.status(406).send({ status: 406, message: "No Autorizado" })
    : next();
};

export {
  appToken,
  authorizationMiddleware,
  contentMiddlewareAlimentacion,
  contentMiddlewareAnimales,
  contentMiddlewareBoletas,
  contentMiddlewareCapacitaciones,
  contentMiddlewareCitasMedicas,
  contentMiddlewareEmpleados,
  contentMiddlewareEstadoHabitat,
  contentMiddlewareEstadoSalud,
  contentMiddlewareEvaluacionDesempeno,
  contentMiddlewareEventos,
  contentMiddlewareFacturaEntrada,
  contentMiddlewareHabitat,
  contentMiddlewareHistorialesSalud,
  contentMiddlewareHistorialEventos,
  contentMiddlewareHorariosAlimentacion,
  contentMiddlewareHorariosTrabajo,
  contentMiddlewareListaBoletas,
  contentMiddlewarePlanificacionEventos,
  contentMiddlewarePromociones,
  contentMiddlewarePuestos,
  contentMiddlewareSeguimientoEmpleados,
  contentMiddlewareTipoBoleta,
  contentMiddlewareZonas,
};
