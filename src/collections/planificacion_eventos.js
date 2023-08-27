import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class PlanificacionEventos {
    id;
    nombre;
    inicio;
    fin;
    idZona;
    descripcion;

    constructor() { }

    async connect() {
        try {
            const result = await connection("planificacion_eventos");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPlanificacionEventos() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            nombre: "$nombre",
                            inicio: "$fecha_inicio",
                            fin: "$fecha_fin",
                            idZona: "$idZona",
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

    async obtenerPlanificacionEventosPorId(id) {
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
                            nombre: "$nombre",
                            inicio: "$fecha_inicio",
                            fin: "$fecha_fin",
                            idZona: "$idZona",
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

    async agregarPlanificacionEventos() {
        try {
            const incremental = await autoIncrementID("planificacion_eventos");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                nombre: this.nombre,
                fecha_inicio: this.inicio,
                fecha_fin: this.fin,
                idZona: this.idZona,
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

    async eliminarPlanificacionEventos(id) {
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

    async actualizarPlanificacionEventos() {
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
                            nombre: this.nombre,
                            fecha_inicio: this.inicio,
                            fecha_fin: this.fin,
                            idZona: this.idZona,
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

export { PlanificacionEventos };
