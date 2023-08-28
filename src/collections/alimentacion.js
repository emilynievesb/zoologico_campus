import autoIncrementID from "../utils/autoIncrement.js";
import { connection } from "../utils/connect.js";

class Alimentacion {
  id;
  tipo;
  session;

  constructor() { }

  async connect() {
    try {
      const result = await connection("alimentacion");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerTiposAlimentacion() {
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

  async obtenerTipoAlimentacion(tipoAlimentacionId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(tipoAlimentacionId),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              tipo: "$tipo",
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

  async agregarTipoAlimentacion() {
    try {
      const incremental = await autoIncrementID("alimentacion");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        tipo: this.tipo,
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

  async actualizarTipoAlimentacion() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .updateOne(
          {
            id: this.id,
          },
          {
            $set: {
              tipo: this.tipo,
            },
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

  async eliminarTipoAlimentacion(tipoAlimentacionId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(tipoAlimentacionId),
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

}

export { Alimentacion };
