import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class HorariosAlimentacionMantenimiento {
  id;
  id_habitat;
  hora_alimentacionMantenimiento;
  id_encargado;
  descripcion;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("horarios_de_alimentacionMantenimiento");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerHorarios() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              id: "$id",
              id_habitat: "$id_habitat",
              hora_alimentacionMantenimiento: "$hora_alimentacionMantenimiento",
              id_encargado: "$id_encargado",
              descripcion: "$descripcion",
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

  async obtenerHorario(idHorario) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(idHorario),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              id_habitat: "$id_habitat",
              hora_alimentacionMantenimiento: "$hora_alimentacionMantenimiento",
              id_encargado: "$id_encargado",
              descripcion: "$descripcion",
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

  async agregarHorario() {
    try {
      const incremental = await autoIncrementID(
        "horarios_de_alimentacionMantenimiento"
      );
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        id_habitat: Number(this.id_habitat),
        hora_alimentacionMantenimiento: this.hora_alimentacionMantenimiento,
        id_encargado: this.id_encargado,
        descripcion: this.descripcion,
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

export { HorariosAlimentacionMantenimiento };
