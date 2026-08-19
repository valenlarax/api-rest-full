import autosRepository from "../mockups/autosMock.js";

const obtenerAutos = async () => {
  return autosRepository.obtenerTodos();
};

export default { obtenerAutos };