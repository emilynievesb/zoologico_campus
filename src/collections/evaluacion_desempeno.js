import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class EvaluacionDesempeno {
    id;
    seguimiento;
    fecha;
    jefe;
    descripcion;

    constructor() { }

    async connect() {
        try {
            const result = await connection("evaluacion_desempeno");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerEvaluacionesDesempeno() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            seguimiento: "$id_seguimiento",
                            fecha: "$fecha_reporte",
                            jefe: "$id_empleado_reporte",
                            descripcion: "$descripcion"
                        },
                    },
                ])
                .toArray();
            await this.session.commitTransaction();
            return resultado;
        } catch (error) {
            if (this.session) {
                await this.session.abortTransaction();
            }
            throw error;
        } finally {
            if (this.session) {
                this.session.endSession();
            }
        }
    }

    async obtenerEvaluacionDesempenoPorId(id) {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $match: {
                            id: Number(id),
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            seguimiento: "$id_seguimiento",
                            fecha: "$fecha_reporte",
                            jefe: "$id_empleado_reporte",
                            descripcion: "$descripcion"
                        },
                    },
                ])
                .toArray();
            await this.session.commitTransaction();
            return resultado;
        } catch (error) {
            if (this.session) {
                await this.session.abortTransaction();
            }
            throw error;
        } finally {
            if (this.session) {
                this.session.endSession();
            }
        }
    }

    async agregarEvaluacionDesempeno() {
        try {
            const incremental = await autoIncrementID("evaluacion_desempeno");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                id_seguimiento: this.seguimiento,
                fecha_reporte: this.fecha,
                id_empleado_reporte: this.jefe,
                descripcion: this.descripcion
            });
            await this.session.commitTransaction();
            return resultado;
        } catch (error) {
            if (this.session) {
                await this.session.abortTransaction();
            }
            throw error;
        } finally {
            if (this.session) {
                this.session.endSession();
            }
        }
    }

    async eliminarEvaluacionDesempeno(id) {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .deleteOne(
                    {
                        id: Number(id)
                    }
                );
            await this.session.commitTransaction();
            return resultado;
        } catch (error) {
            if (this.session) {
                await this.session.abortTransaction();
            }
            throw error;
        } finally {
            if (this.session) {
                this.session.endSession();
            }
        }
    }

    async actualizarEvaluacionDesempeno() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .updateOne(
                    {
                        id: this.id
                    },
                    {
                        $set: {
                            id_seguimiento: this.seguimiento,
                            fecha_reporte: this.fecha,
                            id_empleado_reporte: this.jefe,
                            descripcion: this.descripcion
                        }
                    }
                );
            await this.session.commitTransaction();
            return resultado;
        } catch (error) {
            if (this.session) {
                await this.session.abortTransaction();
            }
            throw error;
        } finally {
            if (this.session) {
                this.session.endSession();
            }
        }
    }
}

export { EvaluacionDesempeno };
