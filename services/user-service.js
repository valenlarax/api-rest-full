import userRepository from "../mockups/usersmock.js";

const obtenerUsuarios = async () => {
  return userRepository.obtenerTodos();
};

export default { obtenerUsuarios };