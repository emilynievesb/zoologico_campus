import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class FacturaEntrada {
    id;
    fecha;
    visitante;
    precio;
    evento;
    precioDescuento;
    listaBoletas;

    constructor() {
        id = "AUTORIZACIÓN TABLA FACTURA VENTA"
    }

    async connect() {
        try {
            const result = await connection("facturaEntrada");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async obtenerFacturasEntrada() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $project: {
                            _id: 0,
                            id: "$id",
                            fecha: "$fecha_compra",
                            visitante: "$documento_visitante",
                            precio: "$precio",
                            evento: "$evento_especial",
                            precioDescuento: "$precio_descuento",
                            listaBoletas: "$idLista_boletas"
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

    async obtenerFacturaEntradaPorId(id) {
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
                            fecha: "$fecha_compra",
                            visitante: "$documento_visitante",
                            precio: "$precio",
                            evento: "$evento_especial",
                            precioDescuento: "$precio_descuento",
                            listaBoletas: "$idLista_boletas"
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

    async agregarFacturaEntrada() {
        try {
            const incremental = await autoIncrementID("facturaEntrada");
            const { id, session: newSession } = incremental;
            this.session = newSession;
            const connection = await this.connect();
            const resultado = await connection.insertOne({
                id: Number(id),
                fecha_compra: this.fecha,
                documento_visitante: this.visitante,
                precio: this.precio,
                evento_especial: this.evento,
                precio_descuento: this.precioDescuento,
                idLista_boletas: this.listaBoletas
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

    async eliminarFacturaEntrada(id) {
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

    async actualizarFacturaEntrada() {
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
                            fecha_compra: this.fecha,
                            documento_visitante: this.visitante,
                            precio: this.precio,
                            evento_especial: this.evento,
                            precio_descuento: this.precioDescuento,
                            idLista_boletas: this.listaBoletas
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

export { FacturaEntrada };
