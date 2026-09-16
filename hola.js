import express from "express";
import autosRouter from "./api/autos.js";
import conectarDB from "./db.js";
import config from "./config.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/autos", autosRouter);

await mongoose.connect('mongodb://localhost:27017/autosdb');
console.log("Conexión a la base de datos establecida correctamente");

app.listen(config.port, () => {
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

app.get("/users", (req, res) => {
    res.send("Users funciona");
});

conectarDB();

app.listen(config.port, () => {
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
});