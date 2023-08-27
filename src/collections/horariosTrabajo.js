import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class HorariosTrabajo {
    id;
    horaInicio;
    horaFin;

    constructor() { }

    async connect() {
        try {
            const result = await connection("horarios_trabajo");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerHorariosTrabajo() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            horaInicio: "$hora_inicio",
                            horaFin: "$hora_fin"
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

    async obtenerHorarioTrabajoPorId(id) {
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
                            horaInicio: "$hora_inicio",
                            horaFin: "$hora_fin"
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

    async agregarHorarioTrabajo() {
        try {
            const incremental = await autoIncrementID("horarios_trabajo");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                hora_inicio: this.horaInicio,
                hora_fin: this.horaFin
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

    async eliminarHorarioTrabajo(id) {
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

    async actualizarHorarioTrabajo() {
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
                            hora_inicio: this.horaInicio,
                            hora_fin: this.horaFin
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

export { HorariosTrabajo };
