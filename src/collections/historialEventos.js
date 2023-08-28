import autoIncrementID from "../utils/autoIncrement.js";
import {connection} from "../utils/connect.js";

class HistorialEventos {
  id;
  fecha_creacion;
  ultima_modificacion;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("historial_de_eventos");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerHistoriales() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              id: "$id",
              fecha_creacion: "$fecha_creacion",
              ultima_modificacion: "$ultima_modificacion",
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

  async obtenerHistorialEvento(historialId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(historialId),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              fecha_creacion: "$fecha_creacion",
              ultima_modificacion: "$ultima_modificacion",
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

  async agregarHistorialEvento() {
    try {
      const incremental = await autoIncrementID("historial_de_eventos");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        fecha_creacion: new Date(),
        ultima_modificacion: new Date(),
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

  async actualizarHistorialEvento() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            fecha_creacion: this.fecha_creacion,
            ultima_modificacion: this.ultima_modificacion,
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

  async eliminarHistorialEvento(historialId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(historialId),
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

export { HistorialEventos };
