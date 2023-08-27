import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Habitat {
  id;
  tipo;
  descripcion;
  idHistorial;
  idZona;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("habitat");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerHabitats() {
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
              descripcion: "$descripcion",
              idHistorial: "$idHistorial",
              idZona: "$idZona",
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

  async obtenerHabitat(habitatId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(habitatId),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              tipo: "$tipo",
              descripcion: "$descripcion",
              idHistorial: "$idHistorial",
              idZona: "$idZona",
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

  async agregarHabitat() {
    try {
      const incremental = await autoIncrementID("habitat");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        tipo: this.tipo,
        descripcion: this.descripcion,
        idHistorial: Number(this.idHistorial),
        idZona: Number(this.idZona),
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

export { Habitat };
