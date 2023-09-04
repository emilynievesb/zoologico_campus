import { connection, startTransaction } from "../utils/connect.js";

class Usuarios {
    id;
    usuario;
    contrasena;

    constructor() {
        this.id = "AUTORIZACIÓN TABLA USUARIOS"
    }

    async connect() {
        try {
            const result = await connection("usuarios");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getRol() {
        try {
            this.session = await startTransaction();
            const connection = await this.connect();
            const resultado = await connection
                .aggregate([
                    {
                        $match: {
                            usuario: this.usuario,
                            contrasena: this.contrasena
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            rol: 1
                        }
                    },
                ]).toArray();
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

export { Usuarios };
