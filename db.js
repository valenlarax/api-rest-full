import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/concesionaria");

        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
    }
};

export default conectarDB;