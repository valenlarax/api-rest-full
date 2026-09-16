import mongoose from "mongoose";

const autoSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number
});

const Auto = mongoose.model("Auto", autoSchema);

const obtenerTodos = async () => {
    return await Auto.find();
};

const obtenerPorId = async (id) => {
    return await Auto.findById(id);
};

const crear = async (datos) => {
    const nuevoAuto = new Auto(datos);

    return await nuevoAuto.save();
};

const actualizar = async (id, datos) => {
    return await Auto.findByIdAndUpdate(
        id,
        datos,
        { new: true }
    );
};

const eliminar = async (id) => {
    return await Auto.findByIdAndDelete(id);
};

export default {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};