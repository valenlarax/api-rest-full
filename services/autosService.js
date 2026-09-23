import { getDependency } from "../dependency.js";

class AutoService {
    constructor() {
        this.autoRepository = getDependency("autoRepository");
    }

    async obtenerAutos() {
        return this.autoRepository.obtenerTodos();
    }

    async obtenerAutoPorId(id) {
        return this.autoRepository.obtenerPorId(id);
    }

    async crearAuto(datos) {
        return this.autoRepository.crear(datos);
    }

    async actualizarAuto(id, datos) {
        return this.autoRepository.actualizar(id, datos);
    }

    async eliminarAuto(id) {
        return this.autoRepository.eliminar(id);
    }
}

export default AutoService;