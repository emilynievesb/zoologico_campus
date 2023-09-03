import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class HistorialesSalud {
  id;
  idEstadoSalud;
  fecha_apertura;
  ultima_modificacion;
  session;

  constructor() {
    this.id = "AUTORIZACIÓN TABLA HISTORIAL SALUD"
  }

  async connect() {
    try {
      const result = await connection("historialSalud");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerHistorialesSalud() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "estadoSalud",
              localField: "idEstadoSalud",
              foreignField: "id",
              as: "estadoSalud",
            },
          },
          {
            $unwind: "$estadoSalud",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              estadoSalud: "$estadoSalud.estado",
              fecha_apertura: "$fecha_apertura",
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

  async obtenerHistorialSalud(historialSaludId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(historialSaludId),
            },
          },
          {
            $lookup: {
              from: "estadoSalud",
              localField: "idEstadoSalud",
              foreignField: "id",
              as: "estadoSalud",
            },
          },
          {
            $unwind: "$estadoSalud",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              estadoSalud: "$estadoSalud.estado",
              fecha_apertura: "$fecha_apertura",
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

  async agregarHistorialSalud() {
    try {
      const incremental = await autoIncrementID("historialSalud");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        idEstadoSalud: Number(this.idEstadoSalud),
        fecha_apertura: this.fecha_apertura,
        ultima_modificacion: this.ultima_modificacion,
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

  async actualizarHistorialSalud() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            idEstadoSalud: Number(this.idEstadoSalud),
            fecha_apertura: this.fecha_apertura,
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

  async eliminarHistorialSalud(historialSaludId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(historialSaludId),
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

export { HistorialesSalud };
