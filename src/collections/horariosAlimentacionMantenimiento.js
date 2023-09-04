import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class HorariosAlimentacionMantenimiento {
    id;
    habitat;
    hora;
    encargado;
    descripcion;

    constructor() {
        this.id = "AUTORIZACIÓN TABLA HORARIOS ALIMENTACION MANTENIMIENTO"
    }

    async connect() {
        try {
            const result = await connection("horarios_de_alimentacionMantenimiento");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerHorariosAlimentacionMantenimiento() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            habitat: "$id_habitat",
                            hora: "$hora_alimentacionMantenimiento",
                            encargado: "$id_encargado",
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

    async obtenerHorarioAlimentacionMantenimientoPorId(id) {
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
                            habitat: "$id_habitat",
                            hora: "$hora_alimentacionMantenimiento",
                            encargado: "$id_encargado",
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

    async agregarHorarioAlimentacionMantenimiento() {
        try {
            const incremental = await autoIncrementID("horarios_de_alimentacionMantenimiento");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                id_habitat: this.habitat,
                hora_alimentacionMantenimiento: this.hora,
                id_encargado: this.encargado,
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

    async eliminarHorarioAlimentacionMantenimiento(id) {
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

    async actualizarHorarioAlimentacionMantenimiento() {
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
                            id_habitat: this.habitat,
                            hora_alimentacionMantenimiento: this.hora,
                            id_encargado: this.encargado,
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

export { HorariosAlimentacionMantenimiento };
