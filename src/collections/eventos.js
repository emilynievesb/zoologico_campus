import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Eventos {
  id;
  historialId;
  empleadoId;
  fecha_evento;
  descripcion;
  recomendaciones;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("eventos");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerEventos() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              id: "$id",
              historialId: "$historialId",
              empleadoId: "$empleadoId",
              fecha_evento: "$fecha_evento",
              descripcion: "$descripcion",
              recomendaciones: "$recomendaciones",
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

  async obtenerEvento(eventoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(eventoId),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              historialId: "$historialId",
              empleadoId: "$empleadoId",
              fecha_evento: "$fecha_evento",
              descripcion: "$descripcion",
              recomendaciones: "$recomendaciones",
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

  async agregarEvento() {
    try {
      const incremental = await autoIncrementID("eventos");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        historialId: Number(this.historialId),
        empleadoId: this.empleadoId,
        fecha_evento: new Date(),
        descripcion: this.descripcion,
        recomendaciones: this.recomendaciones,
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

  async actualizarEvento() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            historialId: Number(this.historialId),
            empleadoId: this.empleadoId,
            fecha_evento: this.fecha_evento,
            descripcion: this.descripcion,
            recomendaciones: this.recomendaciones,
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

  async eliminarEvento(eventoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(eventoId),
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

export { Eventos };
