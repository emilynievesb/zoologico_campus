import { Alimentacion } from "../collections/alimentacion.js";

const agregarTipoAlimentacion = async (tipo) => {
  const tipoAlimentacion = new Alimentacion();
  tipoAlimentacion.tipo = tipo;
  const res = await tipoAlimentacion.agregarTipoAlimentacion();
  return res;
};

export { agregarTipoAlimentacion };
