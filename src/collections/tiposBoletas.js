import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class TipoBoleta {
    id;
    tipo;
    precio;

    constructor() { }

    async connect() {
        try {
            const result = await connection("tipos_boletas");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerTiposBoletas() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            tipo: "$tipo",
                            precio: "$precio"
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

    async obtenerTipoBoletaPorId(id) {
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
                            tipo: "$tipo",
                            precio: "$precio"
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

    async agregarTipoBoleta() {
        try {
            const incremental = await autoIncrementID("tipos_boletas");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                tipo: this.tipo,
                precio: this.precio
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

    async eliminarTipoBoleta(id) {
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

    async actualizarTipoBoleta() {
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
                            tipo: this.tipo,
                            precio: this.precio
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

export { TipoBoleta };
