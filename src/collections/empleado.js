import { connection, startTransaction } from "../utils/connect.js";

class Empleado {
  id;
  nombre;
  fecha_contratacion;
  id_seguimiento;
  idPuesto;
  salario;
  session;

  constructor() {
    this.id = "AUTORIZACIÓN TABLA EMPLEADO"
  }

  async connect() {
    try {
      const result = await connection("empleados");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerEmpleados() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "seguimiento_empleado",
              localField: "id_seguimiento",
              foreignField: "id",
              as: "seguimiento",
            },
          },
          {
            $unwind: "$seguimiento",
          },
          {
            $lookup: {
              from: "puestos",
              localField: "idPuesto",
              foreignField: "id",
              as: "puesto",
            },
          },
          {
            $unwind: "$puesto",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              nombre: "$nombre",
              fecha_contratacion: "$fecha_contratacion",
              id_seguimiento: "$seguimiento.id",
              fecha_creacion_seguimiento: "$seguimiento.fecha_creacion",
              fecha_actualizacion_seguimiento:
                "$seguimiento.fecha_actualizacion",
              idPuesto: "$puesto.id",
              nombrePuesto: "$puesto.nombre",
              salario: "$salario",
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

  async obtenerEmpleado(empleadoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              id: empleadoId,
            },
          },
          {
            $lookup: {
              from: "seguimiento_empleado",
              localField: "id_seguimiento",
              foreignField: "id",
              as: "seguimiento",
            },
          },
          {
            $unwind: "$seguimiento",
          },
          {
            $lookup: {
              from: "puestos",
              localField: "idPuesto",
              foreignField: "id",
              as: "puesto",
            },
          },
          {
            $unwind: "$puesto",
          },
          {
            $project: {
              _id: 0,
              id: "$id",
              nombre: "$nombre",
              fecha_contratacion: "$fecha_contratacion",
              id_seguimiento: "$seguimiento.id",
              fecha_creacion_seguimiento: "$seguimiento.fecha_creacion",
              fecha_actualizacion_seguimiento:
                "$seguimiento.fecha_actualizacion",
              idPuesto: "$puesto.id",
              nombrePuesto: "$puesto.nombre",
              salario: "$salario",
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

  async agregarEmpleado() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        id: this.id,
        nombre: this.nombre,
        fecha_contratacion: new Date(this.fecha_contratacion),
        id_seguimiento: Number(this.id_seguimiento),
        idPuesto: Number(this.idPuesto),
        salario: this.salario,
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

  async actualizarEmpleado() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        {
          id: this.id,
        },
        {
          $set: {
            nombre: this.nombre,
            fecha_contratacion: this.fecha_contratacion,
            id_seguimiento: Number(this.id_seguimiento),
            idPuesto: Number(this.idPuesto),
            salario: this.salario,
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

  async eliminarEmpleado(empleadoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection.deleteOne({
        id: empleadoId,
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

export { Empleado };