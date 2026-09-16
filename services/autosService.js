import autosRepository from "../repositories/autoRepository.js";

const obtenerAutos = async () => {
    return autosRepository.obtenerTodos();
};

const obtenerAutoPorId = async (id) => {
    return autosRepository.obtenerPorId(id);
};

const crearAuto = async (datos) => {
    return autosRepository.crear(datos);
};

const actualizarAuto = async (id, datos) => {
    return autosRepository.actualizar(id, datos);
};

const eliminarAuto = async (id) => {
    return autosRepository.eliminar(id);
};

export default {
    obtenerAutos,
    obtenerAutoPorId,
    crearAuto,
    actualizarAuto,
    eliminarAuto
};