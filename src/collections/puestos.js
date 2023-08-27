import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Puestos {
  id;
  nombre;
  salario;
  idHorario;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("puestos");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerPuestos() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "horarios_trabajo",
              localField: "idHorario",
              foreignField: "id",
              as: "horario",
            },
          },
          {
            $unwind: "$horario",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              nombre: "$nombre",
              salario: "$salario",
              horario: "$horario",
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

  async obtenerPuesto(puestoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(puestoId),
            },
          },
          {
            $lookup: {
              from: "horarios_trabajo",
              localField: "idHorario",
              foreignField: "id",
              as: "horario",
            },
          },
          {
            $unwind: "$horario",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              nombre: "$nombre",
              salario: "$salario",
              horario: "$horario",
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
  async agregarPuesto() {
    try {
      const incremental = await autoIncrementID("puestos");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        nombre: this.nombre,
        salario: Number(this.salario),
        idHorario: Number(this.idHorario),
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

export { Puestos };