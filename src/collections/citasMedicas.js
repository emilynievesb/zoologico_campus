import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class CitasMedicas {
  id;
  idHistorialSalud;
  fecha_cita;
  descripcion;
  id_veterinario;

  constructor() {}

  async connect() {
    try {
      const result = await connection("citas_medicas");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerCitasMedicas() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              id: "$id",
              idHistorialSalud: "$idHistorialSalud",
              fecha_cita: "$fecha_cita",
              descripcion: "$descripcion",
              id_veterinario: "$id_veterinario",
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

  async obtenerCitaMedica(citaMedicaId) {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: Number(citaMedicaId),
            },
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              idHistorialSalud: "$idHistorialSalud",
              fecha_cita: "$fecha_cita",
              descripcion: "$descripcion",
              id_veterinario: "$id_veterinario",
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

  async agregarCitaMedica() {
    try {
      const incremental = await autoIncrementID("citas_medicas");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: Number(id),
        idHistorialSalud: Number(this.idHistorialSalud),
        fecha_cita: this.fecha_cita,
        descripcion: this.descripcion,
        id_veterinario: this.id_veterinario,
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

  async actualizarCitaMedica() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            idHistorialSalud: this.idHistorialSalud,
            fecha_cita: this.fecha_cita,
            descripcion: this.descripcion,
            id_veterinario: this.id_veterinario,
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

  async eliminarCitaMedica(citaMedicaId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: Number(citaMedicaId),
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

export { CitasMedicas };
