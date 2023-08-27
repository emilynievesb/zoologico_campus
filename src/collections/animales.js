import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Animales {
  id;
  nombre;
  especie;
  historialSalud;
  alimentacion;
  reproduccion;
  habitat;
  session;
  constructor() {}

  async connect() {
    try {
      const result = await connection("animales");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerAnimales() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              Id: "$id",
              Nombre: "$nombre",
              Especie: "$especie",
              HistorialSalud: "$historialSalud",
              Alimentacion: "$alimentacion",
              Habitat: "$habitat",
              Reproduccion: "$reproduccion",
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
  async obtenerAnimal(animalId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(animalId),
            },
          },
          {
            $lookup: {
              from: "historialSalud",
              localField: "historialSalud",
              foreignField: "id",
              as: "historialSalud",
            },
          },
          {
            $unwind: "$historialSalud",
          },
          {
            $lookup: {
              from: "estadoSalud",
              localField: "historialSalud.idEstadoSalud",
              foreignField: "id",
              as: "estadoSalud",
            },
          },
          {
            $unwind: "$estadoSalud",
          },
          {
            $lookup: {
              from: "alimentacion",
              localField: "alimentacion",
              foreignField: "id",
              as: "alimentacion",
            },
          },
          {
            $unwind: "$alimentacion",
          },
          {
            $lookup: {
              from: "habitat",
              localField: "habitat",
              foreignField: "id",
              as: "habitat",
            },
          },
          {
            $unwind: "$habitat",
          },
          {
            $lookup: {
              from: "eventos",
              localField: "historialSalud.id",
              foreignField: "historialId",
              as: "eventos",
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              nombre: "$nombre",
              especie: "$especie",
              estadoSalud: "$estadoSalud.estado",
              tipoAlimentacion: "$alimentacion.tipo",
              tipoHabitat: "$habitat.tipo",
              descripcionHabitat: "$habitat.descripcion",
              eventos: "$eventos",
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
  async agregarAnimales() {
    try {
      this.session = await startTransaction();
      const incremental = await autoIncrementID("animales");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        nombre: this.nombre,
        especie: Number(this.especie),
        historialSalud: Number(this.historialSalud),
        alimentacion: Number(this.alimentacion),
        habitat: Number(this.habitat),
        reproduccion: Object(this.reproduccion),
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

export { Bodegas };
