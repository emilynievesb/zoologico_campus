import autoIncrementID from "../utils/autoIncrement.js";
import { connection } from "../utils/connect.js";

class EstadosSalud {
  id;
  estado;
  session;
  constructor() { }

  async connect() {
    try {
      const result = await connection("estadoSalud");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerEstadosSalud() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
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

  async obtenerEstadoSalud(estadoSaludId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.findOne({ id: Number(estadoSaludId) });
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

  async agregarEstadoSalud() {
    try {
      const incremental = await autoIncrementID("estadoSalud");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        estado: this.estado,
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

  async actualizarEstadoSalud() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            estado: this.estado,
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

  async eliminarEstadoSalud(estadoSaludId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(estadoSaludId),
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

export { EstadosSalud };
